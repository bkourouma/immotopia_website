# Meilleures Pratiques Front-End - ImmoTopia

## 🎨 Design & Expérience Utilisateur

### 1. Design System & Cohérence Visuelle

#### Couleurs & Contraste
- **Contraste minimum WCAG AA** : Utiliser un ratio de contraste d'au moins 4.5:1 pour le texte normal et 3:1 pour les grands textes
- **Hiérarchie visuelle claire** : Utiliser la couleur primaire (#2563EB) pour les actions importantes (CTA, liens actifs)
- **États visuels explicites** : Toujours définir les états hover, active, focus, et disabled pour tous les éléments interactifs

```tsx
// ✅ Bon exemple - Bouton avec tous les états visuels
<Button 
  className="bg-primary text-white shadow-md hover:shadow-lg hover:bg-primary/95 transition-all duration-200 hover:scale-105 active:scale-100"
>
  Demander une démo
</Button>
```

#### Typographie
- **Hiérarchie claire** : Utiliser les tailles de police du design system (h1: 48px, h2: 36px, body: 16px)
- **Lisibilité optimale** : Line-height de 1.5 pour le body, 1.2 pour les titres
- **Responsive** : Ajuster les tailles de police sur mobile (h1: 32px, h2: 28px)

#### Espacement
- **Grid System** : Utiliser un système d'espacement cohérent (multiples de 4px ou 8px)
- **Whitespace** : Laisser suffisamment d'espace blanc pour respirer
- **Padding cohérent** : Utiliser les tokens d'espacement du design system

### 2. Micro-interactions & Animations

#### Principes d'Animation
- **Durée standardisée** : 
  - Fast: 150ms (hover légers)
  - Base: 200ms (transitions standard)
  - Slow: 300ms (animations complexes)
- **Easing functions** : Utiliser `ease-in-out` pour les transitions fluides
- **Performance** : Préférer `transform` et `opacity` aux propriétés layout (width, height, margin)

```tsx
// ✅ Bon exemple - Animation performante
className="transition-all duration-200 hover:scale-105 transform"

// ❌ Éviter - Animation coûteuse
className="transition-all duration-200 hover:width-full"
```

#### Micro-interactions Recommandées

1. **Boutons CTA**
   - Effet de scale au hover (1.02-1.05)
   - Ombre dynamique (shadow-md → shadow-lg)
   - Feedback tactile avec active state

2. **Liens de Navigation**
   - Underline animé depuis le centre
   - Changement de couleur progressif
   - Indicateur visuel pour l'état actif

3. **Cards & Containers**
   - Effet de lift au hover (translateY + shadow)
   - Transition douce des bordures
   - Animations d'entrée (fade-in, slide-up)

4. **Formulaires**
   - Focus ring animé
   - Validation en temps réel avec feedback visuel
   - Transitions fluides entre les états

### 3. Performance & Optimisation

#### Images
- **Next.js Image** : Toujours utiliser le composant `<Image>` de Next.js
- **Lazy loading** : Charger les images hors viewport en lazy
- **Formats modernes** : Utiliser WebP ou AVIF avec fallback
- **Tailles adaptatives** : Fournir plusieurs tailles via `srcset`

```tsx
// ✅ Bon exemple
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  className="rounded-lg"
/>
```

#### Code Splitting
- **Lazy loading des composants** : Charger les composants lourds uniquement quand nécessaire
- **Route-based splitting** : Next.js le fait automatiquement
- **Dynamic imports** : Utiliser pour les composants non-critiques

```tsx
// ✅ Chargement conditionnel
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

#### Bundle Size
- **Tree shaking** : Importer seulement ce qui est nécessaire
- **Code splitting** : Séparer le code vendor du code applicatif
- **Analyse régulière** : Utiliser `@next/bundle-analyzer` pour identifier les opportunités

### 4. Accessibilité (A11y)

#### Standards WCAG 2.1
- **Contraste** : Minimum AA (4.5:1), idéalement AAA (7:1) pour le texte
- **Navigation clavier** : Tous les éléments interactifs accessibles au clavier
- **Focus visible** : Toujours afficher un indicateur de focus clair
- **ARIA labels** : Utiliser les attributs ARIA appropriés

```tsx
// ✅ Bon exemple
<button
  aria-label="Fermer le menu"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <CloseIcon aria-hidden="true" />
</button>
```

#### Sémantique HTML
- **Éléments natifs** : Préférer les éléments HTML sémantiques (`<nav>`, `<header>`, `<main>`, `<article>`)
- **Structure logique** : Utiliser les balises heading de manière hiérarchique (h1 → h2 → h3)
- **Labels de formulaire** : Toujours associer les labels aux inputs

### 5. Responsive Design

#### Mobile-First Approach
- **Design mobile-first** : Commencer par le design mobile, puis étendre vers desktop
- **Breakpoints cohérents** : Utiliser les breakpoints du design system
- **Touch targets** : Minimum 44x44px pour les éléments interactifs sur mobile

#### Breakpoints ImmoTopia
```css
/* Utiliser les breakpoints Tailwind */
sm: 640px   /* Mobile large */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop large */
2xl: 1536px /* Desktop XL */
```

#### Images Responsives
- **Srcset** : Fournir différentes tailles d'images
- **Art direction** : Utiliser différentes images selon le viewport si nécessaire
- **Aspect ratio** : Maintenir les ratios d'aspect cohérents

### 6. États & Feedback Utilisateur

#### Loading States
- **Skeleton screens** : Préférer aux spinners pour un meilleur UX
- **Progressive loading** : Afficher le contenu au fur et à mesure du chargement
- **Optimistic updates** : Mettre à jour l'UI immédiatement, puis synchroniser avec le serveur

```tsx
// ✅ Skeleton loader
{isLoading ? (
  <div className="animate-pulse space-y-4">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded"></div>
  </div>
) : (
  <Content />
)}
```

#### Error States
- **Messages clairs** : Expliquer ce qui s'est passé et comment résoudre
- **Actions de récupération** : Fournir des boutons pour réessayer ou contacter le support
- **Design cohérent** : Utiliser des icônes et couleurs d'erreur standardisées

#### Empty States
- **Guidance** : Expliquer pourquoi l'état est vide
- **Actions suggérées** : Proposer des actions pour remplir l'état vide
- **Design engageant** : Utiliser des illustrations ou icônes pour rendre l'état vide moins frustrant

### 7. Composants Réutilisables

#### Structure de Composants
```tsx
// ✅ Structure recommandée
interface ComponentProps {
  // Props requises
  title: string
  // Props optionnelles avec valeurs par défaut
  variant?: 'primary' | 'secondary'
  className?: string
  // Handlers
  onClick?: () => void
  // Children
  children?: React.ReactNode
}

export function Component({ 
  title, 
  variant = 'primary',
  className,
  onClick,
  children 
}: ComponentProps) {
  return (
    <div className={cn('base-styles', variantStyles[variant], className)}>
      {title}
      {children}
    </div>
  )
}
```

#### Composition over Configuration
- **Composants flexibles** : Créer des composants composables plutôt que très configurés
- **Slots pattern** : Utiliser `children` et des slots nommés pour la flexibilité
- **Variants avec CVA** : Utiliser `class-variance-authority` pour les variants de style

### 8. Animations & Transitions Spécifiques ImmoTopia

#### Scroll Animations
```tsx
// Utiliser framer-motion ou react-intersection-observer
import { useInView } from 'react-intersection-observer'

function ScrollReveal({ children }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {children}
    </div>
  )
}
```

#### Page Transitions
- **Transitions fluides** : Utiliser des transitions entre les pages pour une expérience fluide
- **Loading states** : Afficher des indicateurs de chargement lors des transitions
- **Smooth scrolling** : Activer le smooth scroll pour la navigation ancrée

#### Hover Effects Recommandés
```tsx
// Card hover effect
className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"

// Button hover effect
className="transition-all duration-200 hover:scale-105 hover:shadow-lg"

// Link hover effect avec underline animé
className="relative group hover:text-primary transition-colors"
// + underline animé avec pseudo-element
```

### 9. Optimisation SEO & Métadonnées

#### Métadonnées
- **Meta tags** : Utiliser Next.js Metadata API pour les meta tags dynamiques
- **Open Graph** : Implémenter les tags OG pour le partage social
- **Structured Data** : Utiliser JSON-LD pour les données structurées

```tsx
// ✅ Metadata dans Next.js 13+
export const metadata = {
  title: 'ImmoTopia - Solution de gestion immobilière',
  description: 'Description optimisée pour le SEO',
  openGraph: {
    title: 'ImmoTopia',
    description: 'Description',
    images: ['/og-image.jpg'],
  },
}
```

#### Performance SEO
- **Core Web Vitals** : Optimiser LCP, FID, CLS
- **Server-side rendering** : Utiliser SSR pour le contenu important
- **Semantic HTML** : Structure HTML sémantique pour un meilleur crawl

### 10. Gestion d'État & Données

#### Client State
- **React hooks** : Utiliser `useState` et `useReducer` pour l'état local simple
- **Context API** : Pour l'état partagé au niveau de l'application
- **Zustand/Redux** : Pour des applications plus complexes (si nécessaire)

#### Server State
- **React Query / SWR** : Pour la gestion du cache serveur et la synchronisation
- **Optimistic updates** : Mettre à jour l'UI avant la confirmation serveur
- **Error handling** : Gérer les erreurs avec des retry et fallbacks

### 11. Tests & Qualité

#### Tests Recommandés
- **Unit tests** : Tester les utilitaires et logique métier
- **Component tests** : Tester les composants isolés avec React Testing Library
- **E2E tests** : Tester les parcours utilisateur critiques avec Playwright/Cypress
- **Visual regression** : Détecter les changements visuels involontaires

#### Linting & Formatting
- **ESLint** : Configurer avec les règles Next.js et React
- **Prettier** : Formatage automatique du code
- **TypeScript strict** : Utiliser TypeScript en mode strict pour la sécurité de type

### 12. Checklist de Développement

#### Avant de commiter
- [ ] Code linter sans erreurs
- [ ] Types TypeScript valides
- [ ] Composants responsive testés (mobile, tablet, desktop)
- [ ] Accessibilité vérifiée (navigation clavier, contraste)
- [ ] Performance vérifiée (Lighthouse score > 90)
- [ ] Images optimisées
- [ ] Animations fluides (60fps)
- [ ] États de chargement et d'erreur gérés
- [ ] SEO métadonnées complètes

#### Code Review Checklist
- [ ] Code respecte les patterns établis
- [ ] Réutilise les composants existants quand possible
- [ ] N'a pas introduit de régressions
- [ ] Documentation à jour si nécessaire
- [ ] Pas de console.log ou code de debug

## 🚀 Implémentation Progressive

Pour une implémentation progressive, prioriser dans cet ordre :

1. **Phase 1 - Fondations** : Corrections de bugs, visibilité des éléments (boutons, liens)
2. **Phase 2 - Micro-interactions** : Hover effects, transitions de base, feedback utilisateur
3. **Phase 3 - Animations d'entrée** : Scroll animations, page transitions
4. **Phase 4 - Polish** : Refinements visuels, optimisations de performance
5. **Phase 5 - Avancé** : Animations complexes, effets visuels avancés

## 📚 Ressources Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/) - Animations avancées
- [React Aria](https://react-spectrum.adobe.com/react-aria/) - Accessibilité
- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Dernière mise à jour** : Décembre 2024
**Version** : 1.0.0

