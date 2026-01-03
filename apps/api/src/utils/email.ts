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
 * Generate HTML email template for customer confirmation/marketing email
 */
function generateCustomerEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merci pour votre demande - ImmoTopia</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
      <div style="background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: white; padding: 40px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Merci pour votre demande !</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
            Bonjour <strong>${escapeHtml(data.name)}</strong>,
          </p>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.8;">
            Nous avons bien reçu votre demande de contact et nous vous remercions de l'intérêt que vous portez à <strong>ImmoTopia</strong>.
          </p>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.8;">
            Notre équipe va examiner votre demande et <strong>reviendra vers vous dans les plus brefs délais</strong> pour répondre à vos questions et vous présenter notre solution de gestion immobilière.
          </p>
          
          <!-- CTA Section -->
          <div style="background-color: #F0F7FF; border-left: 4px solid #2563EB; padding: 20px; margin: 30px 0; border-radius: 4px;">
            <h2 style="color: #2563EB; margin-top: 0; font-size: 20px;">En attendant, découvrez ImmoTopia</h2>
            <p style="color: #555; margin-bottom: 15px;">
              ImmoTopia est la plateforme SaaS complète pour gérer votre activité immobilière :
            </p>
            <ul style="color: #555; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">📊 <strong>CRM Immobilier</strong> - Gérez vos prospects et clients efficacement</li>
              <li style="margin-bottom: 8px;">🏠 <strong>Gestion de biens</strong> - Inventaire complet de vos propriétés</li>
              <li style="margin-bottom: 8px;">💰 <strong>Gestion locative</strong> - Suivez les loyers, quittances et charges</li>
              <li style="margin-bottom: 8px;">🏢 <strong>Syndic de copropriété</strong> - Gérez les copropriétés en toute simplicité</li>
              <li style="margin-bottom: 8px;">🤖 <strong>Automatisation IA</strong> - Gagnez du temps avec l'intelligence artificielle</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://immotopia.immo-annonces.fr/fonctionnalites" style="display: inline-block; background-color: #2563EB; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
              Découvrir nos fonctionnalités
            </a>
          </div>
          
          <p style="font-size: 14px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            Si vous avez des questions urgentes, n'hésitez pas à nous contacter directement :
            <br>
            📧 <a href="mailto:contact@immotopia.com" style="color: #2563EB;">contact@immotopia.com</a>
            <br>
            📞 <a href="tel:+2250707664105" style="color: #2563EB;">+225 07 07 66 41 05</a>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
          <p style="margin: 0; font-size: 12px; color: #999;">
            © ${new Date().getFullYear()} ImmoTopia. Tous droits réservés.
            <br>
            Cette demande a été envoyée depuis le site web ImmoTopia.
          </p>
        </div>
      </div>
    </body>
    </html>
  `.trim();
}

/**
 * Generate plain text email for customer confirmation
 */
function generateCustomerEmailText(data: ContactFormData): string {
  return `
Merci pour votre demande - ImmoTopia

Bonjour ${data.name},

Nous avons bien reçu votre demande de contact et nous vous remercions de l'intérêt que vous portez à ImmoTopia.

Notre équipe va examiner votre demande et reviendra vers vous dans les plus brefs délais pour répondre à vos questions et vous présenter notre solution de gestion immobilière.

En attendant, découvrez ImmoTopia :
- CRM Immobilier - Gérez vos prospects et clients efficacement
- Gestion de biens - Inventaire complet de vos propriétés
- Gestion locative - Suivez les loyers, quittances et charges
- Syndic de copropriété - Gérez les copropriétés en toute simplicité
- Automatisation IA - Gagnez du temps avec l'intelligence artificielle

Découvrez nos fonctionnalités : https://immotopia.immo-annonces.fr/fonctionnalites

Si vous avez des questions urgentes, n'hésitez pas à nous contacter :
Email : contact@immotopia.com
Téléphone : +225 07 07 66 41 05

© ${new Date().getFullYear()} ImmoTopia. Tous droits réservés.
  `.trim();
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

/**
 * Send marketing/confirmation email to the customer who submitted the contact form
 */
export async function sendCustomerConfirmationEmail(data: ContactFormData): Promise<void> {
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
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Verify connection
  await transporter.verify();

  // Send email to customer
  const info = await transporter.sendMail({
    from: EMAIL_FROM,
    to: data.email, // Send to the person who submitted the form
    subject: 'Merci pour votre demande - ImmoTopia',
    html: generateCustomerEmailTemplate(data),
    text: generateCustomerEmailText(data),
  });

  console.log('✅ Customer confirmation email sent via SMTP:', info.messageId);
}

