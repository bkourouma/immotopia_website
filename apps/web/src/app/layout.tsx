import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import frFR from 'antd/locale/fr_FR';
import './globals.css';
import { Header, Footer } from '../components/layout';
import { generateMetadata as generateSEOMetadata, defaultSEO } from '../lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateSEOMetadata(defaultSEO);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider locale={frFR}>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

