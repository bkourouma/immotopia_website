import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Logiciel pour agence immobilière - ImmoTopia',
  description:
    'Solution complète pour agences immobilières en Afrique de l\'Ouest. Gestion des biens, CRM, commercialisation, prospection. Augmentez votre productivité de 40%.',
  canonicalUrl: '/pour-qui/agences-immobilieres',
  usePageKeywords: true,
}, '/pour-qui/agences-immobilieres');

export default function AgencesPage() {
  const persona = getPersonaById('agences-immobilieres');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
