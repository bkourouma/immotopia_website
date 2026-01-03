'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/lib/api/admin';

export default function AdminTopbar() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b-2 border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">Administration</h2>
      </div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="text-sm">
            <span className="font-semibold text-gray-900">{user.email}</span>
          </div>
        )}
      </div>
    </header>
  );
}



