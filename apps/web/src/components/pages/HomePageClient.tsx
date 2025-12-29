'use client';

import { useEffect } from 'react';

/**
 * Client component wrapper for home page
 * Handles hiding the main header since it's integrated in Hero
 */
export default function HomePageClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide main header on home page since it's integrated in Hero
    const headerWrapper = document.getElementById('main-header-wrapper');
    if (headerWrapper) {
      headerWrapper.style.display = 'none';
    }

    return () => {
      // Restore header when leaving home page
      const headerWrapper = document.getElementById('main-header-wrapper');
      if (headerWrapper) {
        headerWrapper.style.display = '';
      }
    };
  }, []);

  return <>{children}</>;
}

