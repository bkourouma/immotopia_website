import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Technologies - ImmoTopia',
  description:
    'Bénéficiez de l\'IA pour automatiser vos tâches et des paiements Mobile Money pour faciliter les transactions.',
  keywords: ['IA immobilier', 'Mobile Money', 'automatisation IA', 'technologies immobilier'],
  canonicalUrl: '/la-solution/technologies',
});

export default function TechnologiesPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>Technologies avancées</Title>
      <Paragraph style={{ fontSize: 18 }}>
        IA et Mobile Money pour automatiser et faciliter votre gestion immobilière.
      </Paragraph>
      {/* Contenu détaillé à compléter */}
    </div>
  );
}

