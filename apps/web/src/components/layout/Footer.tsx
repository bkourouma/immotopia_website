'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@monorepo/ui';

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@immotopia.com';
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+33 X XX XX XX XX';

const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)] animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)] animate-gradient-shift" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-6 pt-16 md:px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-lg font-bold text-transparent">
                  ImmoTopia
                </h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                Plateforme SaaS complète pour la gestion immobilière professionnelle.
              </p>
              {(facebookUrl || linkedinUrl || twitterUrl) && (
                <div className="mt-4 flex gap-3">
                  {facebookUrl && (
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white hover:shadow-lg"
                    >
                      <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  )}
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:shadow-lg"
                    >
                      <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  )}
                  {twitterUrl && (
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:shadow-lg"
                    >
                      <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-6">
              <h4 className="mb-6 text-base font-semibold text-white">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { href: '/la-solution', label: 'La Solution' },
                  { href: '/fonctionnalites', label: 'Fonctionnalités' },
                  { href: '/pour-qui', label: 'Pour Qui ?' },
                  { href: '/tarifs', label: 'Tarifs' },
                  { href: '/ressources', label: 'Ressources' },
                ].map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Resources */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mb-6">
              <h4 className="mb-6 text-base font-semibold text-white">Ressources</h4>
              <ul className="space-y-3">
                {[
                  { href: '/blog', label: 'Blog' },
                  { href: '/ressources/faq', label: 'FAQ' },
                  { href: '/ressources/guides', label: 'Guides pratiques' },
                  { href: '/ressources/actualites', label: 'Actualités' },
                  { href: '/pourquoi-immotopia', label: 'Pourquoi ImmoTopia' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={300}>
            <div className="mb-6">
              <h4 className="mb-6 text-base font-semibold text-white">Contact</h4>
              <ul className="mb-6 space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    <span>Nous contacter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact?demo=true"
                    className="group flex items-center gap-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:translate-x-1 hover:text-blue-300"
                  >
                    <ArrowRight className="h-3 w-3 transition-all duration-300 group-hover:translate-x-1" />
                    <span>Demander une démo</span>
                  </Link>
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="group flex items-center gap-3 rounded-lg bg-gray-800/50 p-3 text-sm text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="transition-colors duration-300">{contactEmail}</span>
                </a>
                <div className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-3 text-sm text-gray-300">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>{contactPhone}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-400">
                © {currentYear} ImmoTopia. Tous droits réservés.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                {[
                  { href: '/mentions-legales', label: 'Mentions légales' },
                  { href: '/confidentialite', label: 'Confidentialité' },
                  { href: '/cgu', label: 'CGU' },
                ].map((item, index) => (
                  <React.Fragment key={item.href}>
                    {index > 0 && <span className="text-gray-600">•</span>}
                    <Link
                      href={item.href}
                      className="text-xs text-gray-400 transition-all duration-300 hover:scale-105 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
