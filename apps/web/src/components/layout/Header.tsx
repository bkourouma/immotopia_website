'use client';

import React, { useState } from 'react';
import { Layout, Menu, Button as AntButton, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Header.module.css';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  className?: string;
}

const menuItems = [
  {
    key: 'solution',
    label: <Link href="/la-solution">La Solution</Link>,
  },
  {
    key: 'fonctionnalites',
    label: <Link href="/fonctionnalites">Fonctionnalités</Link>,
  },
  {
    key: 'pour-qui',
    label: <Link href="/pour-qui">Pour Qui ?</Link>,
  },
  {
    key: 'tarifs',
    label: <Link href="/tarifs">Tarifs</Link>,
  },
  {
    key: 'ressources',
    label: <Link href="/ressources">Ressources</Link>,
  },
  {
    key: 'contact',
    label: <Link href="/contact">Contact</Link>,
  },
];

export default function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AntHeader className={`${styles.header} ${className || ''}`}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>ImmoTopia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Menu
              mode="horizontal"
              items={menuItems}
              className={styles.menu}
              selectedKeys={[]}
            />
          </nav>

          {/* CTA Button */}
          <div className={styles.cta}>
            <AntButton
              type="primary"
              size="large"
              className={styles.ctaButton}
              href="/contact?demo=true"
            >
              Demander une démo
            </AntButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleMobileMenu}
        open={mobileMenuOpen}
        className={styles.mobileDrawer}
      >
        <Menu
          mode="vertical"
          items={menuItems.map((item) => ({
            ...item,
            onClick: handleMenuClick,
          }))}
          selectedKeys={[]}
        />
        <div className={styles.mobileCta}>
          <AntButton
            type="primary"
            size="large"
            block
            href="/contact?demo=true"
            onClick={handleMenuClick}
          >
            Demander une démo
          </AntButton>
        </div>
      </Drawer>
    </>
  );
}

