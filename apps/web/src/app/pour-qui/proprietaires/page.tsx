import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour les propriétaires bailleurs - ImmoTopia',
  description:
    'Professionnalisez votre gestion locative et gagnez 50% de temps sur la gestion de vos biens. Portail propriétaire dédié, suivi des loyers en temps réel.',
  keywords: ['propriétaire bailleur', 'gestion locative', 'portail propriétaire'],
  canonicalUrl: '/pour-qui/proprietaires',
});

export default function ProprietairesPage() {
  const persona = getPersonaById('proprietaires');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
