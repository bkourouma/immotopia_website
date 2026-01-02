'use client';

import { usePathname } from 'next/navigation';
import { Header, Footer } from './';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header conditionnel - masqué sur la page d'accueil (géré dans HomePageContent) */}
      <div id="main-header-wrapper">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
