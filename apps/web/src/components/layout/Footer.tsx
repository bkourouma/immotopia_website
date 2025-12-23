'use client';

import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import Link from 'next/link';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import styles from './Footer.module.css';

const { Footer: AntFooter } = Layout;

const contactEmail = process.env.CONTACT_EMAIL || 'contact@immotopia.com';
const contactPhone = process.env.CONTACT_PHONE || '+33 X XX XX XX XX';

const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className={styles.footer}>
      <div className={styles.footerContainer}>
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={6}>
            <div className={styles.section}>
              <h3 className={styles.title}>ImmoTopia</h3>
              <p className={styles.description}>
                Plateforme SaaS complète pour la gestion immobilière professionnelle.
              </p>
              <Space size="middle" className={styles.socialLinks}>
                {facebookUrl && (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookOutlined />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinOutlined />
                  </a>
                )}
                {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <TwitterOutlined />
                  </a>
                )}
              </Space>
            </div>
          </Col>

          {/* Navigation */}
          <Col xs={24} sm={12} md={6}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/la-solution">La Solution</Link>
                </li>
                <li>
                  <Link href="/fonctionnalites">Fonctionnalités</Link>
                </li>
                <li>
                  <Link href="/pour-qui">Pour Qui ?</Link>
                </li>
                <li>
                  <Link href="/tarifs">Tarifs</Link>
                </li>
                <li>
                  <Link href="/ressources">Ressources</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Resources */}
          <Col xs={24} sm={12} md={6}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Ressources</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/ressources/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/ressources/guides">Guides pratiques</Link>
                </li>
                <li>
                  <Link href="/ressources/actualites">Actualités</Link>
                </li>
                <li>
                  <Link href="/pourquoi-immotopia">Pourquoi ImmoTopia</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={12} md={6}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/contact">Nous contacter</Link>
                </li>
                <li>
                  <Link href="/contact?demo=true">Demander une démo</Link>
                </li>
              </ul>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MailOutlined />{' '}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
                <div className={styles.contactItem}>
                  <PhoneOutlined /> <span>{contactPhone}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={12}>
              <p className={styles.copyright}>
                © {currentYear} ImmoTopia. Tous droits réservés.
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <div className={styles.legalLinks}>
                <Link href="/mentions-legales">Mentions légales</Link>
                <span className={styles.separator}>|</span>
                <Link href="/confidentialite">Confidentialité</Link>
                <span className={styles.separator}>|</span>
                <Link href="/cgu">CGU</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
}

