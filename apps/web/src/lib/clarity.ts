/**
 * Microsoft Clarity helpers
 * Utilise window.clarity pour tracker les événements personnalisés
 */

declare global {
  interface Window {
    clarity?: (
      command: 'event',
      eventName: string
    ) => void;
  }
}

/**
 * Vérifie si Clarity est chargé
 */
export const isClarityEnabled = (): boolean => {
  return typeof window !== 'undefined' && typeof window.clarity === 'function';
};

/**
 * Track un événement personnalisé dans Microsoft Clarity
 * @param eventName - Nom de l'événement à tracker
 */
export const trackClarity = (eventName: string): void => {
  if (!isClarityEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Clarity] Event tracked:', eventName);
    }
    return;
  }

  try {
    window.clarity?.('event', eventName);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Clarity] Error tracking event:', error);
    }
  }
};


