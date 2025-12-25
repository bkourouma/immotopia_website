'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './ScrollReveal.module.css';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={[
        styles.scrollReveal,
        styles[`scrollReveal--${direction}`],
        isVisible && styles['scrollReveal--visible'],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

