import React from 'react';
import styles from './Card.module.css';

export type CardVariant = 'default' | 'feature' | 'persona' | 'testimonial';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverable = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    styles.card,
    styles[`card--${variant}`],
    hoverable && styles['card--hoverable'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

