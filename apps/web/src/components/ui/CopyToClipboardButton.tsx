'use client';

import { useState } from 'react';
import { Button } from './button';
import { Copy, Check } from 'lucide-react';

interface CopyToClipboardButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyToClipboardButton({ 
  text, 
  label = "Copier le modèle",
  className = ""
}: CopyToClipboardButtonProps) {
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
      size="lg"
      className={`${className} ${copied ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
    >
      {copied ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          Copié !
        </>
      ) : (
        <>
          <Copy className="mr-2 h-5 w-5" />
          {label}
        </>
      )}
    </Button>
  );
}

