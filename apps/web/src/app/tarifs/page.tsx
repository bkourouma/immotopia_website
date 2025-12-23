import { Row, Col, Card, Typography, Button, List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Tarifs - ImmoTopia',
  description:
    'Découvrez nos formules tarifaires adaptées à votre activité. Formules flexibles pour agences, promoteurs, syndics et gestionnaires.',
  keywords: ['tarifs ImmoTopia', 'prix logiciel immobilier', 'formule gestion immobilière'],
  canonicalUrl: '/tarifs',
});

const plans = [
  {
    name: 'Starter',
    price: 'À partir de',
    priceValue: '99€',
    period: '/mois',
    description: 'Parfait pour les petites structures',
    features: [
      'Gestion jusqu\'à 50 biens',
      'CRM de base',
      'Portail d\'annonces',
      'Support par email',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'À partir de',
    priceValue: '199€',
    period: '/mois',
    description: 'Pour les professionnels actifs',
    features: [
      'Gestion illimitée de biens',
      'CRM complet',
      'Portail d\'annonces premium',
      'Gestion locative',
      'Paiements Mobile Money',
      'Support prioritaire',
    ],
    cta: 'Essayer gratuitement',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    priceValue: 'Sur devis',
    period: '',
    description: 'Solution personnalisée pour grandes structures',
    features: [
      'Toutes les fonctionnalités',
      'Intégrations sur mesure',
      'Formation personnalisée',
      'Support dédié',
      'Hébergement dédié',
      'Accompagnement stratégique',
    ],
    cta: 'Nous contacter',
    popular: false,
  },
];

export default function TarifsPage() {
  return (
    <div className={styles.tarifsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Tarifs transparents et{' '}
            <span className={styles.highlight}>adaptés à vos besoins</span>
          </Title>
          <Paragraph className={styles.description}>
            Choisissez la formule qui correspond à votre activité. Toutes nos formules incluent les
            mises à jour et le support.
          </Paragraph>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row gutter={[32, 32]} justify="center">
            {plans.map((plan, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                  style={{ height: '100%' }}
                >
                  {plan.popular && (
                    <div className={styles.popularBadge}>Le plus populaire</div>
                  )}
                  <div className={styles.cardHeader}>
                    <Title level={3} className={styles.planName}>
                      {plan.name}
                    </Title>
                    <Paragraph className={styles.planDescription}>
                      {plan.description}
                    </Paragraph>
                  </div>
                  <div className={styles.priceSection}>
                    <div className={styles.priceLabel}>{plan.price}</div>
                    <div className={styles.priceValue}>{plan.priceValue}</div>
                    {plan.period && <div className={styles.pricePeriod}>{plan.period}</div>}
                  </div>
                  <List
                    dataSource={plan.features}
                    renderItem={(feature) => (
                      <List.Item className={styles.featureItem}>
                        <CheckOutlined className={styles.checkIcon} />
                        <span>{feature}</span>
                      </List.Item>
                    )}
                  />
                  <div className={styles.cta}>
                    <Link href="/contact?demo=true">
                      <Button
                        type={plan.popular ? 'primary' : 'default'}
                        size="large"
                        block
                        className={styles.ctaButton}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Questions fréquentes
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>Y a-t-il des frais d'installation ?</Title>
                <Paragraph>
                  Non, l'installation est incluse dans toutes nos formules. Notre équipe vous
                  accompagne dans la mise en place.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>Puis-je changer de formule ?</Title>
                <Paragraph>
                  Oui, vous pouvez changer de formule à tout moment. Les modifications prennent
                  effet au début du mois suivant.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>Y a-t-il une période d'essai ?</Title>
                <Paragraph>
                  Oui, nous offrons une période d'essai de 14 jours pour toutes nos formules, sans
                  engagement.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>Le support est-il inclus ?</Title>
                <Paragraph>
                  Oui, toutes nos formules incluent le support. Le niveau de support varie selon la
                  formule choisie.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

