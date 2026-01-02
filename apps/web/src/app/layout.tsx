import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { generateMetadata as generateSEOMetadata, defaultSEO } from '../lib/seo';
import { Toaster } from '@/components/ui/sonner';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import StructuredData from '@/components/seo/StructuredData';
import ConditionalLayout from '@/components/layout/ConditionalLayout';
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <GoogleAnalytics />
        {/* Microsoft Clarity - Chargé après l'interactivité pour ne pas impacter les performances */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ustcflhpz9");
            `,
          }}
        />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}

