'use client';

import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Hero.module.css';

const { Title, Paragraph } = Typography;

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.container}>
        <Row justify="center" align="middle">
          <Col xs={24} lg={16} xl={14}>
            <div className={styles.content}>
              <div className={styles.badge}>
                <span>Solution SaaS Professionnelle</span>
              </div>
              <Title level={1} className={styles.title}>
                La plateforme de gestion immobilière{' '}
                <span className={styles.highlight}>tout-en-un</span> pour les professionnels
              </Title>
              <Paragraph className={styles.description}>
                Centralisez toute votre activité immobilière sur une seule plateforme. Gestion des
                biens, CRM, gestion locative, syndic, promotion immobilière et paiements Mobile
                Money, le tout automatisé par l'IA.
              </Paragraph>
              <div className={styles.ctaGroup}>
                <Link href="/contact?demo=true">
                  <Button type="primary" size="large" className={styles.primaryCta}>
                    Demander une démo
                    <ArrowRightOutlined />
                  </Button>
                </Link>
                <Link href="/la-solution">
                  <Button size="large" className={styles.secondaryCta}>
                    Découvrir la solution
                  </Button>
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>+40%</div>
                  <div className={styles.statLabel}>de productivité</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>-60%</div>
                  <div className={styles.statLabel}>de temps administratif</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>100%</div>
                  <div className={styles.statLabel}>centralisé</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.backgroundDecoration} />
    </section>
  );
}

