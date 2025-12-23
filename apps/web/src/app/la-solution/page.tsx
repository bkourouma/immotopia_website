import { Row, Col, Card, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'La Solution ImmoTopia - Plateforme SaaS complète',
  description:
    'Découvrez l\'écosystème complet ImmoTopia : SaaS de gestion, portail d\'annonces, technologies IA et Mobile Money pour la gestion immobilière professionnelle.',
  keywords: [
    'solution immobilière',
    'SaaS immobilier',
    'plateforme gestion immobilière',
    'logiciel immobilier',
  ],
  canonicalUrl: '/la-solution',
});

const solutions = [
  {
    title: 'SaaS de gestion',
    description:
      'Une plateforme SaaS complète pour centraliser toute votre gestion immobilière : biens, clients, contrats, paiements.',
    link: '/la-solution/saas-gestion',
    icon: '📊',
  },
  {
    title: 'Portail d\'annonces',
    description:
      'Publiez et gérez automatiquement vos annonces immobilières sur tous les canaux depuis un seul endroit.',
    link: '/la-solution/portail-annonces',
    icon: '🏠',
  },
  {
    title: 'Technologies avancées',
    description:
      'Bénéficiez de l\'IA pour automatiser vos tâches et des paiements Mobile Money pour faciliter les transactions.',
    link: '/la-solution/technologies',
    icon: '🚀',
  },
];

export default function LaSolutionPage() {
  return (
    <div className={styles.solutionPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Une solution{' '}
            <span className={styles.highlight}>complète et intégrée</span>
          </Title>
          <Paragraph className={styles.description}>
            ImmoTopia combine plusieurs modules puissants pour vous offrir une solution de gestion
            immobilière complète, accessible depuis une seule plateforme.
          </Paragraph>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row gutter={[32, 32]}>
            {solutions.map((solution, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className={styles.solutionCard} hoverable>
                  <div className={styles.cardIcon}>{solution.icon}</div>
                  <Title level={3} className={styles.cardTitle}>
                    {solution.title}
                  </Title>
                  <Paragraph className={styles.cardDescription}>
                    {solution.description}
                  </Paragraph>
                  <Link href={solution.link}>
                    <Button type="link" className={styles.cardLink}>
                      En savoir plus <ArrowRightOutlined />
                    </Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Architecture Section */}
      <section className={`${styles.section} ${styles.architectureSection}`}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Un écosystème complet et connecté
          </Title>
          <Paragraph className={styles.architectureDescription}>
            Tous les modules ImmoTopia sont conçus pour fonctionner ensemble, vous offrant une
            expérience fluide et une vue d'ensemble complète de votre activité immobilière.
          </Paragraph>
        </div>
      </section>
    </div>
  );
}
