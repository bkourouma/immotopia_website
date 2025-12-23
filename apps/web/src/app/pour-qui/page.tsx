import { Row, Col, Card, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { personas } from '../../lib/personas';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Pour Qui ? - ImmoTopia',
  description:
    'ImmoTopia s\'adapte aux besoins spécifiques de chaque acteur de l\'immobilier : agences, promoteurs, syndics, gestionnaires, propriétaires.',
  keywords: [
    'agence immobilière',
    'promoteur immobilier',
    'syndic copropriété',
    'gestionnaire locatif',
    'propriétaire bailleur',
  ],
  canonicalUrl: '/pour-qui',
});

export default function PourQuiPage() {
  return (
    <div className={styles.pourQuiPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Une solution adaptée à{' '}
            <span className={styles.highlight}>chaque professionnel</span>
          </Title>
          <Paragraph className={styles.description}>
            ImmoTopia s'adapte aux besoins spécifiques de chaque acteur de l'immobilier. Découvrez
            comment notre solution répond à vos défis quotidiens.
          </Paragraph>
        </div>
      </section>

      {/* Personas Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row gutter={[24, 24]}>
            {personas.map((persona) => (
              <Col xs={24} sm={12} lg={8} key={persona.id}>
                <Card
                  className={styles.personaCard}
                  hoverable
                  actions={[
                    <Link key="link" href={persona.slug}>
                      <Button type="link" className={styles.cardAction}>
                        En savoir plus <ArrowRightOutlined />
                      </Button>
                    </Link>,
                  ]}
                >
                  <div className={styles.cardContent}>
                    <h3 className={styles.personaName}>{persona.name}</h3>
                    <p className={styles.personaDescription}>{persona.description}</p>
                    {persona.metrics && persona.metrics.length > 0 && (
                      <div className={styles.metrics}>
                        {persona.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className={styles.metric}>
                            <span className={styles.metricValue}>{metric.value}</span>
                            <span className={styles.metricLabel}>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <Card className={styles.ctaCard}>
            <Title level={2} className={styles.ctaTitle}>
              Trouvez votre solution personnalisée
            </Title>
            <Paragraph className={styles.ctaDescription}>
              Quelle que soit votre activité dans l'immobilier, ImmoTopia a une solution pour vous.
              Découvrez comment nous pouvons vous aider.
            </Paragraph>
            <Link href="/contact?demo=true">
              <Button type="primary" size="large" className={styles.ctaButton}>
                Demander une démonstration
                <ArrowRightOutlined />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
