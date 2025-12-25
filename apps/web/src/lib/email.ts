/**
 * Email service helpers
 * Supporte SendGrid et Resend (configuré via variables d'environnement)
 */

import type { DemoRequest } from '@monorepo/contracts';

const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'resend'; // 'sendgrid' | 'resend' | 'nodemailer'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@immotopia.com';
const EMAIL_TO = process.env.EMAIL_TO || 'contact@immotopia.com';

const personaLabels: Record<DemoRequest['persona'], string> = {
  'agences-immobilieres': 'Agence immobilière',
  'promoteurs': 'Promoteur immobilier',
  'syndics': 'Syndic de copropriété',
  'gestionnaires': 'Gestionnaire locatif',
  'proprietaires': 'Propriétaire bailleur',
};

/**
 * Génère le template HTML pour l'email de notification
 */
function generateEmailTemplate(data: DemoRequest): string {
  const personaLabel = personaLabels[data.persona];

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de démo - ImmoTopia</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #1890ff; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">Nouvelle demande de démo</h1>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #1890ff; margin-top: 0;">Informations du prospect</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 150px;">Nom complet :</td>
            <td style="padding: 10px;">${data.nom}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Email :</td>
            <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
            <td style="padding: 10px;"><a href="tel:${data.telephone}">${data.telephone}</a></td>
          </tr>
          ${data.entreprise ? `
          <tr>
            <td style="padding: 10px; font-weight: bold;">Entreprise :</td>
            <td style="padding: 10px;">${data.entreprise}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px; font-weight: bold;">Profil :</td>
            <td style="padding: 10px;">${personaLabel}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message :</td>
            <td style="padding: 10px; white-space: pre-wrap;">${data.message}</td>
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
 * Génère le texte brut pour l'email
 */
function generateEmailText(data: DemoRequest): string {
  const personaLabel = personaLabels[data.persona];

  return `
Nouvelle demande de démo - ImmoTopia

Informations du prospect :
- Nom complet : ${data.nom}
- Email : ${data.email}
- Téléphone : ${data.telephone}
${data.entreprise ? `- Entreprise : ${data.entreprise}` : ''}
- Profil : ${personaLabel}
${data.message ? `\nMessage :\n${data.message}` : ''}

Date : ${new Date().toLocaleString('fr-FR')}
  `.trim();
}

/**
 * Envoi via SendGrid
 */
async function sendViaSendGrid(data: DemoRequest): Promise<void> {
  const apiKey = process.env.EMAIL_API_KEY || process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    throw new Error('SendGrid API key is required');
  }

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: EMAIL_TO }],
          subject: 'Nouvelle demande de démo - ImmoTopia',
        },
      ],
      from: { email: EMAIL_FROM },
      content: [
        {
          type: 'text/plain',
          value: generateEmailText(data),
        },
        {
          type: 'text/html',
          value: generateEmailTemplate(data),
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${response.status} - ${error}`);
  }
}

/**
 * Envoi via Resend
 */
async function sendViaResend(data: DemoRequest): Promise<void> {
  const apiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Resend API key is required');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject: 'Nouvelle demande de démo - ImmoTopia',
      html: generateEmailTemplate(data),
      text: generateEmailText(data),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${response.status} - ${error}`);
  }
}

/**
 * Envoie l'email de notification
 */
export async function sendNotificationEmail(data: DemoRequest): Promise<void> {
  const apiKey = process.env.EMAIL_API_KEY || process.env.SENDGRID_API_KEY || process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('Email API key not configured, skipping email notification');
    return;
  }

  try {
    if (EMAIL_SERVICE === 'sendgrid') {
      await sendViaSendGrid(data);
    } else if (EMAIL_SERVICE === 'resend') {
      await sendViaResend(data);
    } else {
      throw new Error(`Unsupported email service: ${EMAIL_SERVICE}`);
    }

    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending notification email:', error);
    // On ne throw pas l'erreur pour ne pas bloquer la réponse au client
    // L'erreur est loggée pour debug
    throw error; // Mais on peut throw si on veut que l'API route gère l'erreur
  }
}

/**
 * Vérifie si l'email est configuré
 */
export function isEmailConfigured(): boolean {
  return !!(process.env.EMAIL_API_KEY || process.env.SENDGRID_API_KEY || process.env.RESEND_API_KEY);
}

