import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Plateforme promoteur immobilier - Commercialisation projets',
  description:
    'Solution complète pour promoteurs immobiliers en Afrique de l\'Ouest. Pilotez vos projets, commercialisez efficacement, réduisez le délai de vente de 30%.',
  canonicalUrl: '/pour-qui/promoteurs',
  usePageKeywords: true,
}, '/pour-qui/promoteurs');

export default function PromoteursPage() {
  const persona = getPersonaById('promoteurs');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
