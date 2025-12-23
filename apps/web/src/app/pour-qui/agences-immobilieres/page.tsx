import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour les agences immobilières - ImmoTopia',
  description:
    'Centralisez toute votre activité immobilière sur une seule plateforme. Augmentez votre productivité de 40% avec ImmoTopia.',
  keywords: [
    'agence immobilière',
    'logiciel agence immobilière',
    'CRM immobilier',
    'gestion agence immobilière',
  ],
  canonicalUrl: '/pour-qui/agences-immobilieres',
});

export default function AgencesPage() {
  const persona = getPersonaById('agences-immobilieres');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
