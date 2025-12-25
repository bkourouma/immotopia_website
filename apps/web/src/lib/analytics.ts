/**
 * Google Analytics 4 helpers
 * Utilise gtag pour tracker les événements
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Vérifie si GA4 est configuré
 */
export const isGAEnabled = (): boolean => {
  return typeof window !== 'undefined' && !!GA_MEASUREMENT_ID && !!window.gtag;
};

/**
 * Track un événement GA4
 */
export const trackEvent = (
  eventName: string,
  parameters?: {
    [key: string]: string | number | boolean | undefined;
  }
) => {
  if (!isGAEnabled() || !GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event tracked:', eventName, parameters);
    }
    return;
  }

  window.gtag?.('event', eventName, {
    ...parameters,
    send_to: GA_MEASUREMENT_ID,
  });
};

/**
 * Track un clic sur un CTA
 */
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: location,
  });
};

/**
 * Track la soumission d'un formulaire
 */
export const trackFormSubmission = (formName: string, formType?: string) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: formType || 'contact',
  });
};

/**
 * Track la profondeur de scroll
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
};

/**
 * Track un téléchargement de fichier
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

/**
 * Track un clic externe
 */
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

/**
 * Track une vue de page (utilisé par le composant Analytics)
 */
export const trackPageView = (url: string, title?: string) => {
  if (!isGAEnabled() || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

