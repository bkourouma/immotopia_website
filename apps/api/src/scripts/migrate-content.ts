import { PrismaClient } from '@prisma/client';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const prisma = new PrismaClient();

// Path to blog MDX files (from apps/api directory)
const blogDirectory = join(process.cwd(), '..', 'web', 'src', 'content', 'blog');

async function main() {
  console.log('🔄 Starting content migration...');

  // Migrate blog posts
  try {
    const filenames = await readdir(blogDirectory);
    const mdxFiles = filenames.filter((name) => name.endsWith('.mdx') || name.endsWith('.md'));

    console.log(`📝 Found ${mdxFiles.length} blog post files`);

    for (const filename of mdxFiles) {
      const filePath = join(blogDirectory, filename);
      const fileContents = await readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = filename.replace(/\.mdx?$/, '');

      // Check if post already exists
      const existing = await prisma.blogPost.findUnique({
        where: { slug },
      });

      if (existing) {
        console.log(`⏭️  Skipping ${slug} (already exists)`);
        continue;
      }

      // Get or create category
      let categoryId: string | null = null;
      if (data.category) {
        const category = await prisma.blogCategory.upsert({
          where: {
            slug_locale: {
              slug: data.category.toLowerCase().replace(/\s+/g, '-'),
              locale: 'fr',
            },
          },
          update: {},
          create: {
            name: data.category,
            slug: data.category.toLowerCase().replace(/\s+/g, '-'),
            locale: 'fr',
          },
        });
        categoryId = category.id;
      }

      // Create tags
      const tagIds: string[] = [];
      if (Array.isArray(data.tags)) {
        for (const tagName of data.tags) {
          const tag = await prisma.blogTag.upsert({
            where: {
              slug_locale: {
                slug: tagName.toLowerCase().replace(/\s+/g, '-'),
                locale: 'fr',
              },
            },
            update: {},
            create: {
              name: tagName,
              slug: tagName.toLowerCase().replace(/\s+/g, '-'),
              locale: 'fr',
            },
          });
          tagIds.push(tag.id);
        }
      }

      // Calculate reading time
      const readingTimeResult = readingTime(content);

      // Create post
      const post = await prisma.blogPost.create({
        data: {
          title: data.title || 'Untitled',
          slug,
          description: data.description || '',
          content,
          status: data.published === false ? 'draft' : 'published',
          publishedAt: data.date ? new Date(data.date) : new Date(),
          categoryId,
          author: data.author || null,
          locale: 'fr',
          readingTime: Math.ceil(readingTimeResult.minutes),
          tags: {
            create: tagIds.map((tagId) => ({
              tagId,
            })),
          },
        },
      });

      console.log(`✅ Migrated blog post: ${slug}`);
    }
  } catch (error) {
    console.error('❌ Error migrating blog posts:', error);
  }

  // Migrate FAQ from hardcoded component
  try {
    console.log('📋 Migrating FAQ items...');
    
    // Read the FAQ component to extract items
    const faqComponentPath = join(process.cwd(), '../web/src/components/sections/FAQ.tsx');
    try {
      const faqContent = await readFile(faqComponentPath, 'utf8');
      
      // Extract FAQ items from the component (basic regex extraction)
      const faqItemsMatch = faqContent.match(/const faqItems: FAQItem\[\] = \[([\s\S]*?)\];/);
      if (faqItemsMatch) {
        // This is a simplified extraction - in production, you might want a more robust parser
        console.log('⚠️  FAQ items found in component, but manual extraction needed');
        console.log('   Please migrate FAQ items manually or use a proper parser');
      }
    } catch (error) {
      console.log('⚠️  Could not read FAQ component, skipping FAQ migration');
    }
  } catch (error) {
    console.error('❌ Error migrating FAQ:', error);
  }

  console.log('🎉 Migration completed!');
}

main()
  .catch((e) => {
    console.error('❌ Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

