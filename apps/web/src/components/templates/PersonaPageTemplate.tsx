'use client';

import React from 'react';
import { Row, Col, Card, Typography, List, Button, Space } from 'antd';
import { CheckCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import type { Persona } from '../../lib/personas';
import styles from './PersonaPageTemplate.module.css';

const { Title, Paragraph } = Typography;

interface PersonaPageTemplateProps {
  persona: Persona;
}

export default function PersonaPageTemplate({ persona }: PersonaPageTemplateProps) {
  return (
    <div className={styles.personaPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} lg={18}>
              <div className={styles.heroContent}>
                <Title level={1} className={styles.heroTitle}>
                  {persona.title}
                </Title>
                <Paragraph className={styles.heroDescription}>{persona.description}</Paragraph>
                {persona.metrics && persona.metrics.length > 0 && (
                  <div className={styles.heroMetrics}>
                    {persona.metrics.map((metric, index) => (
                      <div key={index} className={styles.metricCard}>
                        <div className={styles.metricValue}>{metric.value}</div>
                        <div className={styles.metricLabel}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Problems Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} lg={18}>
              <Title level={2} className={styles.sectionTitle}>
                Les défis que vous rencontrez
              </Title>
              <List
                dataSource={persona.problems}
                renderItem={(problem) => (
                  <List.Item className={styles.problemItem}>
                    <Space>
                      <CheckCircleOutlined className={styles.checkIcon} />
                      <span>{problem}</span>
                    </Space>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`${styles.section} ${styles.solutionsSection}`}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} lg={18}>
              <Title level={2} className={styles.sectionTitle}>
                Comment ImmoTopia vous aide
              </Title>
              <Row gutter={[24, 24]}>
                {persona.solutions.map((solution, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Card className={styles.solutionCard} hoverable>
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <div className={styles.solutionNumber}>{index + 1}</div>
                        <Paragraph className={styles.solutionText}>{solution}</Paragraph>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} lg={18}>
              <Title level={2} className={styles.sectionTitle}>
                Les bénéfices concrets
              </Title>
              <div className={styles.benefitsGrid}>
                {persona.benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitCard}>
                    <CheckCircleOutlined className={styles.benefitIcon} />
                    <span className={styles.benefitText}>{benefit}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} lg={16}>
              <Card className={styles.ctaCard}>
                <Title level={2} className={styles.ctaTitle}>
                  Prêt à transformer votre gestion immobilière ?
                </Title>
                <Paragraph className={styles.ctaDescription}>
                  Découvrez comment ImmoTopia peut répondre spécifiquement aux besoins des{' '}
                  {persona.name.toLowerCase()} et demandez une démonstration personnalisée.
                </Paragraph>
                <Space size="large">
                  <Link href={`/contact?demo=true&persona=${persona.id}`}>
                    <Button type="primary" size="large" className={styles.ctaButton}>
                      Demander une démo personnalisée
                      <ArrowRightOutlined />
                    </Button>
                  </Link>
                  <Link href="/fonctionnalites">
                    <Button size="large">Découvrir les fonctionnalités</Button>
                  </Link>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
