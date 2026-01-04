'use client';

import { useState } from 'react';
import { Button } from './button';
import { Check, Copy } from 'lucide-react';

interface CopyToClipboardProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyToClipboard({ text, label = 'Copier', className }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      className={className}
      type="button"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Copié !
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" />
          {label}
        </>
      )}
    </Button>
  );
}

