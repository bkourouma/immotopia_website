'use client';

import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { personas, type Persona } from '../../lib/personas';
import styles from './PersonasPreview.module.css';

const { Title, Paragraph } = Typography;

interface PersonasPreviewProps {
  className?: string;
  showTitle?: boolean;
}

export default function PersonasPreview({ className, showTitle = true }: PersonasPreviewProps) {
  return (
    <section className={`${styles.personasPreview} ${className || ''}`}>
      <div className={styles.container}>
        {showTitle && (
          <div className={styles.header}>
            <Title level={2} className={styles.title}>
              Une solution adaptée à{' '}
              <span className={styles.highlight}>chaque professionnel</span>
            </Title>
            <Paragraph className={styles.description}>
              ImmoTopia s'adapte aux besoins spécifiques de chaque acteur de l'immobilier.
            </Paragraph>
          </div>
        )}

        <Row gutter={[24, 24]}>
          {personas.map((persona: Persona) => (
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
                      {persona.metrics.slice(0, 2).map((metric: { label: string; value: string }, index: number) => (
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

        <div className={styles.footer}>
          <Link href="/pour-qui">
            <Button type="link" size="large" className={styles.viewAllButton}>
              Voir toutes les solutions <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

