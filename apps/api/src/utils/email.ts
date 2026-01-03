/**
 * Email service for Fastify API
 * Sends email notifications via SMTP (Nodemailer)
 */

import nodemailer from 'nodemailer';

const EMAIL_FROM = process.env.SMTP_FROM || process.env.EMAIL_FROM || 'noreply@immotopia.com';
const EMAIL_TO = process.env.EMAIL_TO || 'agent@immo-annonces.fr';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  persona?: string;
}

const personaLabels: Record<string, string> = {
  'agences-immobilieres': 'Agence immobilière',
  'promoteurs': 'Promoteur immobilier',
  'syndics': 'Syndic de copropriété',
  'gestionnaires': 'Gestionnaire locatif',
  'proprietaires': 'Propriétaire bailleur',
};

/**
 * Generate HTML email template for contact form notification
 */
function generateEmailTemplate(data: ContactFormData): string {
  const personaLabel = data.persona ? personaLabels[data.persona] || data.persona : 'Non spécifié';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de contact - ImmoTopia</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">Nouvelle demande de contact</h1>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #2563EB; margin-top: 0;">Informations du prospect</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 150px;">Nom complet :</td>
            <td style="padding: 10px;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Email :</td>
            <td style="padding: 10px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
            <td style="padding: 10px;"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td style="padding: 10px; font-weight: bold;">Entreprise :</td>
            <td style="padding: 10px;">${escapeHtml(data.company)}</td>
          </tr>
          ` : ''}
          ${data.persona ? `
          <tr>
            <td style="padding: 10px; font-weight: bold;">Profil :</td>
            <td style="padding: 10px;">${escapeHtml(personaLabel)}</td>
          </tr>
          ` : ''}
          ${data.message ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message :</td>
            <td style="padding: 10px; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
          </tr>
          ` : ''}
        </table>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
          <p>Cette demande a été envoyée depuis le site web ImmoTopia.</p>
          <p>Date : ${new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' })}</p>
        </div>
      </div>
    </body>
    </html>
  `.trim();
}

/**
 * Generate plain text email for contact form notification
 */
function generateEmailText(data: ContactFormData): string {
  const personaLabel = data.persona ? personaLabels[data.persona] || data.persona : 'Non spécifié';

  return `
Nouvelle demande de contact - ImmoTopia

Informations du prospect :
- Nom complet : ${data.name}
- Email : ${data.email}
${data.phone ? `- Téléphone : ${data.phone}` : ''}
${data.company ? `- Entreprise : ${data.company}` : ''}
${data.persona ? `- Profil : ${personaLabel}` : ''}
${data.message ? `\nMessage :\n${data.message}` : ''}

Date : ${new Date().toLocaleString('fr-FR')}
  `.trim();
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Check if SMTP is configured
 */
export function isEmailConfigured(): boolean {
  return !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
}

/**
 * Send contact form notification email via SMTP
 */
export async function sendContactNotificationEmail(data: ContactFormData): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error('SMTP configuration is incomplete. SMTP_HOST, SMTP_USER, and SMTP_PASS are required.');
  }

  const smtpHost = process.env.SMTP_HOST!;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER!;
  const smtpPass = process.env.SMTP_PASS!;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Verify connection
  await transporter.verify();

  // Send email
  const info = await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: 'Nouvelle demande de contact - ImmoTopia',
    html: generateEmailTemplate(data),
    text: generateEmailText(data),
  });

  console.log('✅ Email sent via SMTP:', info.messageId);
}

