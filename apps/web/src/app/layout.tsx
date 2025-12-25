import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '../components/layout';
import { generateMetadata as generateSEOMetadata, defaultSEO } from '../lib/seo';
import { Toaster } from '@/components/ui/sonner';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import StructuredData from '@/components/seo/StructuredData';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/structured-data';

const inter = Inter({ subsets: ['latin'] });

// Métadonnées par défaut du layout (utilisées si non surchargées par les pages enfants)
export const metadata: Metadata = generateSEOMetadata({
  ...defaultSEO,
  usePageKeywords: true,
}, '/');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for SEO
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="fr">
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

