import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Guides pratiques - ImmoTopia',
  description: 'Guides téléchargeables pour optimiser votre gestion immobilière.',
  canonicalUrl: '/ressources/guides',
});

export default function GuidesPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>Guides pratiques</Title>
      <Paragraph style={{ fontSize: 18 }}>
        Guides téléchargeables à venir...
      </Paragraph>
    </div>
  );
}

