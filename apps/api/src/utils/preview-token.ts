import jwt from 'jsonwebtoken';

const PREVIEW_TOKEN_SECRET = process.env.JWT_SECRET || 'change-me-in-production';
const PREVIEW_TOKEN_EXPIRY = '1h'; // 1 hour

export interface PreviewTokenPayload {
  entityType: 'BlogPost' | 'Guide' | 'Page';
  entityId: string;
}

/**
 * Generate a preview token for draft content
 */
export function generatePreviewToken(payload: PreviewTokenPayload): string {
  return jwt.sign(payload, PREVIEW_TOKEN_SECRET, {
    expiresIn: PREVIEW_TOKEN_EXPIRY,
  });
}

/**
 * Verify and decode a preview token
 */
export function verifyPreviewToken(token: string): PreviewTokenPayload | null {
  try {
    const decoded = jwt.verify(token, PREVIEW_TOKEN_SECRET) as PreviewTokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}



