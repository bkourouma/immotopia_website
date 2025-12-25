'use client';

import Script from 'next/script';

interface StructuredDataProps {
  data: object | object[];
  id?: string;
}

/**
 * Composant pour injecter les données structurées JSON-LD dans le head
 */
export default function StructuredData({ data, id }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <Script
          key={id || `structured-data-${index}`}
          id={id || `structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

