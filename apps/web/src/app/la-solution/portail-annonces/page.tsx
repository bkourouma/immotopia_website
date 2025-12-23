import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Portail d\'annonces - ImmoTopia',
  description:
    'Publiez et gérez automatiquement vos annonces immobilières sur tous les canaux depuis un seul endroit.',
  keywords: ['portail annonces', 'publication annonces immobilières', 'diffusion annonces'],
  canonicalUrl: '/la-solution/portail-annonces',
});

export default function PortailAnnoncesPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>Portail d'annonces</Title>
      <Paragraph style={{ fontSize: 18 }}>
        Publiez et gérez automatiquement vos annonces immobilières.
      </Paragraph>
      {/* Contenu détaillé à compléter */}
    </div>
  );
}

