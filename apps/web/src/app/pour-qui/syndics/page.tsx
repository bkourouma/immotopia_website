import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Gestion syndic copropriété - Logiciel syndic professionnel',
  description:
    'Logiciel de gestion de copropriété pour syndics professionnels en Afrique de l\'Ouest. Automatisez les charges, simplifiez l\'administration, réduisez le temps de gestion de 60%.',
  canonicalUrl: '/pour-qui/syndics',
  usePageKeywords: true,
}, '/pour-qui/syndics');

export default function SyndicsPage() {
  const persona = getPersonaById('syndics');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
