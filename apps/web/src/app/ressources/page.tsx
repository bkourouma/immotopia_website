import { Row, Col, Card, Typography, Button } from 'antd';
import { ArrowRightOutlined, FileTextOutlined, BookOutlined, NotificationOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { generateMetadata } from '../../lib/seo';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Ressources - ImmoTopia',
  description:
    'Accédez à nos ressources pour améliorer votre gestion immobilière : blog, guides pratiques, actualités et meilleures pratiques.',
  keywords: ['ressources immobilier', 'guides gestion immobilière', 'blog immobilier'],
  canonicalUrl: '/ressources',
});

const resources = [
  {
    icon: <FileTextOutlined />,
    title: 'Blog',
    description: 'Articles, conseils et actualités sur la gestion immobilière professionnelle.',
    link: '/ressources/blog',
    color: '#1890ff',
  },
  {
    icon: <BookOutlined />,
    title: 'Guides pratiques',
    description: 'Guides téléchargeables pour optimiser votre gestion immobilière.',
    link: '/ressources/guides',
    color: '#52c41a',
  },
  {
    icon: <NotificationOutlined />,
    title: 'Actualités',
    description: 'Suivez les dernières nouveautés et mises à jour d\'ImmoTopia.',
    link: '/ressources/actualites',
    color: '#faad14',
  },
];

export default function RessourcesPage() {
  return (
    <div className={styles.ressourcesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Title level={1} className={styles.title}>
            Ressources pour{' '}
            <span className={styles.highlight}>professionnels</span>
          </Title>
          <Paragraph className={styles.description}>
            Accédez à nos ressources pour améliorer votre gestion immobilière et découvrir les
            meilleures pratiques du secteur.
          </Paragraph>
        </div>
      </section>

      {/* Resources Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row gutter={[32, 32]}>
            {resources.map((resource, index) => (
              <Col xs={24} md={8} key={index}>
                <Link href={resource.link}>
                  <Card className={styles.resourceCard} hoverable>
                    <div
                      className={styles.iconWrapper}
                      style={{ color: resource.color }}
                    >
                      {resource.icon}
                    </div>
                    <Title level={3} className={styles.resourceTitle}>
                      {resource.title}
                    </Title>
                    <Paragraph className={styles.resourceDescription}>
                      {resource.description}
                    </Paragraph>
                    <Button type="link" className={styles.resourceLink}>
                      Découvrir <ArrowRightOutlined />
                    </Button>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

