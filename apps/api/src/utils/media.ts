import { randomUUID } from 'crypto';
import { extname } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const UPLOAD_DIR = process.env.UPLOAD_DIR || join(process.cwd(), '../web/public/uploads');
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_PDF_SIZE = 50 * 1024 * 1024; // 50MB

export interface MediaUploadResult {
  url: string;
  storageKey: string;
  type: 'image' | 'pdf';
  mimeType: string;
  size: number;
  width?: number;
  height?: number;
}

/**
 * Generate a unique filename
 */
function generateFilename(originalName: string): string {
  const ext = extname(originalName);
  const uuid = randomUUID();
  return `${uuid}${ext}`;
}

/**
 * Get storage path for a file
 */
function getStoragePath(filename: string): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return join(year.toString(), month, filename);
}

/**
 * Get image dimensions using sharp (if available)
 */
async function getImageDimensions(data: Buffer): Promise<{ width?: number; height?: number }> {
  try {
    const sharp = (await import('sharp')).default;
    const metadata = await sharp(data).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    // Sharp not available or failed, return undefined dimensions
    return {};
  }
}

/**
 * Upload a file to local storage
 */
export async function uploadFile(
  file: { data: Buffer; filename: string; mimetype: string }
): Promise<MediaUploadResult> {
  const filename = generateFilename(file.filename);
  const storagePath = getStoragePath(filename);
  const fullPath = join(UPLOAD_DIR, storagePath);

  // Ensure directory exists
  await mkdir(join(UPLOAD_DIR, storagePath.split('/').slice(0, -1).join('/')), {
    recursive: true,
  });

  // Validate file type
  const isImage = file.mimetype.startsWith('image/');
  const isPdf = file.mimetype === 'application/pdf';

  if (!isImage && !isPdf) {
    throw new Error('Invalid file type. Only images and PDFs are allowed.');
  }

  if (isImage && file.data.length > MAX_IMAGE_SIZE) {
    throw new Error(`Image too large. Maximum size is ${MAX_IMAGE_SIZE / 1024 / 1024}MB`);
  }

  if (isPdf && file.data.length > MAX_PDF_SIZE) {
    throw new Error(`PDF too large. Maximum size is ${MAX_PDF_SIZE / 1024 / 1024}MB`);
  }

  // Write file
  await writeFile(fullPath, file.data);

  // Get image dimensions if image
  let width: number | undefined;
  let height: number | undefined;

  if (isImage) {
    const dimensions = await getImageDimensions(file.data);
    width = dimensions.width;
    height = dimensions.height;
  }

  // Return URL (relative to public/uploads)
  const url = `/uploads/${storagePath}`;

  return {
    url,
    storageKey: storagePath,
    type: isImage ? 'image' : 'pdf',
    mimeType: file.mimetype,
    size: file.data.length,
    width,
    height,
  };
}
