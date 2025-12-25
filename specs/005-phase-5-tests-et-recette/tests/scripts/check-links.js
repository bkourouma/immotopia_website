// Script de vérification des liens
// Usage: node check-links.js [url]
// 
// Vérifie tous les liens d'un site et identifie les liens cassés

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BASE_URL = process.argv[2] || 'https://staging.immotopia.com';
const TIMEOUT = 5000; // 5 secondes

// Résultats
const results = {
  total: 0,
  success: 0,
  failed: 0,
  errors: []
};

// Pages à vérifier
const pagesToCheck = [
  '/',
  '/pour-qui',
  '/la-solution',
  '/fonctionnalites',
  '/ressources',
  '/tarifs',
  '/contact'
];

// Fonction pour faire une requête HTTP
function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'ImmoTopia-Link-Checker/1.0'
      }
    };

    const req = client.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (error) => {
      resolve({
        url,
        status: 'ERROR',
        success: false,
        error: error.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout'
      });
    });

    req.end();
  });
}

// Fonction principale
async function checkLinks() {
  console.log('🔍 Vérification des liens...\n');
  console.log(`URL de base: ${BASE_URL}\n`);

  // Vérifier les pages principales
  for (const page of pagesToCheck) {
    const url = BASE_URL + page;
    results.total++;
    
    console.log(`Vérification: ${url}`);
    const result = await checkUrl(url);
    
    if (result.success) {
      results.success++;
      console.log(`  ✅ ${result.status} - OK\n`);
    } else {
      results.failed++;
      results.errors.push({
        url: result.url,
        status: result.status,
        error: result.error
      });
      console.log(`  ❌ ${result.status} - ${result.error || 'FAILED'}\n`);
    }
  }

  // Afficher le résumé
  console.log('\n📊 Résumé:');
  console.log(`Total: ${results.total}`);
  console.log(`✅ Succès: ${results.success}`);
  console.log(`❌ Échecs: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Liens en échec:');
    results.errors.forEach((error) => {
      console.log(`  - ${error.url} (${error.status})`);
    });
  }

  // Code de sortie
  process.exit(results.failed > 0 ? 1 : 0);
}

// Exécuter
checkLinks().catch((error) => {
  console.error('Erreur:', error);
  process.exit(1);
});

