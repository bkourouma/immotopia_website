import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Script pour ajouter les FAQs ImmoTopia
 * Usage: pnpm seed:faqs
 */
async function main() {
  console.log('📝 Starting FAQ seeding...');

  const faqItems = [
    {
      question: 'Qui peut utiliser ImmoTopia ?',
      answer: 'ImmoTopia est conçu pour les agences immobilières, syndics de copropriété, promoteurs, gestionnaires, propriétaires, locataires et copropriétaires. Chaque utilisateur accède uniquement aux fonctionnalités correspondant à son rôle.',
      category: 'Général',
      order: 1,
      status: 'published' as const,
    },
    {
      question: 'ImmoTopia est-il adapté au marché ivoirien ?',
      answer: 'Oui. La plateforme est pensée pour les réalités locales : Mobile Money (Orange, MTN, Moov), fiscalité, gestion locative, copropriété et pratiques immobilières en Côte d\'Ivoire.',
      category: 'Général',
      order: 2,
      status: 'published' as const,
    },
    {
      question: 'Proposez-vous une période d\'essai ?',
      answer: 'Oui, une période d\'essai est disponible pour permettre aux agences et professionnels de tester les principales fonctionnalités avant de s\'engager.',
      category: 'Tarifs',
      order: 3,
      status: 'published' as const,
    },
    {
      question: 'Dois-je installer un logiciel sur mon ordinateur ?',
      answer: 'Non. ImmoTopia est une solution 100 % en ligne accessible depuis un navigateur web, sur ordinateur, tablette ou smartphone.',
      category: 'Technique',
      order: 4,
      status: 'published' as const,
    },
    {
      question: 'Puis-je utiliser ImmoTopia sur mobile ?',
      answer: 'Oui. La plateforme est entièrement responsive et optimisée pour une utilisation sur mobile.',
      category: 'Technique',
      order: 5,
      status: 'published' as const,
    },
    {
      question: 'Est-ce que mes clients (locataires, copropriétaires) peuvent se connecter ?',
      answer: 'Oui. Les locataires et copropriétaires disposent d\'un espace sécurisé pour consulter leurs informations, payer en ligne, recevoir des annonces et déclarer des incidents.',
      category: 'Utilisateurs',
      order: 6,
      status: 'published' as const,
    },
    {
      question: 'Les paiements Mobile Money sont-ils intégrés ?',
      answer: 'Oui. ImmoTopia permet les paiements via Mobile Money pour les loyers, charges de copropriété, appels de fonds et autres frais.',
      category: 'Paiements',
      order: 7,
      status: 'published' as const,
    },
    {
      question: 'Puis-je gérer plusieurs agences ou immeubles ?',
      answer: 'Oui. ImmoTopia est multi-tenant et permet de gérer plusieurs agences, immeubles, résidences ou programmes immobiliers depuis une seule interface.',
      category: 'Gestion',
      order: 8,
      status: 'published' as const,
    },
    {
      question: 'Les annonces sont-elles publiées automatiquement sur le portail public ?',
      answer: 'Oui. Les annonces validées peuvent être publiées automatiquement sur le portail public ImmoTopia selon votre abonnement et vos paramètres.',
      category: 'Annonces',
      order: 9,
      status: 'published' as const,
    },
    {
      question: 'Puis-je importer mes données existantes ?',
      answer: 'Oui. Nous proposons des outils d\'importation (Excel, CSV) et un accompagnement pour migrer vos biens, clients et contrats existants.',
      category: 'Données',
      order: 10,
      status: 'published' as const,
    },
    {
      question: 'ImmoTopia propose-t-il un CRM intégré ?',
      answer: 'Oui. Un CRM immobilier complet est inclus pour le suivi des prospects, clients, rendez-vous, interactions et opportunités.',
      category: 'CRM',
      order: 11,
      status: 'published' as const,
    },
    {
      question: 'Est-il possible de gérer la copropriété ?',
      answer: 'Oui. ImmoTopia intègre un module syndic complet : gestion des lots, charges, assemblées générales, votes, paiements et communication avec les copropriétaires.',
      category: 'Copropriété',
      order: 12,
      status: 'published' as const,
    },
    {
      question: 'Les documents sont-ils stockés en toute sécurité ?',
      answer: 'Oui. Tous les documents (contrats, quittances, PV, appels de charges) sont stockés de manière sécurisée avec sauvegardes régulières.',
      category: 'Sécurité',
      order: 13,
      status: 'published' as const,
    },
    {
      question: 'Puis-je limiter les droits des utilisateurs ?',
      answer: 'Oui. Les droits et permissions sont entièrement configurables selon les rôles (administrateur, agent, comptable, locataire, copropriétaire, etc.).',
      category: 'Sécurité',
      order: 14,
      status: 'published' as const,
    },
    {
      question: 'Proposez-vous des formations à l\'utilisation ?',
      answer: 'Oui. Des formations, démonstrations et supports pédagogiques (guides, vidéos, FAQ) sont proposés pour une prise en main rapide.',
      category: 'Support',
      order: 15,
      status: 'published' as const,
    },
    {
      question: 'Existe-t-il un support client ?',
      answer: 'Oui. Un support technique et fonctionnel est disponible pour vous accompagner dans l\'utilisation quotidienne de la plateforme.',
      category: 'Support',
      order: 16,
      status: 'published' as const,
    },
    {
      question: 'ImmoTopia évoluera-t-il dans le temps ?',
      answer: 'Oui. La plateforme est en évolution continue avec l\'ajout régulier de nouvelles fonctionnalités basées sur les retours des utilisateurs.',
      category: 'Produit',
      order: 17,
      status: 'published' as const,
    },
  ];

  let created = 0;
  let skipped = 0;

  for (const item of faqItems) {
    // Vérifier si la FAQ existe déjà (par question)
    const existing = await prisma.faqItem.findFirst({
      where: {
        question: item.question,
        locale: 'fr',
        deletedAt: null,
      },
    });

    if (existing) {
      console.log(`⏭️  Skipping: "${item.question}" (already exists)`);
      skipped++;
      continue;
    }

    // Obtenir l'ordre maximum pour cette catégorie
    const maxOrder = await prisma.faqItem.findFirst({
      where: {
        locale: 'fr',
        category: item.category || null,
        deletedAt: null,
      },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    const order = item.order !== undefined ? item.order : (maxOrder?.order ?? 0) + 1;

    await prisma.faqItem.create({
      data: {
        ...item,
        order,
        locale: 'fr',
      },
    });

    console.log(`✅ Created: "${item.question}"`);
    created++;
  }

  console.log(`\n🎉 FAQ seeding completed!`);
  console.log(`   ✅ Created: ${created}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   📊 Total: ${faqItems.length}`);
}

main()
  .catch((e) => {
    console.error('❌ FAQ seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



