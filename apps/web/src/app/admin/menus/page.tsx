'use client';

import { useEffect, useState } from 'react';
import { getMenus, getMenu, createMenuItem, updateMenuItem, deleteMenuItem, reorderMenuItems } from '@/lib/api/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2, ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  order: number;
  parentId: string | null;
  external: boolean;
  children?: MenuItem[];
}

interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
}

export default function MenusPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    label: '',
    href: '',
    external: false,
    parentId: '',
  });

  useEffect(() => {
    loadMenus();
  }, []);

  useEffect(() => {
    if (selectedMenu) {
      loadMenuItems();
    }
  }, [selectedMenu]);

  async function loadMenus() {
    try {
      const data = await getMenus();
      setMenus(data || []);
      if (data && data.length > 0 && !selectedMenu) {
        setSelectedMenu(data[0].id);
      }
    } catch (error) {
      console.error('Error loading menus:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadMenuItems() {
    try {
      const data = await getMenu(selectedMenu);
      setMenuItems(data.items || []);
    } catch (error) {
      console.error('Error loading menu items:', error);
    }
  }

  function buildTree(items: MenuItem[]): MenuItem[] {
    const itemMap = new Map<string, MenuItem>();
    const rootItems: MenuItem[] = [];

    items.forEach((item) => {
      itemMap.set(item.id, { ...item, children: [] });
    });

    items.forEach((item) => {
      const node = itemMap.get(item.id)!;
      if (item.parentId && itemMap.has(item.parentId)) {
        const parent = itemMap.get(item.parentId)!;
        if (!parent.children) parent.children = [];
        parent.children.push(node);
      } else {
        rootItems.push(node);
      }
    });

    return rootItems.sort((a, b) => a.order - b.order);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingItem) {
        await updateMenuItem(editingItem.id, {
          ...formData,
          parentId: formData.parentId || null,
        });
      } else {
        await createMenuItem(selectedMenu, {
          ...formData,
          parentId: formData.parentId || null,
        });
      }
      setShowForm(false);
      setEditingItem(null);
      setFormData({ label: '', href: '', external: false, parentId: '' });
      loadMenuItems();
    } catch (error: any) {
      alert(error.message || 'Erreur');
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Supprimer cet item ?')) return;
    try {
      await deleteMenuItem(id);
      loadMenuItems();
    } catch (error: any) {
      alert(error.message || 'Erreur');
    }
  }

  function startEdit(item: MenuItem) {
    setEditingItem(item);
    setFormData({
      label: item.label,
      href: item.href,
      external: item.external,
      parentId: item.parentId || '',
    });
    setShowForm(true);
  }

  const treeItems = buildTree(menuItems);

  function renderMenuItem(item: MenuItem, level = 0) {
    return (
      <div key={item.id} className="ml-4">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs text-gray-500">{item.href}</span>
              {item.external && (
                <span className="text-xs text-blue-600">(externe)</span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => startEdit(item)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(item.id)}
              className="text-red-600"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {item.children && item.children.length > 0 && (
          <div className="mt-2">
            {item.children.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  }

  const currentMenu = menus.find((m) => m.id === selectedMenu);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Menus</h1>
        <p className="mt-2 text-sm text-gray-600">
          Gérez les menus de navigation
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <Label>Sélectionner un menu</Label>
            <select
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {menus.map((menu) => (
                <option key={menu.id} value={menu.id}>
                  {menu.name === 'header' ? 'Menu Header' : 'Menu Footer'}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Items du {currentMenu?.name === 'header' ? 'Header' : 'Footer'}
              </h2>
              <Button onClick={() => setShowForm(true)} size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>

            {treeItems.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Aucun item</p>
            ) : (
              <div className="space-y-2">
                {treeItems.map((item) => renderMenuItem(item))}
              </div>
            )}
          </div>
        </div>

        {showForm && (
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">
              {editingItem ? 'Modifier' : 'Nouvel'} item
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="label">Label *</Label>
                <Input
                  id="label"
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="href">URL *</Label>
                <Input
                  id="href"
                  value={formData.href}
                  onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="parentId">Parent (optionnel)</Label>
                <select
                  id="parentId"
                  value={formData.parentId}
                  onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">Aucun (item racine)</option>
                  {menuItems
                    .filter((item) => !item.parentId)
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="external"
                  checked={formData.external}
                  onChange={(e) => setFormData({ ...formData, external: e.target.checked })}
                  className="mr-2"
                />
                <Label htmlFor="external" className="cursor-pointer">
                  Lien externe
                </Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingItem ? 'Modifier' : 'Créer'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingItem(null);
                    setFormData({ label: '', href: '', external: false, parentId: '' });
                  }}
                >
                  Annuler
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}



