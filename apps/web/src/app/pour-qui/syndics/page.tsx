import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour les syndics de copropriété - ImmoTopia',
  description:
    'Automatisez votre gestion de copropriété et réduisez de 60% le temps administratif. Gestion automatisée des charges, portail copropriétaires.',
  keywords: ['syndic copropriété', 'gestion copropriété', 'logiciel syndic'],
  canonicalUrl: '/pour-qui/syndics',
});

export default function SyndicsPage() {
  const persona = getPersonaById('syndics');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
