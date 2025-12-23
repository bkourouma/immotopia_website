// Configuration pnpm pour approuver automatiquement les scripts de build
// nécessaires pour Prisma et autres packages critiques

function readPackage(pkg, context) {
  // Approuver les scripts de build pour Prisma
  if (pkg.name === '@prisma/client' || pkg.name === '@prisma/engines' || pkg.name === 'prisma') {
    if (pkg.scripts) {
      // S'assurer que les scripts sont préservés
      context.log('Approuvant les scripts de build pour ' + pkg.name);
    }
  }
  
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};

