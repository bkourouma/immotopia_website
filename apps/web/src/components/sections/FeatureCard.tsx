'use client';

import React from 'react';
import { Card, Typography } from 'antd';
import Link from 'next/link';
import type { Feature } from '../../lib/features';
import styles from './FeatureCard.module.css';

const { Title, Paragraph } = Typography;

interface FeatureCardProps {
  feature: Feature;
  showDescription?: boolean;
  className?: string;
}

export default function FeatureCard({
  feature,
  showDescription = true,
  className,
}: FeatureCardProps) {
  return (
    <Link href={feature.slug} className={className}>
      <Card className={styles.featureCard} hoverable>
        <div className={styles.cardContent}>
          {feature.icon && (
            <div className={styles.icon}>{feature.icon}</div>
          )}
          <Title level={4} className={styles.featureTitle}>
            {feature.name}
          </Title>
          {showDescription && (
            <Paragraph className={styles.featureDescription}>
              {feature.description}
            </Paragraph>
          )}
          {feature.benefits && feature.benefits.length > 0 && (
            <ul className={styles.benefitsList}>
              {feature.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </Link>
  );
}
