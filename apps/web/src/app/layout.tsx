import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateMetadata as generateSEOMetadata, defaultSEO, SITE_URL } from '../lib/seo';
import { Toaster } from '@/components/ui/sonner';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MicrosoftClarity from '@/components/analytics/MicrosoftClarity';
import StructuredData from '@/components/seo/StructuredData';
import ConditionalLayout from '@/components/layout/ConditionalLayout';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/structured-data';

const inter = Inter({ subsets: ['latin'] });

// Google Search Console verification code
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION || process.env.GSC_VERIFICATION;

// Métadonnées par défaut du layout (utilisées si non surchargées par les pages enfants)
export const metadata: Metadata = {
  ...generateSEOMetadata({
    ...defaultSEO,
    usePageKeywords: true,
  }, '/'),
  metadataBase: new URL(SITE_URL),
};

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
        {/* Google Search Console Verification */}
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}

