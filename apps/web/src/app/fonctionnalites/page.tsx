import { Row, Col, Typography } from 'antd';
import { features } from '../../lib/features';
import FeatureCard from '../../components/sections/FeatureCard';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Fonctionnalités - ImmoTopia',
  description:
    'Découvrez toutes les fonctionnalités d\'ImmoTopia : gestion des biens, CRM immobilier, gestion locative, syndic, promotion immobilière, paiements Mobile Money, automatisation IA.',
  keywords: [
    'fonctionnalités immobilier',
    'logiciel immobilier',
    'gestion biens',
    'CRM immobilier',
    'gestion locative',
  ],
  canonicalUrl: '/fonctionnalites',
});

export default function FonctionnalitesPage() {
  return (
    <div className={styles.fonctionnalitesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Des fonctionnalités{' '}
            <span className={styles.highlight}>puissantes et complètes</span>
          </Title>
          <Paragraph className={styles.description}>
            ImmoTopia regroupe tous les outils nécessaires à la gestion immobilière professionnelle
            sur une seule plateforme intuitive et performante.
          </Paragraph>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row gutter={[24, 24]}>
            {features.map((feature) => (
              <Col xs={24} sm={12} lg={8} key={feature.id}>
                <FeatureCard feature={feature} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}
