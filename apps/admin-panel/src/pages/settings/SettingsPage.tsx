/**
 * Settings Page
 */

import { useState } from 'react';

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="mt-2 text-sm text-gray-600">
          Configurez les paramètres du site
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Paramètres généraux</h2>
        <p className="text-sm text-gray-600">
          Les paramètres seront disponibles prochainement.
        </p>
      </div>
    </div>
  );
}

