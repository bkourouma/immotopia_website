import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/password.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Check if admin already exists
  const existingAdmin = await prisma.adminUser.findFirst();
  if (existingAdmin) {
    console.log('⚠️  Admin user already exists. Skipping admin creation.');
    return;
  }

  // Create admin user from env vars
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error('❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables');
    process.exit(1);
  }

  const passwordHash = await hashPassword(adminPassword);

  const admin = await prisma.adminUser.create({
    data: {
      email: adminEmail,
      passwordHash,
    },
  });

  console.log(`✅ Admin user created: ${admin.email}`);

  // Create baseline menus
  const headerMenu = await prisma.menu.upsert({
    where: { name_locale: { name: 'header', locale: 'fr' } },
    update: {},
    create: {
      name: 'header',
      locale: 'fr',
      items: {
        create: [
          { label: 'La Solution', href: '/la-solution', order: 1 },
          { label: 'Fonctionnalités', href: '/fonctionnalites', order: 2 },
          { label: 'Pour Qui ?', href: '/pour-qui', order: 3 },
          { label: 'Tarifs', href: '/tarifs', order: 4 },
          { label: 'Ressources', href: '/ressources', order: 5 },
          { label: 'Contact', href: '/contact', order: 6 },
        ],
      },
    },
  });

  const footerMenu = await prisma.menu.upsert({
    where: { name_locale: { name: 'footer', locale: 'fr' } },
    update: {},
    create: {
      name: 'footer',
      locale: 'fr',
      items: {
        create: [
          { label: 'Mentions légales', href: '/mentions-legales', order: 1 },
          { label: 'Politique de confidentialité', href: '/politique-confidentialite', order: 2 },
          { label: 'CGU', href: '/cgu', order: 3 },
        ],
      },
    },
  });

  console.log('✅ Baseline menus created');

  // Create sample blog categories
  const categories = [
    { name: 'Gestion Locative', slug: 'gestion-locative', description: 'Articles sur la gestion locative' },
    { name: 'CRM Immobilier', slug: 'crm-immobilier', description: 'Articles sur le CRM immobilier' },
    { name: 'Marketing', slug: 'marketing', description: 'Articles sur le marketing immobilier' },
  ];

  for (const cat of categories) {
    await prisma.blogCategory.upsert({
      where: { slug_locale: { slug: cat.slug, locale: 'fr' } },
      update: {},
      create: {
        ...cat,
        locale: 'fr',
      },
    });
  }

  console.log('✅ Sample blog categories created');

  // Create sample FAQ items
  const faqItems = [
    {
      question: 'Comment créer mon compte ?',
      answer: 'Vous pouvez créer votre compte gratuitement et accéder à toutes les fonctionnalités pendant la période d\'essai. Aucune carte bancaire n\'est requise pour commencer.',
      category: 'Compte',
      order: 1,
      status: 'published' as const,
    },
    {
      question: 'Puis-je changer de plan plus tard ?',
      answer: 'Oui, absolument ! Vous pouvez mettre à niveau ou rétrograder votre plan à tout moment selon vos besoins.',
      category: 'Tarifs',
      order: 2,
      status: 'published' as const,
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Absolument. Nous utilisons des technologies de cryptage de niveau bancaire et nos serveurs sont hébergés de manière sécurisée.',
      category: 'Sécurité',
      order: 3,
      status: 'published' as const,
    },
  ];

  for (const item of faqItems) {
    await prisma.faqItem.create({
      data: {
        ...item,
        locale: 'fr',
      },
    });
  }

  console.log('✅ Sample FAQ items created');

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



