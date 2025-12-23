import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Actualités - ImmoTopia',
  description: 'Suivez les dernières nouveautés et mises à jour d\'ImmoTopia.',
  canonicalUrl: '/ressources/actualites',
});

export default function ActualitesPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>Actualités</Title>
      <Paragraph style={{ fontSize: 18 }}>
        Actualités à venir...
      </Paragraph>
    </div>
  );
}

