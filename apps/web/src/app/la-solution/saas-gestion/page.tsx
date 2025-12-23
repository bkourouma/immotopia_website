import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'SaaS de gestion - ImmoTopia',
  description:
    'Plateforme SaaS complète pour centraliser toute votre gestion immobilière : biens, clients, contrats, paiements.',
  keywords: ['SaaS immobilier', 'plateforme gestion immobilière', 'logiciel SaaS'],
  canonicalUrl: '/la-solution/saas-gestion',
});

export default function SaasGestionPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>SaaS de gestion</Title>
      <Paragraph style={{ fontSize: 18 }}>
        Une plateforme SaaS complète pour centraliser toute votre gestion immobilière.
      </Paragraph>
      {/* Contenu détaillé à compléter */}
    </div>
  );
}

