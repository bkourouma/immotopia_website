// Script de vérification des headers de sécurité
// Usage: node check-headers.js [url]
// 
// Vérifie la présence et la configuration des headers de sécurité

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BASE_URL = process.argv[2] || 'https://staging.immotopia.com';

// Headers à vérifier
const securityHeaders = {
  'Content-Security-Policy': {
    required: true,
    description: 'Protection contre XSS et injection'
  },
  'Strict-Transport-Security': {
    required: true,
    description: 'Force HTTPS (HSTS)'
  },
  'X-Frame-Options': {
    required: true,
    description: 'Protection contre clickjacking'
  },
  'X-Content-Type-Options': {
    required: true,
    description: 'Empêche le MIME type sniffing'
  },
  'Referrer-Policy': {
    required: false,
    description: 'Contrôle les informations de référent'
  },
  'Permissions-Policy': {
    required: false,
    description: 'Contrôle les fonctionnalités du navigateur'
  }
};

// Résultats
const results = {
  present: [],
  missing: [],
  issues: []
};

// Fonction pour récupérer les headers
function getHeaders(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname,
      method: 'HEAD',
      timeout: 5000,
      headers: {
        'User-Agent': 'ImmoTopia-Header-Checker/1.0'
      }
    };

    const req = client.request(options, (res) => {
      resolve(res.headers);
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Fonction pour vérifier HSTS
function checkHSTS(value) {
  if (!value) return { valid: false, issue: 'Header manquant' };
  
  const maxAgeMatch = value.match(/max-age=(\d+)/);
  if (!maxAgeMatch) {
    return { valid: false, issue: 'max-age manquant' };
  }
  
  const maxAge = parseInt(maxAgeMatch[1], 10);
  if (maxAge < 31536000) {
    return { valid: false, issue: `max-age trop court (${maxAge}), recommandé ≥ 31536000` };
  }
  
  return { valid: true };
}

// Fonction principale
async function checkHeaders() {
  console.log('🛡️  Vérification des headers de sécurité...\n');
  console.log(`URL: ${BASE_URL}\n`);

  try {
    const headers = await getHeaders(BASE_URL);
    
    console.log('Headers trouvés:\n');
    
    for (const [headerName, config] of Object.entries(securityHeaders)) {
      const headerValue = headers[headerName.toLowerCase()];
      
      if (headerValue) {
        results.present.push(headerName);
        console.log(`✅ ${headerName}:`);
        console.log(`   Valeur: ${headerValue}`);
        console.log(`   ${config.description}\n`);
        
        // Vérifications spécifiques
        if (headerName === 'Strict-Transport-Security') {
          const hstsCheck = checkHSTS(headerValue);
          if (!hstsCheck.valid) {
            results.issues.push({
              header: headerName,
              issue: hstsCheck.issue
            });
            console.log(`   ⚠️  Problème: ${hstsCheck.issue}\n`);
          }
        }
        
        if (headerName === 'X-Frame-Options') {
          if (!['DENY', 'SAMEORIGIN'].includes(headerValue)) {
            results.issues.push({
              header: headerName,
              issue: `Valeur non recommandée: ${headerValue} (devrait être DENY ou SAMEORIGIN)`
            });
            console.log(`   ⚠️  Valeur non recommandée: ${headerValue}\n`);
          }
        }
      } else {
        if (config.required) {
          results.missing.push(headerName);
          console.log(`❌ ${headerName}: MANQUANT (requis)`);
          console.log(`   ${config.description}\n`);
        } else {
          console.log(`⚠️  ${headerName}: Non présent (optionnel)`);
          console.log(`   ${config.description}\n`);
        }
      }
    }

    // Résumé
    console.log('\n📊 Résumé:');
    console.log(`✅ Headers présents: ${results.present.length}/${Object.keys(securityHeaders).length}`);
    console.log(`❌ Headers manquants (requis): ${results.missing.length}`);
    console.log(`⚠️  Problèmes détectés: ${results.issues.length}`);
    
    if (results.missing.length > 0) {
      console.log('\n❌ Headers requis manquants:');
      results.missing.forEach((header) => {
        console.log(`  - ${header}`);
      });
    }
    
    if (results.issues.length > 0) {
      console.log('\n⚠️  Problèmes détectés:');
      results.issues.forEach((issue) => {
        console.log(`  - ${issue.header}: ${issue.issue}`);
      });
    }

    // Code de sortie
    const exitCode = results.missing.length > 0 || results.issues.length > 0 ? 1 : 0;
    process.exit(exitCode);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

// Exécuter
checkHeaders();

