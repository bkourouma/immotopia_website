import { Header, Footer } from './';

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
