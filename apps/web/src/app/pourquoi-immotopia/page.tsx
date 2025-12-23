import { Row, Col, Card, Typography, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Pourquoi ImmoTopia ? - Avantages et différenciation',
  description:
    'Découvrez pourquoi ImmoTopia est la solution de gestion immobilière la plus complète et performante du marché.',
  keywords: [
    'pourquoi ImmoTopia',
    'avantages ImmoTopia',
    'différenciation logiciel immobilier',
  ],
  canonicalUrl: '/pourquoi-immotopia',
});

const advantages = [
  {
    title: 'Solution tout-en-un',
    description:
      'Tous les outils nécessaires sur une seule plateforme : pas besoin de multiplier les logiciels.',
  },
  {
    title: 'Automatisation IA',
    description:
      'L\'intelligence artificielle au service de votre productivité : automatisation des tâches répétitives.',
  },
  {
    title: 'Mobile Money intégré',
    description:
      'Acceptez les paiements directement depuis la plateforme pour faciliter les transactions.',
  },
  {
    title: 'Évolutif et flexible',
    description:
      'Adapté à tous les profils : des petites agences aux grandes structures immobilières.',
  },
  {
    title: 'Support réactif',
    description:
      'Une équipe à votre écoute pour vous accompagner dans votre utilisation de la plateforme.',
  },
  {
    title: 'Mises à jour régulières',
    description:
      'La plateforme évolue en permanence avec de nouvelles fonctionnalités et améliorations.',
  },
];

const metrics = [
  { value: '+40%', label: 'de productivité' },
  { value: '-60%', label: 'de temps administratif' },
  { value: '100%', label: 'centralisé' },
];

export default function PourquoiImmoTopiaPage() {
  return (
    <div className={styles.pourquoiPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Pourquoi choisir{' '}
            <span className={styles.highlight}>ImmoTopia</span> ?
          </Title>
          <Paragraph className={styles.description}>
            ImmoTopia se distingue par sa complétude, son innovation et son approche centrée sur
            les besoins réels des professionnels de l'immobilier.
          </Paragraph>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <Row gutter={[32, 32]} justify="center">
            {metrics.map((metric, index) => (
              <Col xs={24} sm={8} key={index}>
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Nos avantages différenciants
          </Title>
          <Row gutter={[24, 24]}>
            {advantages.map((advantage, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className={styles.advantageCard} hoverable>
                  <div className={styles.cardIcon}>
                    <CheckCircleOutlined />
                  </div>
                  <Title level={4} className={styles.advantageTitle}>
                    {advantage.title}
                  </Title>
                  <Paragraph className={styles.advantageDescription}>
                    {advantage.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`${styles.section} ${styles.comparisonSection}`}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Avant vs Après ImmoTopia
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className={styles.comparisonCard}>
                <Title level={3} className={styles.comparisonTitle}>
                  Sans ImmoTopia
                </Title>
                <List
                  dataSource={[
                    'Multiples outils non connectés',
                    'Tâches administratives chronophages',
                    'Manque de visibilité globale',
                    'Communication dispersée',
                    'Erreurs manuelles fréquentes',
                  ]}
                  renderItem={(item) => (
                    <List.Item>
                      <span style={{ color: '#ff4d4f' }}>✗</span>
                      <span style={{ marginLeft: 12 }}>{item}</span>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className={`${styles.comparisonCard} ${styles.withImmoTopia}`}>
                <Title level={3} className={styles.comparisonTitle}>
                  Avec ImmoTopia
                </Title>
                <List
                  dataSource={[
                    'Plateforme unique centralisée',
                    'Automatisation des tâches répétitives',
                    'Vue d\'ensemble en temps réel',
                    'Communication unifiée',
                    'Réduction drastique des erreurs',
                  ]}
                  renderItem={(item) => (
                    <List.Item>
                      <span style={{ color: '#52c41a' }}>✓</span>
                      <span style={{ marginLeft: 12 }}>{item}</span>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

