import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Logiciel gestion locative - Gestionnaire locatif professionnel',
  description:
    'Solution de gestion locative complète pour gestionnaires professionnels. Automatisez les paiements, suivez les loyers, réduisez les impayés de 40%.',
  canonicalUrl: '/pour-qui/gestionnaires',
  usePageKeywords: true,
}, '/pour-qui/gestionnaires');

export default function GestionnairesPage() {
  const persona = getPersonaById('gestionnaires');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
