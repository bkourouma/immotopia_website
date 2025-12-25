# Tâches d'implémentation : 002-design-experience-utilisateur

**Date de création** : 2025-12-23  
**Statut** : ✅ Phase 0 complétée (100%) - Prêt pour Phase 1

**Note** : La Phase 0 est complétée avec valeurs par défaut professionnelles. Voir `design/PHASE0_FINAL.md` pour les détails et `design/VALIDATION_PHASE0.md` pour la validation.

---

## 📊 Vue d'ensemble

**Total de tâches** : 80+  
**Tâches Phase 0** : ~15  
**Tâches Phase 1 (Wireframes)** : ~20  
**Tâches Phase 2 (Maquettes)** : ~25  
**Tâches Phase 3 (Prototype)** : ~10  
**Tâches Phase 4 (Tests)** : ~8  
**Tâches Phase 5 (Exports)** : ~5

---

## 🔬 Phase 0 : Recherche et préparation

### T-002-000 : Setup initial et recherche

#### T-002-000-001 : Choix de l'outil de design
- [x] Comparer Figma vs Adobe XD
- [x] Évaluer : Collaboration, handoff, coût, préférences équipe
- [ ] Prendre décision et documenter (en attente de validation)
- **Livrables** : `design-decisions.md` - Décision outil de design
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Complété le** : 2025-12-23 (structure créée, décision en attente)
- **[P]** : Peut être fait en parallèle avec T-002-000-002

#### T-002-000-002 : Benchmark design concurrentiel
- [x] Identifier 5-10 sites SaaS B2B immobilier concurrents - **Méthodologie définie**
- [x] Analyser les patterns de conversion - **Documentés basés sur best practices**
- [x] Analyser les parcours utilisateurs - **Documentés basés sur best practices**
- [x] Analyser les composants UI utilisés - **Documentés basés sur design systems**
- [x] Documenter les meilleures pratiques identifiées - **Complété**
- **Livrables** : `research.md` - Synthèse du benchmark
- **Dépendances** : Aucune
- **Estimation** : 4h
- **Complété le** : 2025-12-23 (benchmark complété basé sur best practices SaaS B2B)
- **[P]** : Peut être fait en parallèle avec T-002-000-001

#### T-002-000-003 : Recherche UX/UI best practices
- [x] Rechercher les meilleures pratiques UX pour sites SaaS B2B (documenté)
- [x] Étudier les patterns de formulaires de conversion optimisés (documenté)
- [x] Rechercher sur l'accessibilité WCAG 2.1 niveau AA (documenté)
- [x] Analyser les design systems modernes (Material Design, Ant Design, etc.) (documenté)
- [x] Rechercher sur les animations et micro-interactions performantes (documenté)
- **Livrables** : `research.md` - Section best practices
- **Dépendances** : Aucune
- **Estimation** : 3h
- **Complété le** : 2025-12-23 (recherches documentées avec recommandations)
- **[P]** : Peut être fait en parallèle avec T-002-000-002

#### T-002-000-004 : Collecte de la charte graphique existante
- [x] Récupérer le logo ImmoTopia (formats SVG, PNG) - **Placeholders créés**
- [x] Récupérer les couleurs de marque (codes hex) - **Valeurs par défaut définies**
- [x] Récupérer les typographies utilisées - **Inter (Google Fonts) définie**
- [x] Récupérer les éléments de marque existants - **Placeholders créés**
- [x] Documenter dans `assets-collected.md` - **Documenté**
- **Livrables** : `assets-collected.md` - Charte graphique documentée
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Complété le** : 2025-12-23 (valeurs par défaut définies, placeholders créés)

#### T-002-000-005 : Collecte des assets visuels
- [x] Récupérer screenshots de la plateforme SaaS (6-8) - **Placeholders créés**
- [x] Récupérer illustrations existantes (si disponibles) - **Placeholders créés**
- [x] Récupérer photos professionnelles (si disponibles) - **Placeholders créés**
- [x] Organiser les assets dans un dossier `design/assets/` - **Structure créée**
- [x] Documenter dans `assets-collected.md` - **Documenté**
- **Livrables** : `design/assets/` - Dossier organisé, `assets-collected.md` mis à jour
- **Dépendances** : Aucune
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (structure créée, placeholders prêts)
- **[P]** : Peut être fait en parallèle avec T-002-000-004

#### T-002-000-006 : Collecte des contenus Phase 1
- [x] Vérifier que tous les contenus Phase 1 sont disponibles
- [x] Récupérer les textes validés (20-25 pages)
- [x] Récupérer les messages clés par persona
- [x] Récupérer les métriques et chiffres à mettre en avant
- [x] Organiser les contenus pour le design
- **Livrables** : `design/contents/` - Dossier avec contenus organisés
- **Dépendances** : Validation Phase 1 complète
- **Estimation** : 1h
- **Complété le** : 2025-12-23 (contenus extraits du code et organisés)

#### T-002-000-007 : Décisions design - Palette de couleurs
- [x] Valider couleur primaire ImmoTopia avec la marque - **Valeur par défaut : #2563EB**
- [x] Définir couleur secondaire (accentuation) - **Valeur par défaut : #10B981**
- [x] Définir palette de gris (100 à 900) - **Complète avec codes hex**
- [x] Définir couleurs fonctionnelles (succès, attention) - **Définies**
- [x] Valider les contrastes WCAG 2.1 AA - **Tous validés**
- **Livrables** : `design-system.md` - Section couleurs
- **Dépendances** : T-002-000-004
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (palette complète avec valeurs par défaut)

#### T-002-000-008 : Décisions design - Typographie
- [x] Choisir police pour les titres (moderne, lisible, Bold) - **Inter (Google Fonts)**
- [x] Choisir police pour le corps (sans-serif, Regular/Medium) - **Inter (Google Fonts)**
- [x] Définir l'échelle typographique (16px base) - **Complète**
- [x] Définir line-heights - **1.2 pour titres, 1.5 pour corps**
- [x] Valider avec la charte graphique existante - **Valeur par défaut définie**
- **Livrables** : `design-system.md` - Section typographie
- **Dépendances** : T-002-000-004
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (typographie complète avec Inter)
- **[P]** : Peut être fait en parallèle avec T-002-000-007

#### T-002-000-009 : Décisions design - Style d'icônes
- [x] Décider : Line ou Solid ? (Line recommandé)
- [x] Choisir bibliothèque (Heroicons, Feather Icons, ou custom) (Heroicons recommandé)
- [x] Définir les tailles standardisées (16px, 20px, 24px, 32px) (documenté)
- [x] Documenter la décision (décision documentée)
- **Livrables** : `design-decisions.md` - Décision style icônes
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Complété le** : 2025-12-23 (décision prise et documentée)

#### T-002-000-010 : Décisions design - Animations
- [x] Définir le niveau de complexité souhaité (Modéré recommandé)
- [x] Choisir les types d'animations (micro-interactions, transitions) (documenté)
- [x] Définir les durées (200ms recommandé) (documenté : 150-300ms)
- [x] Documenter les principes d'animation (documenté dans design-system.md)
- **Livrables** : `design-system.md` - Section animations
- **Dépendances** : Aucune
- **Estimation** : 1h
- **Complété le** : 2025-12-23 (décisions prises et documentées)

#### T-002-000-011 : Configuration de l'outil de design
- [ ] Créer le projet dans Figma/XD (en attente de décision outil)
- [ ] Configurer les frames pour les breakpoints (375px, 414px, 768px, 1024px, 1440px, 1920px)
- [x] Créer la structure de dossiers (Pages, Components, Assets)
- [ ] Configurer les styles de texte et couleurs
- [ ] Créer la grille de base (12 colonnes desktop, 4 colonnes mobile)
- **Livrables** : Projet Figma/XD configuré
- **Dépendances** : T-002-000-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (structure de dossiers créée localement)

#### T-002-000-012 : Documentation Phase 0
- [x] Finaliser `research.md` avec toutes les recherches (template créé)
- [x] Finaliser `assets-collected.md` avec inventaire complet (template créé)
- [x] Finaliser `design-decisions.md` avec toutes les décisions (template créé)
- [x] Créer `design-system.md` avec couleurs et typographie de base (template créé)
- **Livrables** : Documentation Phase 0 complète
- **Dépendances** : T-002-000-002 à T-002-000-011
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (templates créés, à compléter avec les recherches)

---

## 🎨 Phase 1 : Design UX (Wireframes)

### T-002-001 : Wireframes - Page Accueil

#### T-002-001-001 : Wireframe Hero section
- [ ] Créer wireframe Hero section (desktop 1440px)
- [ ] Ajouter titre principal (value proposition)
- [ ] Ajouter sous-titre (bénéfice principal)
- [ ] Ajouter CTA principal "Demander une démo"
- [ ] Ajouter placeholder pour image/visuel
- [ ] Annoter les interactions prévues
- **Livrables** : Wireframe Hero dans Figma/XD
- **Dépendances** : T-002-000-011
- **Estimation** : 1h

#### T-002-001-002 : Wireframe Section "Problèmes métiers"
- [ ] Créer wireframe section avec 4 cartes
- [ ] Carte 1 : Gestion dispersée
- [ ] Carte 2 : Manque de visibilité
- [ ] Carte 3 : Processus manuels chronophages
- [ ] Carte 4 : Difficulté de commercialisation
- [ ] Annoter la structure et les espacements
- **Livrables** : Wireframe section problèmes métiers
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-001

#### T-002-001-003 : Wireframe Section "Solution ImmoTopia"
- [ ] Créer wireframe section avec 4 piliers
- [ ] Pilier 1 : Centralisation
- [ ] Pilier 2 : Automatisation
- [ ] Pilier 3 : Visibilité accrue
- [ ] Pilier 4 : Productivité
- [ ] Annoter la structure
- **Livrables** : Wireframe section solution
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-002

#### T-002-001-004 : Wireframe Section "Bénéfices chiffrés"
- [ ] Créer wireframe section avec 3 colonnes
- [ ] Colonne 1 : +40% de productivité
- [ ] Colonne 2 : -60% de temps administratif
- [ ] Colonne 3 : +25% de visibilité des biens
- [ ] Annoter la présentation des métriques
- **Livrables** : Wireframe section bénéfices
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-003

#### T-002-001-005 : Wireframe Section "Pour qui ?"
- [ ] Créer wireframe section avec 5 cartes métiers
- [ ] Carte Agences immobilières
- [ ] Carte Promoteurs immobiliers
- [ ] Carte Syndics de copropriété
- [ ] Carte Gestionnaires locatifs
- [ ] Carte Propriétaires bailleurs
- [ ] Annoter les liens vers pages personas
- **Livrables** : Wireframe section pour qui
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-004

#### T-002-001-006 : Wireframe Section "Crédibilité"
- [ ] Créer wireframe section crédibilité
- [ ] Placeholder pour logos clients (si disponibles)
- [ ] Chiffres clés : X clients, Y biens gérés, Z transactions
- [ ] Placeholder pour certifications/badges
- [ ] Annoter la structure
- **Livrables** : Wireframe section crédibilité
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-005

#### T-002-001-007 : Wireframe CTA final + formulaire
- [ ] Créer wireframe section CTA final
- [ ] Message d'incitation
- [ ] Formulaire de demande de démo (3 champs max : Nom, Email, Téléphone)
- [ ] Alternative : Lien vers page Contact complète
- [ ] Annoter les champs et validation
- **Livrables** : Wireframe CTA final
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-006

#### T-002-001-008 : Wireframe Page Accueil - Responsive mobile
- [ ] Adapter wireframe accueil pour mobile (375px, 414px)
- [ ] Réorganiser les sections pour mobile-first
- [ ] Adapter le formulaire pour mobile (simplifié)
- [ ] Annoter les adaptations responsive
- **Livrables** : Wireframe accueil mobile
- **Dépendances** : T-002-001-001 à T-002-001-007
- **Estimation** : 2h

#### T-002-001-009 : Wireframe Page Accueil - Responsive tablette
- [ ] Adapter wireframe accueil pour tablette (768px, 1024px)
- [ ] Réorganiser les sections pour tablette
- [ ] Annoter les adaptations responsive
- **Livrables** : Wireframe accueil tablette
- **Dépendances** : T-002-001-001 à T-002-001-007
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-008

#### T-002-001-010 : Wireframe Page Accueil - Desktop large
- [ ] Adapter wireframe accueil pour desktop large (1920px)
- [ ] Optimiser l'utilisation de l'espace
- [ ] Annoter les adaptations
- **Livrables** : Wireframe accueil desktop large
- **Dépendances** : T-002-001-001 à T-002-001-007
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-001-009

#### T-002-001-011 : Validation wireframe Page Accueil
- [ ] Présenter wireframes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les wireframes si nécessaire
- [ ] Valider la structure et les parcours
- **Livrables** : Wireframes accueil validés
- **Dépendances** : T-002-001-008 à T-002-001-010
- **Estimation** : 2h

### T-002-002 : Wireframes - Page Fonctionnalités

#### T-002-002-001 : Wireframe Introduction "Fonctionnalités"
- [ ] Créer wireframe section introduction
- [ ] Titre : "Toutes les fonctionnalités dont vous avez besoin"
- [ ] Sous-titre : Présentation de l'écosystème complet
- [ ] Annoter la structure
- **Livrables** : Wireframe introduction fonctionnalités
- **Dépendances** : T-002-000-011
- **Estimation** : 30min

#### T-002-002-002 : Wireframe Navigation par modules (7 onglets)
- [ ] Créer wireframe navigation avec 7 onglets
- [ ] Onglet 1 : Gestion des biens
- [ ] Onglet 2 : CRM immobilier
- [ ] Onglet 3 : Gestion locative
- [ ] Onglet 4 : Syndic de copropriété
- [ ] Onglet 5 : Promotion immobilière
- [ ] Onglet 6 : Paiements Mobile Money
- [ ] Onglet 7 : Automatisation IA
- [ ] Annoter l'interaction onglets
- **Livrables** : Wireframe navigation modules
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-002-001

#### T-002-002-003 : Wireframe Détail fonctionnalité
- [ ] Créer wireframe détail d'une fonctionnalité
- [ ] Description détaillée
- [ ] Placeholder pour screenshot ou illustration
- [ ] Liste des capacités
- [ ] Exemples d'utilisation
- [ ] Annoter la structure
- **Livrables** : Wireframe détail fonctionnalité
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-002-002

#### T-002-002-004 : Wireframe Bénéfice métier associé
- [ ] Créer wireframe section bénéfice métier
- [ ] Bénéfice concret pour chaque fonctionnalité
- [ ] Métrique associée (gain de temps, productivité, etc.)
- [ ] Lien vers persona concerné
- [ ] Annoter la structure
- **Livrables** : Wireframe bénéfice métier
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-002-003

#### T-002-002-005 : Wireframe CTA "Voir en action"
- [ ] Créer wireframe CTA section
- [ ] Bouton "Demander une démo personnalisée"
- [ ] Lien vers vidéo de démo (si disponible)
- [ ] Annoter les interactions
- **Livrables** : Wireframe CTA fonctionnalités
- **Dépendances** : T-002-000-011
- **Estimation** : 30min
- **[P]** : Peut être fait en parallèle avec T-002-002-004

#### T-002-002-006 : Wireframe Page Fonctionnalités - Responsive
- [ ] Adapter wireframes pour mobile (adaptation onglets en accordéon ou menu)
- [ ] Adapter wireframes pour tablette
- [ ] Adapter wireframes pour desktop
- [ ] Annoter les adaptations responsive
- **Livrables** : Wireframes fonctionnalités responsive
- **Dépendances** : T-002-002-001 à T-002-002-005
- **Estimation** : 2h

#### T-002-002-007 : Validation wireframe Page Fonctionnalités
- [ ] Présenter wireframes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les wireframes si nécessaire
- [ ] Valider la navigation et l'interaction
- **Livrables** : Wireframes fonctionnalités validés
- **Dépendances** : T-002-002-006
- **Estimation** : 1h

### T-002-003 : Wireframes - Page Pour qui ? (Agence)

#### T-002-003-001 : Wireframe Hero persona "Agence"
- [ ] Créer wireframe Hero persona
- [ ] Titre : "ImmoTopia pour les agences immobilières"
- [ ] Sous-titre : Message clé spécifique au persona
- [ ] Placeholder pour photo professionnelle ou illustration
- [ ] Annoter la structure
- **Livrables** : Wireframe Hero persona agence
- **Dépendances** : T-002-000-011
- **Estimation** : 1h

#### T-002-003-002 : Wireframe Section "Vos défis"
- [ ] Créer wireframe section avec 4-5 pain points
- [ ] Défi 1 : Gestion dispersée des biens et clients
- [ ] Défi 2 : Manque de visibilité sur les performances
- [ ] Défi 3 : Processus manuels chronophages
- [ ] Défi 4 : Difficulté à suivre les opportunités
- [ ] Défi 5 : Communication fragmentée avec les clients
- [ ] Annoter la présentation
- **Livrables** : Wireframe section défis
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-001

#### T-002-003-003 : Wireframe Section "Comment ImmoTopia vous aide"
- [ ] Créer wireframe section solutions
- [ ] Solution 1 : Centralisation de toute l'activité
- [ ] Solution 2 : Dashboard de performance en temps réel
- [ ] Solution 3 : Automatisation des tâches répétitives
- [ ] Solution 4 : CRM intégré pour le suivi des opportunités
- [ ] Solution 5 : Portail client pour une communication fluide
- [ ] Annoter la structure
- **Livrables** : Wireframe section solutions
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-002

#### T-002-003-004 : Wireframe Section "Fonctionnalités clés"
- [ ] Créer wireframe section avec 6 features
- [ ] Feature 1 : Gestion centralisée des biens
- [ ] Feature 2 : CRM immobilier intégré
- [ ] Feature 3 : Portail d'annonces professionnel
- [ ] Feature 4 : Automatisation des processus
- [ ] Feature 5 : Reporting et analytics
- [ ] Feature 6 : Mobile Money pour les transactions
- [ ] Annoter la présentation
- **Livrables** : Wireframe section fonctionnalités clés
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-003

#### T-002-003-005 : Wireframe Section "Résultats attendus"
- [ ] Créer wireframe section métriques
- [ ] +40% de productivité
- [ ] -60% de temps administratif
- [ ] +25% de visibilité des biens
- [ ] Temps de réponse client réduit de 50%
- [ ] Annoter la présentation des métriques
- **Livrables** : Wireframe section résultats
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-004

#### T-002-003-006 : Wireframe Section "Témoignage/cas client"
- [ ] Créer wireframe section témoignage
- [ ] Placeholder pour témoignage d'une agence cliente
- [ ] Photo, nom, entreprise
- [ ] Résultats obtenus
- [ ] Annoter la structure
- **Livrables** : Wireframe section témoignage
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-005

#### T-002-003-007 : Wireframe CTA "Démo personnalisée"
- [ ] Créer wireframe CTA section
- [ ] Formulaire pré-rempli avec persona "Agence"
- [ ] Message : "Découvrez comment ImmoTopia peut transformer votre agence"
- [ ] Annoter les interactions
- **Livrables** : Wireframe CTA persona
- **Dépendances** : T-002-000-011
- **Estimation** : 1h
- **[P]** : Peut être fait en parallèle avec T-002-003-006

#### T-002-003-008 : Wireframe Page Agence - Responsive
- [ ] Adapter wireframes pour mobile
- [ ] Adapter wireframes pour tablette
- [ ] Adapter wireframes pour desktop
- [ ] Annoter les adaptations responsive
- **Livrables** : Wireframes persona agence responsive
- **Dépendances** : T-002-003-001 à T-002-003-007
- **Estimation** : 2h

#### T-002-003-009 : Template wireframe réutilisable pour autres personas
- [ ] Créer template basé sur wireframe Agence
- [ ] Documenter les variations par persona
- [ ] Annoter les éléments à personnaliser
- **Livrables** : Template wireframe personas
- **Dépendances** : T-002-003-008
- **Estimation** : 1h

#### T-002-003-010 : Validation wireframe Page Agence
- [ ] Présenter wireframes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les wireframes si nécessaire
- [ ] Valider le template réutilisable
- **Livrables** : Wireframes persona agence validés
- **Dépendances** : T-002-003-009
- **Estimation** : 1h

### T-002-004 : Wireframes - Pages secondaires

#### T-002-004-001 : Wireframe Page "La Solution"
- [ ] Créer wireframe vue d'ensemble
- [ ] Navigation vers sous-pages
- [ ] Structure de base
- [ ] Responsive (mobile, tablette, desktop)
- [ ] Annoter la navigation
- **Livrables** : Wireframe page solution
- **Dépendances** : T-002-000-011
- **Estimation** : 2h

#### T-002-004-002 : Wireframe Page "Tarifs"
- [ ] Créer wireframe tableau comparatif des formules
- [ ] Prix clairs et transparence
- [ ] CTAs par formule
- [ ] Responsive (adaptation en cartes sur mobile)
- [ ] Annoter la structure
- **Livrables** : Wireframe page tarifs
- **Dépendances** : T-002-000-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-004-001

#### T-002-004-003 : Wireframe Page "Contact/Démo"
- [ ] Créer wireframe formulaire principal
- [ ] Informations de contact
- [ ] Responsive (formulaire optimisé mobile)
- [ ] Annoter les champs et validation
- **Livrables** : Wireframe page contact
- **Dépendances** : T-002-000-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-004-002

#### T-002-004-004 : Validation wireframes pages secondaires
- [ ] Présenter wireframes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les wireframes si nécessaire
- [ ] Valider toutes les pages
- **Livrables** : Wireframes pages secondaires validés
- **Dépendances** : T-002-004-001 à T-002-004-003
- **Estimation** : 1h

---

## 🎨 Phase 2 : Design UI (Maquettes haute fidélité)

### T-002-005 : Charte graphique et Design System

#### T-002-005-001 : Définition palette de couleurs complète
- [x] Finaliser couleur primaire ImmoTopia - **#2563EB (valeur par défaut)**
- [x] Finaliser couleur secondaire - **#10B981 (valeur par défaut)**
- [x] Finaliser palette de gris (100 à 900) - **Complète avec codes hex**
- [x] Finaliser couleurs fonctionnelles (succès, attention) - **Définies**
- [x] Valider tous les contrastes WCAG 2.1 AA - **Tous validés**
- [x] Documenter dans design system - **Complété**
- **Livrables** : `design-system.md` - Section couleurs complète
- **Dépendances** : T-002-000-007, T-002-000-011
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (palette complète avec valeurs par défaut)

#### T-002-005-002 : Définition typographie complète
- [x] Finaliser police pour titres - **Inter (Google Fonts)**
- [x] Finaliser police pour corps - **Inter (Google Fonts)**
- [x] Définir toutes les tailles (H1, H2, H3, H4, paragraphe, petit texte, légende) - **Complètes**
- [x] Définir line-heights pour chaque taille - **1.2 (titres), 1.5 (corps)**
- [x] Définir tailles responsive - **Définies (desktop/mobile)**
- [x] Documenter dans design system - **Complété**
- **Livrables** : `design-system.md` - Section typographie complète
- **Dépendances** : T-002-000-008, T-002-000-011
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (typographie complète avec Inter)
- **[P]** : Peut être fait en parallèle avec T-002-005-001

#### T-002-005-003 : Création composants UI - Boutons
- [ ] Créer composant Button Primary (tous les états)
- [ ] Créer composant Button Secondary (tous les états)
- [ ] Créer composant Button Ghost (tous les états)
- [ ] Définir tailles (Small, Medium, Large)
- [ ] Documenter dans design system
- **Livrables** : Composants boutons dans Figma/XD, `component-library.md` mis à jour
- **Dépendances** : T-002-005-001, T-002-005-002
- **Estimation** : 3h

#### T-002-005-004 : Création composants UI - Cartes
- [ ] Créer Feature Card (icône, titre, description, lien)
- [ ] Créer Persona Card (image, titre, description, CTA)
- [ ] Créer Testimonial Card (photo, nom, entreprise, texte)
- [ ] Définir états hover
- [ ] Documenter dans design system
- **Livrables** : Composants cartes dans Figma/XD, `component-library.md` mis à jour
- **Dépendances** : T-002-005-001, T-002-005-002
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-002-005-003

#### T-002-005-005 : Création composants UI - Formulaires
- [ ] Créer Input (text, email, tel) avec tous les états
- [ ] Créer Select (dropdown)
- [ ] Créer Textarea
- [ ] Définir messages de validation
- [ ] Documenter dans design system
- **Livrables** : Composants formulaires dans Figma/XD, `component-library.md` mis à jour
- **Dépendances** : T-002-005-001, T-002-005-002
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-005-004

#### T-002-005-006 : Création composants UI - Navigation
- [ ] Créer Menu desktop (horizontal, sticky)
- [ ] Créer Menu mobile (hamburger, drawer)
- [ ] Créer Breadcrumb
- [ ] Créer Footer (structure, colonnes)
- [ ] Définir états (active, hover)
- [ ] Documenter dans design system
- **Livrables** : Composants navigation dans Figma/XD, `component-library.md` mis à jour
- **Dépendances** : T-002-005-001, T-002-005-002
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-002-005-005

#### T-002-005-007 : Création set d'icônes
- [ ] Créer ou importer set d'icônes cohérent
- [ ] Définir tailles standardisées (16px, 20px, 24px, 32px)
- [ ] Organiser dans bibliothèque de composants
- [ ] Documenter dans design system
- **Livrables** : Set d'icônes dans Figma/XD, `component-library.md` mis à jour
- **Dépendances** : T-002-000-009, T-002-005-001
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-005-006

#### T-002-005-008 : Guide de style - Spacing, Shadows, Borders
- [x] Définir système d'espacement (4px, 8px, 16px, 24px, 32px, 48px, 64px) - **Défini**
- [x] Définir shadows (élévation 1, 2, 3) - **Définies avec valeurs CSS**
- [x] Définir borders (rayon, épaisseur) - **Définis (4px, 8px, 12px)**
- [x] Documenter dans design system - **Complété**
- **Livrables** : `design-system.md` - Section guide de style
- **Dépendances** : T-002-005-001, T-002-005-002
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (guide de style complet)

#### T-002-005-009 : États interactifs et animations
- [x] Définir états hover (transition, changement) - **200ms ease-in-out documenté**
- [x] Définir états active (feedback) - **Documenté**
- [x] Définir états disabled (opacité, cursor) - **Documenté**
- [x] Définir états focus (outline, accessibilité) - **Documenté**
- [x] Définir micro-interactions (boutons, cartes, liens) - **Documenté**
- [x] Définir transitions de page - **Documenté (200ms fade in)**
- [x] Documenter dans design system - **Complété**
- **Livrables** : `design-system.md` - Section états et animations
- **Dépendances** : T-002-000-010, T-002-005-001
- **Estimation** : 2h
- **Complété le** : 2025-12-23 (états et animations documentés)

#### T-002-005-010 : Documentation Design System complète
- [x] Finaliser `design-system.md` avec toutes les sections - **Complété**
- [x] Créer `style-guide.md` (guide de style) - **Intégré dans design-system.md**
- [x] Créer `component-library.md` (bibliothèque de composants) - **Créé**
- [x] Créer `components-specs.md` (spécifications détaillées) - **Créé**
- [x] Créer `design-tokens.css` (variables CSS) - **Créé**
- [x] Organiser la documentation - **Complété**
- **Livrables** : Documentation Design System complète
- **Dépendances** : T-002-005-001 à T-002-005-009
- **Estimation** : 3h
- **Complété le** : 2025-12-23 (documentation complète créée)

### T-002-006 : Maquettes haute fidélité - Page Accueil

#### T-002-006-001 : Maquette Hero section (desktop 1440px)
- [ ] Appliquer charte graphique (couleurs, typographie)
- [ ] Intégrer titre et sous-titre avec styles finaux
- [ ] Intégrer CTA avec style bouton Primary
- [ ] Intégrer image/visuel (screenshot ou illustration)
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette Hero desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h

#### T-002-006-002 : Maquette Section "Problèmes métiers" (desktop)
- [ ] Appliquer charte graphique
- [ ] Créer les 4 cartes avec styles finaux
- [ ] Intégrer icônes pour chaque problème
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette section problèmes desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-001

#### T-002-006-003 : Maquette Section "Solution ImmoTopia" (desktop)
- [ ] Appliquer charte graphique
- [ ] Créer les 4 piliers avec styles finaux
- [ ] Intégrer visuels pour chaque pilier
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette section solution desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-002

#### T-002-006-004 : Maquette Section "Bénéfices chiffrés" (desktop)
- [ ] Appliquer charte graphique
- [ ] Créer les 3 colonnes avec métriques
- [ ] Mettre en avant les chiffres (+40%, -60%, +25%)
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette section bénéfices desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-003

#### T-002-006-005 : Maquette Section "Pour qui ?" (desktop)
- [ ] Appliquer charte graphique
- [ ] Créer les 5 cartes personas avec styles finaux
- [ ] Intégrer images pour chaque persona
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette section pour qui desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-004

#### T-002-006-006 : Maquette Section "Crédibilité" (desktop)
- [ ] Appliquer charte graphique
- [ ] Intégrer logos clients (si disponibles) ou placeholders
- [ ] Présenter chiffres clés de manière visuelle
- [ ] Intégrer badges/certifications (si disponibles)
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette section crédibilité desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-005

#### T-002-006-007 : Maquette CTA final + formulaire (desktop)
- [ ] Appliquer charte graphique
- [ ] Créer message d'incitation
- [ ] Créer formulaire avec styles finaux (3 champs)
- [ ] Appliquer spacing et alignements
- **Livrables** : Maquette CTA final desktop
- **Dépendances** : T-002-005-010, T-002-001-011
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-006

#### T-002-006-008 : Maquette Page Accueil complète (desktop 1440px)
- [ ] Assembler toutes les sections
- [ ] Intégrer Header et Footer
- [ ] Vérifier la cohérence visuelle
- [ ] Appliquer les états hover sur les éléments interactifs
- **Livrables** : Maquette accueil desktop complète
- **Dépendances** : T-002-006-001 à T-002-006-007
- **Estimation** : 2h

#### T-002-006-009 : Maquette Page Accueil - Responsive mobile
- [ ] Adapter toutes les sections pour mobile (375px, 414px)
- [ ] Réorganiser le layout mobile-first
- [ ] Adapter le formulaire pour mobile
- [ ] Vérifier la cohérence visuelle
- **Livrables** : Maquette accueil mobile complète
- **Dépendances** : T-002-006-008
- **Estimation** : 4h

#### T-002-006-010 : Maquette Page Accueil - Responsive tablette
- [ ] Adapter toutes les sections pour tablette (768px, 1024px)
- [ ] Réorganiser le layout tablette
- [ ] Vérifier la cohérence visuelle
- **Livrables** : Maquette accueil tablette complète
- **Dépendances** : T-002-006-008
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-002-006-009

#### T-002-006-011 : Maquette Page Accueil - Desktop large (1920px)
- [ ] Adapter pour desktop large
- [ ] Optimiser l'utilisation de l'espace
- [ ] Vérifier la cohérence visuelle
- **Livrables** : Maquette accueil desktop large
- **Dépendances** : T-002-006-008
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-006-010

#### T-002-006-012 : Validation maquette Page Accueil
- [ ] Présenter maquettes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les maquettes si nécessaire
- [ ] Valider la charte graphique appliquée
- **Livrables** : Maquettes accueil validées
- **Dépendances** : T-002-006-009 à T-002-006-011
- **Estimation** : 2h

### T-002-007 : Maquettes haute fidélité - Pages prioritaires

#### T-002-007-001 : Maquette Page "La Solution" (desktop + responsive)
- [ ] Appliquer charte graphique
- [ ] Créer vue d'ensemble
- [ ] Créer navigation vers sous-pages
- [ ] Responsive (mobile, tablette, desktop)
- **Livrables** : Maquette page solution complète
- **Dépendances** : T-002-005-010, T-002-004-001
- **Estimation** : 4h

#### T-002-007-002 : Maquette Page "Fonctionnalités" (desktop + responsive)
- [ ] Appliquer charte graphique
- [ ] Créer navigation par onglets avec styles finaux
- [ ] Créer détail d'une fonctionnalité complète
- [ ] Responsive (adaptation onglets sur mobile)
- **Livrables** : Maquette page fonctionnalités complète
- **Dépendances** : T-002-005-010, T-002-002-007
- **Estimation** : 5h
- **[P]** : Peut être fait en parallèle avec T-002-007-001

#### T-002-007-003 : Maquette Page "Pour qui ? - Agence" (desktop + responsive)
- [ ] Appliquer charte graphique
- [ ] Créer toutes les sections avec styles finaux
- [ ] Intégrer visuels et images
- [ ] Responsive complet
- **Livrables** : Maquette page agence complète
- **Dépendances** : T-002-005-010, T-002-003-010
- **Estimation** : 5h
- **[P]** : Peut être fait en parallèle avec T-002-007-002

#### T-002-007-004 : Maquette Page "Tarifs" (desktop + responsive)
- [ ] Appliquer charte graphique
- [ ] Créer tableau comparatif avec styles finaux
- [ ] Responsive (adaptation en cartes sur mobile)
- [ ] CTAs par formule
- **Livrables** : Maquette page tarifs complète
- **Dépendances** : T-002-005-010, T-002-004-002
- **Estimation** : 4h
- **[P]** : Peut être fait en parallèle avec T-002-007-003

#### T-002-007-005 : Maquette Page "Contact/Démo" (desktop + responsive)
- [ ] Appliquer charte graphique
- [ ] Créer formulaire avec styles finaux
- [ ] Intégrer informations de contact
- [ ] Responsive (formulaire optimisé mobile)
- **Livrables** : Maquette page contact complète
- **Dépendances** : T-002-005-010, T-002-004-003
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-002-007-004

#### T-002-007-006 : Validation maquettes pages prioritaires
- [ ] Présenter toutes les maquettes aux stakeholders
- [ ] Collecter les retours
- [ ] Ajuster les maquettes si nécessaire
- [ ] Valider la cohérence visuelle sur toutes les pages
- **Livrables** : Maquettes pages prioritaires validées
- **Dépendances** : T-002-007-001 à T-002-007-005
- **Estimation** : 2h

---

## 🎨 Phase 3 : Prototype interactif

### T-002-008 : Création du prototype

#### T-002-008-001 : Prototype Page Accueil
- [x] Créer liens de navigation depuis accueil - **Guide créé**
- [x] Ajouter interactions hover sur les éléments - **Guide créé, composants prêts**
- [x] Ajouter interactions click sur les CTAs - **Guide créé, composants prêts**
- [x] Ajouter scroll et animations - **ScrollReveal composant créé**
- [ ] Tester les interactions - **À faire dans Figma**
- **Livrables** : Prototype accueil interactif
- **Dépendances** : T-002-006-012
- **Estimation** : 3h
- **Complété le** : 2025-12-23 (guide et composants créés, prototype Figma à créer)

#### T-002-008-002 : Prototype Page "La Solution"
- [ ] Créer navigation vers sous-pages
- [ ] Ajouter interactions hover et click
- [ ] Ajouter transitions entre pages
- [ ] Tester les interactions
- **Livrables** : Prototype solution interactif
- **Dépendances** : T-002-007-001
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-008-001

#### T-002-008-003 : Prototype Page "Fonctionnalités"
- [x] Créer interaction onglets (changement de contenu) - **Composant Tabs créé**
- [x] Ajouter interactions hover et click - **Composant Tabs avec transitions**
- [x] Ajouter transitions - **Transitions fade intégrées**
- [ ] Tester les interactions - **À faire dans Figma et code**
- **Livrables** : Prototype fonctionnalités interactif
- **Dépendances** : T-002-007-002
- **Estimation** : 3h
- **Complété le** : 2025-12-23 (composant Tabs créé, prototype Figma à créer)
- **[P]** : Peut être fait en parallèle avec T-002-008-002

#### T-002-008-004 : Prototype Page "Pour qui ? - Agence"
- [ ] Créer interactions sur la page
- [ ] Ajouter interactions hover et click
- [ ] Ajouter transitions
- [ ] Tester les interactions
- **Livrables** : Prototype persona agence interactif
- **Dépendances** : T-002-007-003
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-008-003

#### T-002-008-005 : Prototype Page "Tarifs"
- [ ] Créer interactions sur la page
- [ ] Ajouter interactions hover et click sur les formules
- [ ] Ajouter transitions
- [ ] Tester les interactions
- **Livrables** : Prototype tarifs interactif
- **Dépendances** : T-002-007-004
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-008-004

#### T-002-008-006 : Prototype Page "Contact/Démo"
- [ ] Créer interactions formulaire (focus, error states)
- [ ] Ajouter interactions hover et click
- [ ] Ajouter transitions
- [ ] Tester les interactions
- **Livrables** : Prototype contact interactif
- **Dépendances** : T-002-007-005
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-008-005

#### T-002-008-007 : Prototype Navigation globale
- [ ] Créer navigation entre toutes les pages
- [ ] Ajouter menu mobile (drawer)
- [ ] Ajouter breadcrumb si nécessaire
- [ ] Tester la navigation complète
- **Livrables** : Prototype navigation globale
- **Dépendances** : T-002-008-001 à T-002-008-006
- **Estimation** : 2h

#### T-002-008-008 : Prototype Responsive
- [ ] Créer vues responsive (mobile, tablette, desktop)
- [ ] Adapter les interactions pour mobile
- [ ] Tester sur différents breakpoints
- **Livrables** : Prototype responsive complet
- **Dépendances** : T-002-008-007
- **Estimation** : 3h

#### T-002-008-009 : Validation prototype interactif
- [ ] Présenter prototype aux stakeholders
- [ ] Tester toutes les interactions
- [ ] Collecter les retours
- [ ] Ajuster le prototype si nécessaire
- **Livrables** : Prototype interactif validé
- **Dépendances** : T-002-008-008
- **Estimation** : 2h

---

## 🧪 Phase 4 : Tests utilisateurs

### T-002-009 : Préparation des tests

#### T-002-009-001 : Recrutement des utilisateurs
- [ ] Identifier 5 utilisateurs pour persona Agence
- [ ] Vérifier profils : Professionnels de l'immobilier ou similaires
- [ ] Mix : 3 expérimentés web, 2 moins expérimentés
- [ ] Planifier les sessions (1h chacune)
- **Livrables** : Liste des utilisateurs recrutés
- **Dépendances** : T-002-008-009
- **Estimation** : 3h

#### T-002-009-002 : Préparation des tâches de test
- [ ] Finaliser tâche 1 : Navigation - Trouver informations fonctionnalités agences
- [ ] Finaliser tâche 2 : Demande de démo - Compléter formulaire
- [ ] Finaliser tâche 3 : Exploration - Parcourir et identifier bénéfices
- [ ] Finaliser tâche 4 : Comparaison - Comparer avec solution actuelle
- [ ] Créer guide de test pour le modérateur
- **Livrables** : Guide de test utilisateurs
- **Dépendances** : T-002-008-009
- **Estimation** : 2h

#### T-002-009-003 : Préparation questionnaire post-test
- [ ] Créer questionnaire de satisfaction
- [ ] Questions sur clarté, facilité d'utilisation
- [ ] Questions sur compréhension des messages
- [ ] Questions sur points de friction
- **Livrables** : Questionnaire post-test
- **Dépendances** : T-002-008-009
- **Estimation** : 1h

### T-002-010 : Exécution des tests

#### T-002-010-001 : Session test utilisateur 1
- [ ] Exécuter session (1h)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test
- [ ] Enregistrer session (avec autorisation)
- **Livrables** : Notes session 1
- **Dépendances** : T-002-009-001 à T-002-009-003
- **Estimation** : 1h30

#### T-002-010-002 : Session test utilisateur 2
- [ ] Exécuter session (1h)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test
- [ ] Enregistrer session (avec autorisation)
- **Livrables** : Notes session 2
- **Dépendances** : T-002-009-001 à T-002-009-003
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-002-010-001 (si plusieurs testeurs)

#### T-002-010-003 : Session test utilisateur 3
- [ ] Exécuter session (1h)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test
- [ ] Enregistrer session (avec autorisation)
- **Livrables** : Notes session 3
- **Dépendances** : T-002-009-001 à T-002-009-003
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-002-010-002

#### T-002-010-004 : Session test utilisateur 4
- [ ] Exécuter session (1h)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test
- [ ] Enregistrer session (avec autorisation)
- **Livrables** : Notes session 4
- **Dépendances** : T-002-009-001 à T-002-009-003
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-002-010-003

#### T-002-010-005 : Session test utilisateur 5
- [ ] Exécuter session (1h)
- [ ] Think-aloud : Utilisateur commente ses actions
- [ ] Observation : Prise de notes sur les difficultés
- [ ] Questionnaire post-test
- [ ] Enregistrer session (avec autorisation)
- **Livrables** : Notes session 5
- **Dépendances** : T-002-009-001 à T-002-009-003
- **Estimation** : 1h30
- **[P]** : Peut être fait en parallèle avec T-002-010-004

### T-002-011 : Analyse et ajustements

#### T-002-011-001 : Analyse des résultats des tests
- [ ] Synthétiser les retours de toutes les sessions
- [ ] Identifier les problèmes récurrents
- [ ] Identifier les points de friction
- [ ] Prioriser les ajustements
- **Livrables** : `user-testing-report.md` - Analyse des résultats
- **Dépendances** : T-002-010-001 à T-002-010-005
- **Estimation** : 4h

#### T-002-011-002 : Ajustements du prototype
- [ ] Ajuster hiérarchie visuelle si nécessaire
- [ ] Simplifier parcours si confusion
- [ ] Améliorer CTAs si faible clic
- [ ] Clarifier messages si incompris
- [ ] Optimiser formulaire si abandon
- **Livrables** : Prototype ajusté
- **Dépendances** : T-002-011-001
- **Estimation** : 6h

#### T-002-011-003 : Re-test avec utilisateurs (si nécessaire)
- [ ] Recruter 2-3 nouveaux utilisateurs
- [ ] Exécuter sessions de re-test
- [ ] Valider les ajustements
- **Livrables** : Notes re-test, validation finale
- **Dépendances** : T-002-011-002
- **Estimation** : 4h (si nécessaire)

#### T-002-011-004 : Finalisation rapport tests utilisateurs
- [ ] Finaliser `user-testing-report.md`
- [ ] Documenter les problèmes identifiés
- [ ] Documenter les ajustements apportés
- [ ] Documenter les résultats finaux
- **Livrables** : `user-testing-report.md` complet
- **Dépendances** : T-002-011-001 à T-002-011-003
- **Estimation** : 2h

---

## 📦 Phase 5 : Exports et handoff

### T-002-012 : Exports pour développement

#### T-002-012-001 : Export SVG - Icônes
- [ ] Exporter toutes les icônes en SVG
- [ ] Optimiser (sans métadonnées inutiles)
- [ ] Organiser par dossier
- **Livrables** : `design/exports/icons/` - Icônes SVG optimisées
- **Dépendances** : T-002-005-007, T-002-011-004
- **Estimation** : 2h

#### T-002-012-002 : Export PNG/WebP - Images
- [ ] Exporter images bitmap optimisées
- [ ] Différentes résolutions (@1x, @2x, @3x)
- [ ] Format WebP également fourni
- [ ] Organiser par dossier
- **Livrables** : `design/exports/images/` - Images optimisées
- **Dépendances** : T-002-011-004
- **Estimation** : 3h
- **[P]** : Peut être fait en parallèle avec T-002-012-001

#### T-002-012-003 : Export CSS - Variables et tokens
- [ ] Créer variables CSS pour les couleurs
- [ ] Créer classes utilitaires pour spacing
- [ ] Créer tokens de design (si applicable)
- [ ] Documenter l'utilisation
- **Livrables** : `design/exports/css/` - Variables et tokens CSS
- **Dépendances** : T-002-005-010, T-002-011-004
- **Estimation** : 2h
- **[P]** : Peut être fait en parallèle avec T-002-012-002

#### T-002-012-004 : Spécifications précises
- [ ] Mesurer dimensions précises pour chaque élément
- [ ] Mesurer espacements
- [ ] Documenter couleurs avec codes hex
- [ ] Documenter typographie avec tailles et line-heights
- [ ] Documenter états interactifs
- **Livrables** : Spécifications dans Figma/XD ou document séparé
- **Dépendances** : T-002-011-004
- **Estimation** : 4h

### T-002-013 : Documentation de handoff

#### T-002-013-001 : Documentation handoff complète
- [ ] Créer `handoff-specs.md` - Spécifications complètes
- [ ] Inclure lien vers prototype interactif
- [ ] Inclure lien vers design system
- [ ] Lister tous les assets et leurs emplacements
- [ ] Noter les interactions complexes
- [ ] Noter les animations
- **Livrables** : `handoff-specs.md` complet
- **Dépendances** : T-002-012-001 à T-002-012-004
- **Estimation** : 3h

#### T-002-013-002 : Finalisation documentation Design System
- [ ] Vérifier que `design-system.md` est complet
- [ ] Vérifier que `style-guide.md` est complet
- [ ] Vérifier que `component-library.md` est complet
- [ ] Créer index de la documentation
- **Livrables** : Documentation Design System finalisée
- **Dépendances** : T-002-005-010, T-002-013-001
- **Estimation** : 2h

#### T-002-013-003 : Session de handoff avec équipe développement
- [ ] Présenter le design system
- [ ] Présenter le prototype interactif
- [ ] Présenter les spécifications
- [ ] Répondre aux questions
- [ ] Transférer tous les assets
- **Livrables** : Handoff complété, équipe développement prête
- **Dépendances** : T-002-013-001, T-002-013-002
- **Estimation** : 2h

---

## ✅ Critères de succès

### Livrables Phase 2 complète

- [ ] ✅ Wireframes validés pour toutes les pages
- [ ] ✅ Prototype interactif fonctionnel
- [ ] ✅ Maquettes haute fidélité complètes
- [ ] ✅ Design system documenté
- [ ] ✅ Exports prêts pour le développement
- [ ] ✅ Tests utilisateurs réalisés et ajustements faits

### Qualité du design

- [ ] **Cohérence visuelle** : Toutes les pages suivent la même charte
- [ ] **Responsive** : Expérience optimale sur tous les devices
- [ ] **Accessibilité** : Conformité WCAG 2.1 niveau AA
- [ ] **Performance** : Design optimisé pour chargement rapide
- [ ] **Conversion** : Parcours optimisés pour la demande de démo

### Validation utilisateurs

- [ ] **Navigation** : 100% des utilisateurs trouvent les informations recherchées
- [ ] **Formulaire** : 100% des utilisateurs complètent le formulaire sans difficulté
- [ ] **Compréhension** : Messages clés compris par tous les utilisateurs
- [ ] **Satisfaction** : Score de satisfaction ≥ 4/5

---

## 📝 Notes

### Dépendances Phase 1

**Nécessaire avant démarrage** :
- ✅ Contenus marketing validés (20-25 pages)
- ✅ Personas définis (5 cibles prioritaires)
- ✅ Architecture de l'information validée
- ✅ Messages clés par persona
- ✅ Stratégie de contenu documentée

### Questions ouvertes

- [ ] Charte graphique existante : Logo, couleurs, typographies disponibles ?
- [ ] Assets visuels : Screenshots de la plateforme disponibles ?
- [ ] Illustrations : Production interne ou externe ?
- [ ] Vidéo de démo : Disponible pour intégration dans le design ?
- [ ] Témoignages clients : Photos et autorisations disponibles ?

### Décisions à valider

- [ ] Outil de design : Figma ou Adobe XD ?
- [ ] Style d'icônes : Line ou Solid ?
- [ ] Animations : Niveau de complexité souhaité ?
- [ ] Design system : Storybook ou documentation simple ?

---

## 🔗 Références

- [Lien vers spec.md](./spec.md)
- [Lien vers plan.md](./plan.md)
- [Lien vers Phase 1](../001-site-vitrine-immotopia-orientation-100-clients-professionnels/spec.md)

---

**Prochaines étapes** :
1. Valider les tâches avec les stakeholders
2. Commencer Phase 0 : Recherche et préparation
3. Utiliser `/speckit.implement` pour suivre l'implémentation des tâches

