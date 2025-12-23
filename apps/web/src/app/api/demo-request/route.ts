import { NextRequest, NextResponse } from 'next/server';
import { DemoRequestSchema } from '@monorepo/contracts';

/**
 * Route API pour recevoir les demandes de démo
 * TODO: Intégrer avec CRM (HubSpot, Pipedrive, etc.)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation avec Zod
    const validatedData = DemoRequestSchema.parse(body);
    
    // TODO: Envoyer vers CRM
    // Exemple:
    // await sendToCRM(validatedData);
    
    // Pour l'instant, on log et on retourne un succès
    console.log('Demo request received:', validatedData);
    
    // Simuler un délai d'API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(
      {
        success: true,
        message: 'Demande de démo enregistrée avec succès',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing demo request:', error);
    
    if (error.errors) {
      // Erreur de validation Zod
      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
          details: error.errors,
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

