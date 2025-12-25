// Script de test de charge avec k6
// Usage: k6 run load-test.js
// 
// Prérequis:
// - Installer k6: https://k6.io/docs/getting-started/installation/
// - Windows: choco install k6 ou télécharger depuis https://k6.io/docs/getting-started/installation/

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Configuration
export const options = {
  stages: [
    { duration: '30s', target: 50 },   // Montée progressive à 50 utilisateurs
    { duration: '1m', target: 100 },    // Montée à 100 utilisateurs
    { duration: '2m', target: 500 },    // Montée à 500 utilisateurs
    { duration: '3m', target: 1000 },   // Montée à 1000 utilisateurs (objectif)
    { duration: '2m', target: 1000 },   // Maintien à 1000 utilisateurs
    { duration: '1m', target: 500 },    // Descente à 500
    { duration: '30s', target: 0 },     // Retour à 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% des requêtes < 2s
    http_req_failed: ['rate<0.01'],     // Taux d'erreur < 1%
    http_reqs: ['rate>100'],            // Au moins 100 requêtes/seconde
  },
};

// URL de base (à modifier selon l'environnement)
const BASE_URL = __ENV.BASE_URL || 'https://staging.immotopia.com';

// Métriques personnalisées
const errorRate = new Rate('errors');

// Scénarios de test
const scenarios = {
  // Page d'accueil
  homepage: {
    path: '/',
    weight: 30, // 30% du trafic
  },
  // Page "Pour qui"
  pourQui: {
    path: '/pour-qui',
    weight: 15,
  },
  // Page "La solution"
  laSolution: {
    path: '/la-solution',
    weight: 15,
  },
  // Page "Fonctionnalités"
  fonctionnalites: {
    path: '/fonctionnalites',
    weight: 15,
  },
  // Page "Ressources"
  ressources: {
    path: '/ressources',
    weight: 10,
  },
  // Page "Tarifs"
  tarifs: {
    path: '/tarifs',
    weight: 10,
  },
  // Page "Contact"
  contact: {
    path: '/contact',
    weight: 5,
  },
};

// Fonction pour sélectionner un scénario selon les poids
function selectScenario() {
  const totalWeight = Object.values(scenarios).reduce((sum, s) => sum + s.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const [name, scenario] of Object.entries(scenarios)) {
    random -= scenario.weight;
    if (random <= 0) {
      return { name, ...scenario };
    }
  }
  
  return { name: 'homepage', ...scenarios.homepage };
}

// Fonction principale de test
export default function () {
  const scenario = selectScenario();
  const url = `${BASE_URL}${scenario.path}`;
  
  // Requête GET
  const response = http.get(url, {
    tags: { name: scenario.name },
  });
  
  // Vérifications
  const checks = check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 2s': (r) => r.timings.duration < 2000,
    'has content': (r) => r.body.length > 0,
  });
  
  // Enregistrer les erreurs
  if (!checks['status is 200']) {
    errorRate.add(1);
  } else {
    errorRate.add(0);
  }
  
  // Attendre un peu avant la prochaine requête (simuler un utilisateur)
  sleep(Math.random() * 2 + 1); // Entre 1 et 3 secondes
}

// Fonction de setup (optionnel)
export function setup() {
  // Vérifier que le site est accessible
  const response = http.get(BASE_URL);
  if (response.status !== 200) {
    throw new Error(`Site non accessible: ${BASE_URL}`);
  }
  return { baseUrl: BASE_URL };
}

// Fonction de teardown (optionnel)
export function teardown(data) {
  console.log(`Tests terminés pour ${data.baseUrl}`);
}

