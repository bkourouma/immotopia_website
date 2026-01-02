import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  as?: 'button' | 'a' | React.ComponentType<any>;
  href?: string;
  children: React.ReactNode;
  LinkComponent?: React.ComponentType<any>; // For React Router or other Link components
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled,
  className = '',
  as = 'button',
  href,
  children,
  LinkComponent,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    isLoading && styles['button--loading'],
    disabled && styles['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = isLoading ? (
    <>
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles['loading-text']}>Chargement...</span>
    </>
  ) : (
    children
  );

  if (as === 'a' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Use LinkComponent if provided (for React Router, etc.)
  if (LinkComponent && href) {
    return (
      <LinkComponent
        className={classes}
        to={href}
        href={href}
        {...(props as any)}
      >
        {content}
      </LinkComponent>
    );
  }

  // Use custom component if provided via 'as' prop
  if (as && typeof as !== 'string' && href) {
    const CustomLink = as;
    return (
      <CustomLink
        className={classes}
        href={href}
        {...(props as any)}
      >
        {content}
      </CustomLink>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

