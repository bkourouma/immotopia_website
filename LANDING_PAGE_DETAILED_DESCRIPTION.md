# Description Détaillée de la Page d'Accueil ImmoTopia

## Vue d'Ensemble

La page d'accueil d'ImmoTopia est une landing page moderne et professionnelle conçue pour les professionnels de l'immobilier en Afrique de l'Ouest. Elle utilise un design épuré avec des animations fluides, des gradients subtils et une hiérarchie visuelle claire.

**URL**: `http://localhost:3003/`

**Structure**: 7 sections principales + Header + Footer

---

## Structure Globale

### Layout Principal
- **Container**: `max-w-[1200px]` à `max-w-7xl` selon les sections
- **Padding horizontal**: `px-4 sm:px-6 lg:px-8` (responsive)
- **Background principal**: Blanc avec gradients subtils
- **Font**: Inter (Google Fonts) - `font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## Header (Navigation)

### Design
- **Position**: Sticky en haut de page (`sticky top-0`)
- **Background**: `bg-background/98` avec `backdrop-blur-md` (effet de flou)
- **Bordure**: `border-b border-border/40`
- **Ombre**: `shadow-sm`
- **Z-index**: `z-[1020]`
- **Hauteur**: `h-16` (64px)

### Logo
- **Texte**: "ImmoTopia"
- **Taille**: `text-lg sm:text-xl`
- **Font**: `font-bold`
- **Couleur**: `text-primary` (#2563EB)
- **Hover**: `hover:text-primary/90 hover:scale-105`

### Navigation Desktop
- **Menu items**:
  1. La Solution (`/la-solution`)
  2. Fonctionnalités (`/fonctionnalites`)
  3. Pour Qui ? (`/pour-qui`)
  4. Tarifs (`/tarifs`)
  5. Ressources (`/ressources`)
  6. Contact (`/contact`)

- **Style des liens**:
  - **Font**: `text-sm font-medium`
  - **Padding**: `px-4 py-2`
  - **Couleur inactive**: `text-foreground`
  - **Couleur active**: `text-primary`
  - **Hover**: Soulignement animé avec `bg-primary`
  - **Transition**: `transition-all duration-200`

### CTA Header
- **Texte**: "Demander une démo"
- **Style**: 
  - Background: `!bg-[#2563EB]`
  - Texte: `!text-white`
  - Font: `font-semibold`
  - Padding: `px-6 py-2.5`
  - Ombre: `shadow-lg hover:shadow-xl`
  - Hover: `hover:!bg-[#1D4ED8] hover:scale-105`
- **Lien**: `/contact?demo=true`

### Navigation Mobile
- **Menu burger**: Icône Menu (lucide-react)
- **Sheet menu**: Panneau latéral droit
- **Largeur**: `w-[85vw] max-w-[400px]`
- **Background**: Blanc avec bordure

---

## Section 1: Hero

### Background
- **Gradient principal**: 
  - `from-[#F0F7FF] via-[#E8F2FF] to-[#D6EBFF]` (bleu très clair)
  - Dark mode: `dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`
- **Décoration animée**:
  - 3 gradients radiaux animés avec `animate-pulse`
  - Orbes flottants avec `blur-3xl`:
    - Top-left: `h-72 w-72 bg-[#2563EB]/15`
    - Bottom-right: `h-96 w-96 bg-[#1D4ED8]/15` (delay: 1s)
    - Center: `h-64 w-64 bg-[#3B82F6]/15` (delay: 2s)
  - Grille de fond: `bg-[linear-gradient(...)] bg-[size:24px_24px]` avec opacité 12%

### Padding
- **Vertical**: `py-12 md:py-16 lg:py-20` (responsive)

### Badge
- **Texte**: "Solution SaaS Professionnelle"
- **Style**:
  - Background: `bg-white/80 backdrop-blur-md`
  - Bordure: `border border-[#2563EB]/30`
  - Padding: `px-4 py-2 md:px-5 md:py-2.5`
  - Border-radius: `rounded-full`
  - Ombre: `shadow-lg hover:shadow-xl`
  - Hover: `hover:scale-105 hover:border-[#2563EB]/40`
- **Icône**: Sparkles (lucide-react) - `h-4 w-4 text-[#2563EB] animate-pulse`
- **Font**: `text-xs font-bold uppercase tracking-wider text-[#2563EB]`

### Titre Principal (H1)
- **Texte ligne 1**: "La plateforme de gestion immobilière"
- **Texte accent**: "tout-en-un" (avec gradient animé)
- **Texte ligne 2**: "pour les professionnels"
- **Style**:
  - Font: `font-extrabold`
  - Taille: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - Line-height: `leading-tight`
  - Couleur: `text-gray-900` (ligne 1), `text-gray-800` (ligne 2)
  - Gradient sur "tout-en-un":
    - Background-size: `bg-[length:200%_100%]`
    - Gradient: `from-[#2563EB] via-[#1D4ED8] to-[#2563EB]`
    - Effet: `bg-clip-text text-transparent`
    - Ombre floue: `opacity-75 blur-sm`

### Description
- **Texte**: "Centralisez toute votre activité immobilière sur une seule plateforme. Gestion des biens, CRM, gestion locative, syndic, promotion immobilière et paiements Mobile Money, le tout automatisé par l'IA."
- **Style**:
  - Taille: `text-sm sm:text-base md:text-lg lg:text-xl`
  - Font: `font-medium`
  - Couleur: `text-gray-700`
  - Line-height: `leading-relaxed`
  - Max-width: `max-w-[750px]`
  - Padding horizontal: `px-4 sm:px-0`

### CTAs Hero
**CTA Principal**:
- **Texte**: "Demander une démo"
- **Style**:
  - Background: `!bg-[#2563EB]`
  - Texte: `!text-white`
  - Font: `font-bold`
  - Taille: `text-sm sm:text-base`
  - Padding: `px-6 py-5 md:px-8 md:py-6`
  - Ombre: `shadow-xl hover:shadow-2xl`
  - Hover: `hover:scale-105 hover:!bg-[#1D4ED8]`
  - Icône: ArrowRight avec animation `group-hover:translate-x-1`
- **Lien**: `/contact?demo=true`

**CTA Secondaire**:
- **Texte**: "Découvrir la solution"
- **Style**:
  - Variant: `outline`
  - Bordure: `border-2 border-gray-300`
  - Background: `bg-white/90 backdrop-blur-md`
  - Texte: `text-gray-800`
  - Font: `font-semibold`
  - Hover: `hover:scale-105 hover:border-[#2563EB] hover:bg-white hover:shadow-xl`
- **Lien**: `/la-solution`

**Layout CTAs**:
- **Display**: `flex flex-col sm:flex-row`
- **Gap**: `gap-4 sm:gap-5`
- **Width**: `w-full sm:w-auto`

### Animations
- **ScrollReveal**: Animations au scroll avec délais progressifs (0ms, 100ms, 200ms, 300ms)
- **Directions**: `fade`, `up`

---

## Section 2: Hero Stats Section

### Background
- **Gradient**: `from-white via-gray-50 to-blue-50`
- **Décoration**:
  - 2 gradients radiaux avec opacité 5%
  - Grille de fond: `bg-[size:24px_24px]` opacité 8%

### Padding
- **Vertical**: `py-12 md:py-16 lg:py-20`

### Stats
**3 statistiques affichées**:

1. **"+40%"**
   - Label: "de productivité"
   
2. **"-60%"**
   - Label: "de temps administratif"
   
3. **"100%"**
   - Label: "centralisé"

**Style des stats**:
- **Valeur**:
  - Taille: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - Font: `font-extrabold`
  - Couleur: `text-[#2563EB]`
  - Line-height: `leading-none`
  - Hover: `group-hover:scale-110`
  
- **Label**:
  - Taille: `text-xs sm:text-sm md:text-base`
  - Font: `font-semibold uppercase tracking-wider`
  - Couleur: `text-gray-600`

**Layout**:
- **Display**: `flex flex-wrap justify-center`
- **Gap**: `gap-8 md:gap-12 lg:gap-16 xl:gap-20`
- **Text-align**: `text-center`
- **Hover**: `hover:scale-110`

---

## Section 3: Features Preview

### Background
- **Gradient**: `from-[#F0F7FF] via-white to-[#E8F2FF]`
- **Décoration animée**:
  - 3 orbes flottants avec `blur-3xl` et `animate-pulse`:
    - Top-left: `h-[500px] w-[500px] bg-[#2563EB]/8` (4s)
    - Bottom-right: `h-[600px] w-[600px] bg-[#3B82F6]/6` (5s, delay 1s)
    - Center: `h-[400px] w-[400px] bg-[#1D4ED8]/5` (6s, delay 2s)
  - Grille: `bg-[size:32px_32px]` opacité 40%

### Padding
- **Vertical**: `py-16 md:py-24 lg:py-32`

### Header Section
**Badge**:
- **Texte**: "Fonctionnalités"
- **Style**: Identique au badge Hero
- **Icône**: Sparkles

**Titre (H2)**:
- **Texte**: "Tout ce dont vous avez besoin **en un seul endroit**"
- **Style**:
  - Taille: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - Font: `font-extrabold`
  - Couleur: `text-gray-900`
  - Gradient sur "en un seul endroit": Identique au Hero

**Description**:
- **Texte**: "Découvrez les fonctionnalités qui transforment la gestion immobilière et boostent votre productivité"
- **Style**:
  - Taille: `text-base sm:text-lg md:text-xl`
  - Couleur: `text-gray-700`
  - Max-width: `max-w-3xl`
  - Line-height: `leading-relaxed`

### Features Grid
**6 fonctionnalités affichées** (premières de la liste):

1. **Gestion des biens**
   - Gradient: `from-blue-500 to-cyan-500`
   - Description: "Centralisez la gestion de tous vos biens immobiliers avec un suivi complet et des alertes automatiques."
   - Bénéfices: Base de données centralisée, Suivi en temps réel, Alertes automatiques

2. **CRM immobilier**
   - Gradient: `from-emerald-500 to-teal-500`
   - Description: "Gérez vos contacts, prospects et clients avec un CRM spécialement conçu pour l'immobilier."
   - Bénéfices: Pipeline de vente, Suivi des rendez-vous, Communication automatisée

3. **Gestion locative**
   - Gradient: `from-indigo-500 to-purple-500`
   - Description: "Automatisez la gestion de vos locations : contrats, loyers, quittances et suivi des locataires."
   - Bénéfices: Génération automatique des contrats, Suivi des loyers, Quittances automatiques

4. **Syndic de copropriété**
   - Gradient: `from-purple-500 to-pink-500`
   - Description: "Automatisez la gestion administrative de vos copropriétés : charges, assemblées, documents."
   - Bénéfices: Gestion automatisée des charges, Portail copropriétaires, Documents centralisés

5. **Promotion immobilière**
   - Gradient: `from-orange-500 to-amber-500`
   - Description: "Pilotez vos projets immobiliers et commercialisez efficacement vos biens."
   - Bénéfices: Suivi de projet, Gestion des réservations, Portail de commercialisation

6. **Paiements Mobile Money**
   - Gradient: `from-green-500 to-emerald-500`
   - Description: "Acceptez et gérez les paiements via Mobile Money directement depuis la plateforme."
   - Bénéfices: Paiements en ligne, Suivi automatique, Sécurité renforcée

**Style des Feature Cards**:
- **Card**:
  - Background: `bg-white`
  - Bordure: `border-2 border-transparent`
  - Hover: `hover:border-[#2563EB]/20 hover:shadow-2xl hover:-translate-y-2`
  - Transition: `duration-500`
  
- **Icône**:
  - Container: `h-14 w-14 rounded-xl`
  - Gradient: Selon la fonctionnalité
  - Ombre: `shadow-lg`
  - Hover: `group-hover:scale-110 group-hover:rotate-3`
  
- **Titre**:
  - Taille: `text-xl`
  - Font: `font-semibold`
  - Couleur: `text-gray-900`
  - Hover: `group-hover:text-[#2563EB]`
  
- **Description**:
  - Taille: `text-sm`
  - Couleur: `text-gray-600`
  - Line-height: `leading-relaxed`
  
- **Bénéfices**:
  - Icône: CheckCircle2 (lucide-react) - `h-4 w-4 text-[#2563EB]`
  - Texte: `text-sm text-gray-600`
  - Hover: `group-hover:translate-x-1`
  
- **Lien "En savoir plus"**:
  - Couleur: `text-[#2563EB]`
  - Font: `font-semibold`
  - Icône: ArrowRight avec animation

**Layout Grid**:
- **Display**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Gap**: `gap-6`

### CTA Section
- **Texte**: "Voir toutes les fonctionnalités"
- **Style**:
  - Variant: `outline`
  - Bordure: `border-2 border-[#2563EB]/30`
  - Background: `bg-white/90 backdrop-blur-sm`
  - Padding: `px-8 py-6`
  - Font: `font-semibold`
  - Taille: `text-base`
  - Ombre: `shadow-lg hover:shadow-2xl`
  - Hover: `hover:scale-110 hover:border-[#2563EB]`
- **Lien**: `/fonctionnalites`

---

## Section 4: Stats Section (Transition)

### Background
- **Gradient**: `from-primary to-indigo-600` (bleu dégradé)
- **Décoration**:
  - 2 gradients radiaux blancs avec opacité 10%

### Padding
- **Vertical**: `py-16 md:py-24`

### Stats
**4 statistiques affichées**:

1. **"500+"**
   - Label: "Professionnels actifs"
   
2. **"10K+"**
   - Label: "Biens gérés"
   
3. **"99.9%"**
   - Label: "Disponibilité"
   
4. **"24/7"**
   - Label: "Support disponible"

**Style**:
- **Valeur**:
  - Taille: `text-3xl md:text-4xl lg:text-5xl`
  - Font: `font-extrabold`
  - Couleur: `text-white`
  - Line-height: `leading-none`
  - Hover: `group-hover:scale-110`
  
- **Label**:
  - Taille: `text-sm md:text-base`
  - Font: `font-medium`
  - Couleur: `text-white/90`

**Layout**:
- **Grid**: `grid grid-cols-2 md:grid-cols-4`
- **Gap**: `gap-8 md:gap-12`
- **Text-align**: `text-center`

---

## Section 5: Personas Preview

### Background
- **Gradient**: `from-white via-[#F8FAFF] to-[#F0F7FF]`
- **Décoration animée**:
  - 3 orbes flottants avec `blur-3xl`:
    - Top-right: `h-[700px] w-[700px] bg-[#2563EB]/8` (5s)
    - Bottom-left: `h-[600px] w-[600px] bg-[#3B82F6]/6` (6s, delay 1.5s)
    - Center: `h-[500px] w-[500px] bg-[#1D4ED8]/5` (7s, delay 3s)
  - Grille: `bg-[size:40px_40px]` opacité 30%

### Padding
- **Vertical**: `py-16 md:py-24 lg:py-32`

### Header Section
**Badge**:
- **Texte**: "Solutions par profil"
- **Icône**: Users (lucide-react)

**Titre (H2)**:
- **Texte**: "Une solution adaptée à **chaque professionnel**"
- **Style**: Identique au Features Preview

**Description**:
- **Texte**: "ImmoTopia s'adapte aux besoins spécifiques de chaque acteur de l'immobilier pour optimiser votre activité"

### Personas Grid
**5 personas affichées**:

1. **Agences immobilières**
   - Gradient: `from-blue-500 to-cyan-500`
   - Description: "Centralisez toute votre activité sur une seule plateforme et augmentez votre productivité de 40%."
   - Métriques: +40% Productivité, -60% Gain de temps

2. **Promoteurs immobiliers**
   - Gradient: `from-purple-500 to-pink-500`
   - Description: "Pilotez vos projets et vendez plus vite avec un suivi complet de la commercialisation."
   - Métriques: -30% Délai de vente, 100% Suivi projets

3. **Syndics de copropriété**
   - Gradient: `from-indigo-500 to-purple-500`
   - Description: "Automatisez votre gestion de copropriété et réduisez de 60% le temps administratif."
   - Métriques: -60% Temps admin, 80% Automatisation

4. **Gestionnaires locatifs**
   - Gradient: `from-emerald-500 to-teal-500`
   - Description: "Simplifiez votre gestion locative avec l'automatisation des paiements et du suivi."
   - Métriques: 100% Paiements, -40% Impaiements

5. **Propriétaires bailleurs**
   - Gradient: `from-orange-500 to-amber-500`
   - Description: "Professionnalisez votre gestion locative et gagnez du temps sur la gestion de vos biens."
   - Métriques: +50% Gain de temps, 100% Suivi

**Style des Persona Cards**:
- **Card**: Identique aux Feature Cards
- **Icône**: TrendingUp (lucide-react) - `h-6 w-6`
- **Container icône**: `h-12 w-12`
- **Métriques**:
  - Grid: `grid grid-cols-2 gap-4`
  - Bordure supérieure: `border-t border-gray-200 pt-4`
  - Valeur: Gradient avec `bg-clip-text text-transparent`
  - Taille valeur: `text-2xl font-bold`
  - Label: `text-xs font-medium text-gray-600`

**Layout Grid**:
- **Display**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Gap**: `gap-6`

### CTA Section
- **Texte**: "Voir toutes les solutions"
- **Style**: Identique au CTA Features Preview
- **Lien**: `/pour-qui`

---

## Section 6: Testimonials

### Background
- **Gradient**: `from-[#F8FAFF] via-white to-[#F0F7FF]`
- **Décoration animée**:
  - 3 orbes flottants:
    - Center: `h-[900px] w-[900px] bg-[#2563EB]/6` (6s)
    - Top-right: `h-[600px] w-[600px] bg-[#3B82F6]/5` (7s, delay 2s)
    - Bottom-left: `h-[700px] w-[700px] bg-[#1D4ED8]/4` (8s, delay 4s)
  - Grille: `bg-[size:36px_36px]` opacité 30%

### Padding
- **Vertical**: `py-16 md:py-24 lg:py-32`

### Header Section
**Badge**:
- **Texte**: "Témoignages"
- **Icône**: Star (lucide-react) - `fill-[#2563EB]`

**Titre (H2)**:
- **Texte**: "Ils nous font **confiance**"
- **Style**: Identique aux autres sections

**Description**:
- **Texte**: "Découvrez les retours de nos clients professionnels qui ont transformé leur activité avec ImmoTopia"

### Testimonials Grid
**3 témoignages affichés**:

1. **Sophie Martin**
   - Rôle: Directrice
   - Entreprise: Agence Immobilière Pro
   - Note: ⭐⭐⭐⭐⭐ (5 étoiles)
   - Contenu: "ImmoTopia a transformé notre façon de travailler. Nous avons gagné un temps considérable sur les tâches administratives et notre productivité a augmenté de 40%."

2. **Jean Dupont**
   - Rôle: Promoteur
   - Entreprise: Développement Immobilier SA
   - Note: ⭐⭐⭐⭐⭐
   - Contenu: "La plateforme centralise tout : gestion des biens, CRM, suivi des ventes. C'est exactement ce qu'il nous fallait pour gérer nos projets efficacement."

3. **Marie Leclerc**
   - Rôle: Syndic
   - Entreprise: Syndicat Professionnel
   - Note: ⭐⭐⭐⭐⭐
   - Contenu: "L'automatisation des tâches administratives pour les copropriétés est un vrai plus. Nos clients apprécient la transparence et la rapidité de traitement."

**Style des Testimonial Cards**:
- **Card**:
  - Background: `bg-white/90 backdrop-blur-sm`
  - Bordure: `border border-gray-200/60`
  - Hover: `hover:border-[#2563EB]/30 hover:shadow-2xl hover:-translate-y-2`
  - Transition: `duration-500`
  
- **Icône Quote**:
  - Quote (lucide-react): `h-10 w-10 text-[#2563EB]/20`
  - Hover: `group-hover:scale-110 group-hover:text-[#2563EB]/40`
  
- **Étoiles**:
  - Icône: Star (lucide-react) - `h-4 w-4 fill-[#FBBF24] text-[#FBBF24]`
  
- **Contenu**:
  - Taille: `text-base sm:text-lg`
  - Couleur: `text-gray-700`
  - Line-height: `leading-relaxed`
  - Guillemets: `"{content}"`
  
- **Auteur**:
  - Nom: `font-bold text-gray-900`
  - Rôle/Entreprise: `text-sm text-gray-600`
  - Séparateur: `border-t border-gray-200/60 pt-4`

**Layout Grid**:
- **Display**: `grid grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3`
- **Gap**: `gap-6 sm:gap-8`

---

## Section 7: Final CTA

### Background
- **Gradient**: `from-primary via-indigo-600 to-primary` (bleu dégradé)
- **Couleur texte**: `text-white`
- **Décoration animée**:
  - 3 orbes blancs avec `blur-3xl`:
    - Top-left: `h-96 w-96 bg-white/10` (animate-pulse)
    - Bottom-right: `h-96 w-96 bg-white/10` (delay 1s)
    - Center: `h-[600px] w-[600px] bg-white/5`

### Padding
- **Vertical**: `py-20 md:py-32`

### Badge
- **Texte**: "Commencez dès aujourd'hui"
- **Style**:
  - Background: `bg-white/10 backdrop-blur-sm`
  - Bordure: `border border-white/20`
  - Padding: `px-4 py-1.5`
  - Border-radius: `rounded-full`
  - Font: `text-xs font-semibold uppercase tracking-wider text-white`

### Titre (H2)
- **Texte**: "Prêt à transformer votre **gestion immobilière** ?"
- **Style**:
  - Taille: `text-3xl md:text-4xl lg:text-5xl`
  - Font: `font-bold`
  - Couleur: `text-white`
  - Effet sur "gestion immobilière": `bg-white/20 blur-sm`

### Description
- **Texte**: "Rejoignez les professionnels qui font confiance à ImmoTopia pour centraliser et automatiser leur activité immobilière."
- **Style**:
  - Taille: `text-lg md:text-xl`
  - Couleur: `text-white/90`

### CTAs
**CTA Principal**:
- **Texte**: "Demander une démo gratuite"
- **Style**:
  - Variant: `secondary`
  - Background: `bg-white text-primary`
  - Ombre: `shadow-xl hover:shadow-2xl`
  - Hover: `hover:scale-105 hover:bg-gray-100`
  - Icône: ArrowRight avec animation
- **Lien**: `/contact?demo=true`

**CTA Secondaire**:
- **Texte**: "Voir les tarifs"
- **Style**:
  - Variant: `outline`
  - Bordure: `border-2 border-white/30`
  - Background: `bg-white/10 backdrop-blur-sm`
  - Texte: `text-white`
  - Hover: `hover:scale-105 hover:border-white/50 hover:bg-white/20`
- **Lien**: `/tarifs`

**Layout CTAs**:
- **Display**: `flex flex-col sm:flex-row`
- **Gap**: `gap-4`
- **Justify**: `justify-center`

---

## Palette de Couleurs

### Couleurs Principales
- **Primary**: `#2563EB` (Blue 600)
- **Primary Hover**: `#1D4ED8` (Blue 700)
- **Primary Active**: `#1E40AF` (Blue 800)
- **Secondary**: `#10B981` (Emerald 500)

### Couleurs de Texte
- **Primary**: `#171717` (Gray 900)
- **Secondary**: `#525252` (Gray 600)
- **Tertiary**: `#737373` (Gray 500)
- **Inverse**: `#FFFFFF` (White)

### Couleurs de Fond
- **Primary**: `#FFFFFF` (White)
- **Secondary**: `#F7F7F7` (Gray 100)
- **Tertiary**: `#E5E5E5` (Gray 200)

### Gradients
- **Hero Background**: `#F0F7FF` → `#E8F2FF` → `#D6EBFF`
- **Primary Gradient**: `#2563EB` → `#3B82F6` → `#2563EB`
- **Stats Section**: `from-primary to-indigo-600`
- **Final CTA**: `from-primary via-indigo-600 to-primary`

### Couleurs Fonctionnelles
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`

---

## Typographie

### Famille de Police
- **Base**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Heading**: Identique à Base

### Tailles Desktop
- **H1**: `48px` (Hero: `text-2xl` à `text-5xl` responsive)
- **H2**: `36px` (Sections: `text-3xl` à `text-6xl` responsive)
- **H3**: `24px`
- **H4**: `20px`
- **Body**: `16px`
- **Small**: `14px`
- **Caption**: `12px`

### Tailles Mobile
- **H1**: `32px`
- **H2**: `28px`
- **H3**: `20px`
- **H4**: `18px`
- **Body**: `16px`
- **Small**: `14px`
- **Caption**: `12px`

### Poids
- **Regular**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`
- **Extrabold**: `800` (titres principaux)

### Line Heights
- **Tight**: `1.2` (titres)
- **Normal**: `1.5` (corps de texte)
- **Relaxed**: `1.75` (descriptions)

---

## Espacements (Spacing)

### Padding Sections
- **Petit**: `py-12` (48px)
- **Moyen**: `py-16` (64px)
- **Grand**: `py-20` (80px)
- **Très grand**: `py-24` (96px) / `py-32` (128px)

### Gaps
- **Petit**: `gap-4` (16px)
- **Moyen**: `gap-6` (24px)
- **Grand**: `gap-8` (32px)
- **Très grand**: `gap-12` (48px) / `gap-16` (64px)

### Container Padding
- **Mobile**: `px-4` (16px)
- **Tablet**: `px-6` (24px)
- **Desktop**: `px-8` (32px)

---

## Animations et Interactions

### ScrollReveal
- **Directions**: `fade`, `up`
- **Délais**: Progressifs (0ms, 100ms, 200ms, 300ms, etc.)

### Hover Effects
- **Scale**: `hover:scale-105`, `hover:scale-110`
- **Translate**: `hover:-translate-y-2`
- **Rotate**: `group-hover:rotate-3`
- **Translate X**: `group-hover:translate-x-1`, `group-hover:translate-x-2`

### Transitions
- **Fast**: `150ms`
- **Base**: `200ms`
- **Slow**: `300ms`
- **Very Slow**: `500ms`

### Animations CSS
- **Pulse**: `animate-pulse` (orbes flottants)
- **Gradient Shift**: Animation de gradient avec `bg-[length:200%_100%]`
- **Float**: Animation de flottement (non utilisée actuellement)

---

## Responsive Design

### Breakpoints
- **Mobile**: `375px`
- **Mobile Large**: `414px`
- **Tablet**: `768px` (`sm:`)
- **Tablet Large**: `1024px` (`md:`)
- **Desktop**: `1440px` (`lg:`)
- **Desktop Large**: `1920px` (`xl:`)

### Adaptations Responsive
- **Typography**: Tailles réduites sur mobile
- **Grid**: 1 colonne mobile → 2 colonnes tablet → 3 colonnes desktop
- **Padding**: Réduit sur mobile
- **Navigation**: Menu burger sur mobile, navigation complète sur desktop
- **CTAs**: Empilés verticalement sur mobile, horizontalement sur desktop

---

## Composants UI Utilisés

### De shadcn/ui
- **Button**: Variants `default`, `outline`, `secondary`
- **Card**: `Card`, `CardContent`, `CardFooter`
- **Sheet**: Menu mobile

### De @monorepo/ui
- **ScrollReveal**: Animations au scroll

### De lucide-react
- **Icônes**: Sparkles, ArrowRight, Users, Star, Quote, CheckCircle2, TrendingUp, Menu

---

## Analytics et Tracking

### Événements Trackés
- **CTAs**: `trackCTAClick('Texte CTA', 'section')`
  - Hero: "Demander une démo", "Découvrir la solution"
  - Final CTA: "Demander une démo gratuite", "Voir les tarifs"

### Google Analytics
- Intégré via `GoogleAnalytics` component

---

## SEO

### Métadonnées
- **Title**: "Plateforme immobilière Afrique de l'Ouest - ImmoTopia"
- **Description**: (définie dans le SEO config)
- **Canonical URL**: `/`

### Structured Data
- **Organization Schema**: Généré automatiquement
- **Website Schema**: Généré automatiquement

---

## Accessibilité

### Contraste
- Texte sur fond clair: `text-gray-900` sur `bg-white` (ratio élevé)
- Texte sur fond sombre: `text-white` sur gradient bleu (ratio élevé)

### Navigation au Clavier
- Tous les liens et boutons sont accessibles au clavier
- Focus states visibles

### ARIA Labels
- Menu burger: `aria-label="Toggle menu"`

---

## Performance

### Optimisations
- **Fonts**: Preconnect vers Google Fonts
- **Images**: (non présentes sur la landing, mais optimisées via Next.js Image si utilisées)
- **Lazy Loading**: ScrollReveal pour animations différées
- **Backdrop Blur**: Utilisé avec modération

---

## Notes Techniques

### Technologies
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (via ScrollReveal)
- **Icons**: Lucide React
- **TypeScript**: Strict mode

### Structure des Fichiers
- **Page**: `apps/web/src/app/page.tsx`
- **Content**: `apps/web/src/components/pages/HomePageContent.tsx`
- **Sections**: `apps/web/src/components/sections/`
- **Data**: `apps/web/src/lib/features.ts`, `apps/web/src/lib/personas.ts`
- **Styles**: `apps/web/src/app/globals.css`

---

## Résumé des CTAs

1. **Header**: "Demander une démo" → `/contact?demo=true`
2. **Hero Principal**: "Demander une démo" → `/contact?demo=true`
3. **Hero Secondaire**: "Découvrir la solution" → `/la-solution`
4. **Features**: "Voir toutes les fonctionnalités" → `/fonctionnalites`
5. **Personas**: "Voir toutes les solutions" → `/pour-qui`
6. **Final CTA Principal**: "Demander une démo gratuite" → `/contact?demo=true`
7. **Final CTA Secondaire**: "Voir les tarifs" → `/tarifs`

---

*Document généré le 28 décembre 2025*
*Basé sur l'analyse du code source de la page d'accueil ImmoTopia*


