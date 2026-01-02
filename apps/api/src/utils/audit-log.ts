import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface AuditLogData {
  adminUserId?: string;
  action: string;
  entityType?: string;
  entityId?: string;
  ip?: string;
  userAgent?: string;
  diffJson?: any;
}

/**
 * Create an audit log entry
 */
export async function createAuditLog(data: AuditLogData): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        adminUserId: data.adminUserId || null,
        action: data.action,
        entityType: data.entityType || null,
        entityId: data.entityId || null,
        ip: data.ip || null,
        userAgent: data.userAgent || null,
        diffJson: data.diffJson || null,
      },
    });
  } catch (error) {
    // Don't fail the request if audit logging fails
    console.error('Failed to create audit log:', error);
  }
}

