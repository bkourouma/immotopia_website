'use client';

import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  mode?: 'horizontal' | 'vertical' | 'inline';
  className?: string;
}

const menuItems = [
  {
    key: '/la-solution',
    label: <Link href="/la-solution">La Solution</Link>,
  },
  {
    key: '/fonctionnalites',
    label: <Link href="/fonctionnalites">Fonctionnalités</Link>,
  },
  {
    key: '/pour-qui',
    label: <Link href="/pour-qui">Pour Qui ?</Link>,
  },
  {
    key: '/tarifs',
    label: <Link href="/tarifs">Tarifs</Link>,
  },
  {
    key: '/ressources',
    label: <Link href="/ressources">Ressources</Link>,
  },
  {
    key: '/contact',
    label: <Link href="/contact">Contact</Link>,
  },
];

export default function Navigation({ mode = 'horizontal', className }: NavigationProps) {
  const pathname = usePathname();

  // Determine selected key based on current path
  const selectedKey = menuItems.find((item) => pathname?.startsWith(item.key as string))
    ?.key as string;

  return (
    <Menu
      mode={mode}
      items={menuItems}
      selectedKeys={selectedKey ? [selectedKey] : []}
      className={className}
    />
  );
}

