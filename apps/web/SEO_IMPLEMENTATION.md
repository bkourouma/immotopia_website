# Implémentation SEO - ImmoTopia

## ✅ Éléments implémentés

### 1. Google Search Console Verification
- **Fichier**: `apps/web/src/app/layout.tsx`
- **Variable d'environnement**: `NEXT_PUBLIC_GSC_VERIFICATION` ou `GSC_VERIFICATION`
- **Fonctionnement**: La balise meta est injectée conditionnellement dans le `<head>` si la variable est définie

### 2. Sitemap XML automatique
- **Fichier**: `apps/web/src/app/sitemap.ts`
- **URL**: `/sitemap.xml`
- **Contenu**: 
  - Routes statiques principales (home, la-solution, fonctionnalites, pour-qui, tarifs, etc.)
  - Articles de blog dynamiques (depuis API ou fichiers MDX)
  - Guides publiés
  - ChangeFrequency et Priority configurés

### 3. robots.txt
- **Fichier**: `apps/web/src/app/robots.ts`
- **URL**: `/robots.txt`
- **Configuration**: 
  - Autorise tout (`allow: /`)
  - Exclut `/api/` et `/admin/`
  - Inclut la directive sitemap

### 4. Metadata & Canonical URLs
- **Fichier central**: `apps/web/src/lib/seo.ts`
- **metadataBase**: Configuré dans `apps/web/src/app/layout.tsx` avec `SITE_URL`
- **Pages avec metadata**:
  - `/` (home)
  - `/la-solution`
  - `/fonctionnalites`
  - `/pour-qui`
  - `/tarifs`
  - `/pourquoi-immotopia`
  - `/ressources/faq`
  - `/blog`

### 5. Schema JSON-LD
- **Composant**: `apps/web/src/components/seo/StructuredData.tsx` (existant)
- **Schemas implémentés**:
  - **Organization**: Sur la home (via layout)
  - **SoftwareApplication**: Sur `/` (home) et `/tarifs` avec les offres (Basic 35k, Pro 50k, Elite 100k XOF)
  - **FAQPage**: Sur `/ressources/faq` (depuis données API/DB)

### 6. Variables d'environnement requises

```env
# URL de base du site (utilisée pour canonical, sitemap, etc.)
NEXT_PUBLIC_SITE_URL=https://immotopia.immo-annonces.fr

# Google Search Console verification code (optionnel)
NEXT_PUBLIC_GSC_VERIFICATION=xx_3NPnYx9byGpFL7r0r3JFtEbrmRUCpjBcu0KZHO2E
# OU
GSC_VERIFICATION=xx_3NPnYx9byGpFL7r0r3JFtEbrmRUCpjBcu0KZHO2E
```

## 🧪 Tests SEO (Smoke Tests)

### URLs à tester en production:

1. **robots.txt**
   ```
   https://immotopia.immo-annonces.fr/robots.txt
   ```
   - Vérifier: `User-agent: *`, `Allow: /`, `Disallow: /api/`, `Disallow: /admin/`, `Sitemap: ...`

2. **sitemap.xml**
   ```
   https://immotopia.immo-annonces.fr/sitemap.xml
   ```
   - Vérifier: Toutes les routes principales présentes
   - Vérifier: Articles de blog inclus (si disponibles)
   - Vérifier: ChangeFrequency et Priority corrects

3. **View Source - JSON-LD Scripts**
   - Ouvrir `view-source:https://immotopia.immo-annonces.fr/`
   - Chercher `<script type="application/ld+json">`
   - Vérifier: Organization + SoftwareApplication présents
   
   - Ouvrir `view-source:https://immotopia.immo-annonces.fr/tarifs`
   - Vérifier: SoftwareApplication avec offers (Basic, Pro, Elite)
   
   - Ouvrir `view-source:https://immotopia.immo-annonces.fr/ressources/faq`
   - Vérifier: FAQPage schema avec mainEntity

4. **Meta Tags**
   - Vérifier `<meta name="google-site-verification">` dans le `<head>` (si variable définie)
   - Vérifier `<link rel="canonical">` sur chaque page
   - Vérifier `<meta property="og:...">` pour Open Graph

5. **Titles & Descriptions**
   - Tester chaque page principale
   - Vérifier que les titles sont uniques et < 60 caractères
   - Vérifier que les descriptions sont < 155 caractères

## 📝 Notes techniques

- **SITE_URL centralisé**: `apps/web/src/lib/seo.ts` exporte `SITE_URL` utilisé partout
- **Canonical URLs**: Construites automatiquement avec `metadataBase` + `canonicalUrl` relatif
- **Blog posts**: Intégrés dynamiquement dans le sitemap via `getAllBlogPosts()`
- **FAQ**: Schema généré depuis `getFAQData()` (API ou fallback)

## 🔍 Validation Google Search Console

1. Ajouter la propriété dans GSC
2. Utiliser la méthode "Balise meta HTML"
3. Copier le code de vérification
4. Ajouter dans `.env.local` ou `.env.production`:
   ```
   NEXT_PUBLIC_GSC_VERIFICATION=votre_code_verification
   ```
5. Redéployer
6. Vérifier dans GSC (peut prendre quelques minutes)

## ⚠️ Important

- Ne pas modifier les informations de contact (email/phone) - déjà configurées
- Les prix dans SoftwareApplication sont en XOF (FCFA)
- Les frais d'activation (250k XOF) ne sont PAS dans les offers (mentionnés en description uniquement)

