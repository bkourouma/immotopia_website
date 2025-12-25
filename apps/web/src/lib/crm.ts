/**
 * CRM integration helpers
 * Supporte HubSpot et Pipedrive (configuré via variables d'environnement)
 */

import type { DemoRequest } from '@monorepo/contracts';

const CRM_PROVIDER = process.env.CRM_PROVIDER || 'hubspot'; // 'hubspot' | 'pipedrive'

interface CRMConfig {
  apiKey: string;
  portalId?: string; // Pour HubSpot
}

/**
 * Mapping des données du formulaire vers le format CRM
 */
function mapToCRMFormat(data: DemoRequest) {
  const personaLabels: Record<DemoRequest['persona'], string> = {
    'agences-immobilieres': 'Agence immobilière',
    'promoteurs': 'Promoteur immobilier',
    'syndics': 'Syndic de copropriété',
    'gestionnaires': 'Gestionnaire locatif',
    'proprietaires': 'Propriétaire bailleur',
  };

  return {
    email: data.email,
    firstName: data.nom.split(' ')[0] || data.nom,
    lastName: data.nom.split(' ').slice(1).join(' ') || '',
    phone: data.telephone,
    company: data.entreprise || '',
    persona: personaLabels[data.persona],
    message: data.message || '',
    leadSource: 'Website Demo Request',
  };
}

/**
 * Envoi vers HubSpot CRM
 */
async function sendToHubSpot(data: DemoRequest, config: CRMConfig): Promise<void> {
  const crmData = mapToCRMFormat(data);
  const portalId = config.portalId || process.env.CRM_PORTAL_ID;

  if (!portalId) {
    throw new Error('HubSpot Portal ID is required');
  }

  const url = `https://api.hubapi.com/crm/v3/objects/contacts`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      properties: {
        email: crmData.email,
        firstname: crmData.firstName,
        lastname: crmData.lastName,
        phone: crmData.phone,
        company: crmData.company,
        hs_lead_status: 'NEW',
        lead_source: crmData.leadSource,
        persona_type: crmData.persona,
        notes: crmData.message,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`HubSpot API error: ${response.status} - ${error}`);
  }
}

/**
 * Envoi vers Pipedrive CRM
 */
async function sendToPipedrive(data: DemoRequest, config: CRMConfig): Promise<void> {
  const crmData = mapToCRMFormat(data);

  // Créer ou trouver une personne
  const findPersonUrl = `https://api.pipedrive.com/v1/persons/search?term=${encodeURIComponent(crmData.email)}&api_token=${config.apiKey}`;
  const findResponse = await fetch(findPersonUrl);

  let personId: number | null = null;

  if (findResponse.ok) {
    const findData = await findResponse.json();
    if (findData.data?.items?.[0]?.item?.id) {
      personId = findData.data.items[0].item.id;
    }
  }

  // Si personne n'existe pas, la créer
  if (!personId) {
    const createPersonUrl = `https://api.pipedrive.com/v1/persons?api_token=${config.apiKey}`;
    const createResponse = await fetch(createPersonUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${crmData.firstName} ${crmData.lastName}`.trim(),
        email: [{ value: crmData.email, primary: true }],
        phone: [{ value: crmData.phone, primary: true }],
        org_name: crmData.company || undefined,
      }),
    });

    if (!createResponse.ok) {
      const error = await createResponse.text();
      throw new Error(`Pipedrive API error: ${createResponse.status} - ${error}`);
    }

    const createData = await createResponse.json();
    personId = createData.data?.id;
  }

  if (!personId) {
    throw new Error('Failed to create or find person in Pipedrive');
  }

  // Créer un deal/opportunity
  const createDealUrl = `https://api.pipedrive.com/v1/deals?api_token=${config.apiKey}`;
  const dealResponse = await fetch(createDealUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `Demo Request - ${crmData.persona}`,
      person_id: personId,
      stage_id: 1, // Nouveau lead
      value: 0,
    }),
  });

  if (!dealResponse.ok) {
    const error = await dealResponse.text();
    throw new Error(`Pipedrive Deal API error: ${dealResponse.status} - ${error}`);
  }

  // Ajouter une note si message présent
  if (crmData.message) {
    const noteUrl = `https://api.pipedrive.com/v1/notes?api_token=${config.apiKey}`;
    await fetch(noteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: crmData.message,
        person_id: personId,
      }),
    });
  }
}

/**
 * Envoie les données vers le CRM configuré
 */
export async function sendToCRM(data: DemoRequest): Promise<void> {
  const apiKey = process.env.CRM_API_KEY;

  if (!apiKey) {
    console.warn('CRM_API_KEY not configured, skipping CRM integration');
    return;
  }

  const config: CRMConfig = {
    apiKey,
    portalId: process.env.CRM_PORTAL_ID,
  };

  try {
    if (CRM_PROVIDER === 'hubspot') {
      await sendToHubSpot(data, config);
    } else if (CRM_PROVIDER === 'pipedrive') {
      await sendToPipedrive(data, config);
    } else {
      throw new Error(`Unsupported CRM provider: ${CRM_PROVIDER}`);
    }

    console.log(`Demo request sent to ${CRM_PROVIDER} CRM successfully`);
  } catch (error) {
    console.error(`Error sending to ${CRM_PROVIDER} CRM:`, error);
    // On ne throw pas l'erreur pour ne pas bloquer la réponse au client
    // L'erreur est loggée pour debug
    throw error; // Mais on peut throw si on veut que l'API route gère l'erreur
  }
}

/**
 * Vérifie si le CRM est configuré
 */
export function isCRMConfigured(): boolean {
  return !!process.env.CRM_API_KEY;
}

