'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  HelpCircle,
  Image,
  Menu,
  Settings,
  LogOut,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Blog', href: '/admin/blog/posts', icon: FileText },
  { name: 'Guides', href: '/admin/guides', icon: BookOpen },
  { name: 'FAQ', href: '/admin/faq', icon: HelpCircle },
  { name: 'Média', href: '/admin/media', icon: Image },
  { name: 'Menus', href: '/admin/menus', icon: Menu },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <h1 className="text-xl font-bold text-gray-900">ImmoTopia CMS</h1>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-900 hover:bg-blue-50 hover:text-blue-700'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={async () => {
            const { logout } = await import('@/lib/api/admin');
            await logout();
            window.location.href = '/admin/login';
          }}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-red-50 hover:text-red-700 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Déconnexion
        </button>
      </div>
    </div>
  );
}

