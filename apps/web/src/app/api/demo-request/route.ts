import { NextRequest, NextResponse } from 'next/server';
import { DemoRequestSchema } from '@monorepo/contracts';
import { sendToCRM, isCRMConfigured } from '@/lib/crm';
import { sendNotificationEmail, isEmailConfigured } from '@/lib/email';

/**
 * Route API pour recevoir les demandes de démo
 * Intègre avec CRM (HubSpot/Pipedrive) et envoie des notifications email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Protection anti-spam : vérifier le champ honeypot
    if (body.honeypot && body.honeypot !== '') {
      console.warn('Spam detected: honeypot field filled');
      return NextResponse.json(
        {
          success: false,
          error: 'Requête invalide',
        },
        { status: 400 }
      );
    }

    // Validation avec Zod
    const validatedData = DemoRequestSchema.parse(body);

    // Envoyer vers CRM si configuré
    if (isCRMConfigured()) {
      try {
        await sendToCRM(validatedData);
      } catch (crmError) {
        // On log l'erreur mais on continue le traitement
        // pour ne pas bloquer l'envoi de l'email
        console.error('CRM integration error (non-blocking):', crmError);
      }
    } else {
      console.log('CRM not configured, skipping CRM integration');
    }

    // Envoyer l'email de notification si configuré
    let emailSent = false;
    if (isEmailConfigured()) {
      try {
        await sendNotificationEmail(validatedData);
        emailSent = true;
        console.log('✅ Email notification sent successfully');
      } catch (emailError: any) {
        // On log l'erreur mais on continue
        console.error('❌ Email notification error (non-blocking):', emailError);
        console.error('Error details:', {
          message: emailError?.message,
          stack: emailError?.stack,
        });
      }
    } else {
      console.warn('⚠️ Email not configured, skipping email notification');
      console.warn('Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local');
    }

    // Log pour debug (peut être retiré en production)
    console.log('Demo request received:', {
      nom: validatedData.nom,
      email: validatedData.email,
      persona: validatedData.persona,
      emailSent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Demande de démo enregistrée avec succès',
        emailSent, // Include email status in response for debugging
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing demo request:', error);

    if (error.errors || error.name === 'ZodError') {
      // Erreur de validation Zod
      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
          details: error.errors || error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors du traitement de la demande',
      },
      { status: 500 }
    );
  }
}

