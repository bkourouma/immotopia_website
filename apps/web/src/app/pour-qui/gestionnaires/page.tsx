import { getPersonaById } from '../../../lib/personas';
import PersonaPageTemplate from '../../../components/templates/PersonaPageTemplate';
import { generateMetadata } from '../../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pour les gestionnaires locatifs - ImmoTopia',
  description:
    'Simplifiez votre gestion locative avec l\'automatisation des paiements et du suivi. Réduction des impayés de 40%.',
  keywords: ['gestionnaire locatif', 'gestion locative', 'logiciel gestion locative'],
  canonicalUrl: '/pour-qui/gestionnaires',
});

export default function GestionnairesPage() {
  const persona = getPersonaById('gestionnaires');
  
  if (!persona) {
    return <div>Persona non trouvé</div>;
  }

  return <PersonaPageTemplate persona={persona} />;
}
