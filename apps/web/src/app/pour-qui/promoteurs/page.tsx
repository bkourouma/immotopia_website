import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour les promoteurs immobiliers - ImmoTopia',
  description:
    'Pilotez vos projets immobiliers et vendez plus vite avec un suivi complet de la commercialisation. Réduisez le délai de commercialisation de 30%.',
  keywords: ['promoteur immobilier', 'commercialisation immobilière', 'suivi projet immobilier'],
  canonicalUrl: '/pour-qui/promoteurs',
});

export default function PromoteursPage() {
  const persona = getPersonaById('promoteurs');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
