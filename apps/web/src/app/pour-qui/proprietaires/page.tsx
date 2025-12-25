import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Gestion location particuliers - Logiciel propriétaire bailleur',
  description:
    'Solution de gestion locative pour propriétaires bailleurs. Portail dédié, suivi des loyers en temps réel, gain de temps de 50% sur la gestion de vos biens.',
  canonicalUrl: '/pour-qui/proprietaires',
  usePageKeywords: true,
}, '/pour-qui/proprietaires');

export default function ProprietairesPage() {
  const persona = getPersonaById('proprietaires');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
