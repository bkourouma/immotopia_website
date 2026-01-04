const http = require('http');
const https = require('https');
const { parse } = require('node:url');

const visitedUrls = new Set();
const brokenLinks = [];
const workingLinks = [];
const baseUrl = 'http://localhost:4321';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const parsedUrl = parse(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.path,
      method: 'GET',
      timeout: 10000
    };

    client.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data, headers: res.headers }));
    }).on('error', reject).on('timeout', () => reject(new Error('Timeout')));
  });
}

function extractLinks(html, currentUrl) {
  const links = new Set();

  // Extract href links
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    links.add(match[1]);
  }

  // Extract src links (images, scripts, etc.)
  const srcRegex = /src=["']([^"']+)["']/g;
  while ((match = srcRegex.exec(html)) !== null) {
    links.add(match[1]);
  }

  return Array.from(links).map(link => {
    // Skip external links, mailto, tel, javascript, etc.
    if (link.startsWith('http') || link.startsWith('mailto:') ||
        link.startsWith('tel:') || link.startsWith('javascript:') ||
        link.startsWith('#')) {
      return null;
    }

    // Handle relative URLs
    if (link.startsWith('/')) {
      return baseUrl + link;
    }

    // Handle relative paths without leading slash
    if (!link.startsWith('http')) {
      const currentPath = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
      return currentPath + link;
    }

    return link;
  }).filter(Boolean);
}

async function checkLink(url, depth = 0, maxDepth = 2) {
  if (depth > maxDepth || visitedUrls.has(url)) {
    return;
  }

  visitedUrls.add(url);

  try {
    console.log(`Checking: ${url}`);
    const { statusCode, data } = await fetchPage(url);

    if (statusCode >= 200 && statusCode < 400) {
      workingLinks.push({ url, status: statusCode });

      // Only crawl HTML pages
      if (url.startsWith(baseUrl) && !url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|pdf|woff|woff2|ttf)$/)) {
        const links = extractLinks(data, url);
        for (const link of links) {
          if (link.startsWith(baseUrl)) {
            await checkLink(link, depth + 1, maxDepth);
          }
        }
      }
    } else {
      brokenLinks.push({ url, status: statusCode, error: `HTTP ${statusCode}` });
    }
  } catch (error) {
    brokenLinks.push({ url, status: 0, error: error.message });
  }
}

async function main() {
  console.log('Starting link check...\n');

  try {
    await checkLink(baseUrl);

    console.log('\n' + '='.repeat(80));
    console.log('SUMMARY');
    console.log('='.repeat(80));
    console.log(`Total URLs checked: ${visitedUrls.size}`);
    console.log(`Working links: ${workingLinks.length}`);
    console.log(`Broken links: ${brokenLinks.length}`);

    if (brokenLinks.length > 0) {
      console.log('\n' + '='.repeat(80));
      console.log('BROKEN LINKS:');
      console.log('='.repeat(80));
      brokenLinks.forEach(({ url, status, error }) => {
        console.log(`❌ ${url}`);
        console.log(`   Status: ${status} - Error: ${error}\n`);
      });
    } else {
      console.log('\n✅ All links are working!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
