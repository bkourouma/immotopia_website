# Instructions pour ajouter la vidéo Hero

## Problème 404

Si vous voyez une erreur 404 pour la vidéo, c'est parce que le fichier n'a pas encore été copié dans le dossier `public/videos/`.

## Solution 1 : Copier manuellement la vidéo

1. **Trouvez votre fichier vidéo** :
   - Chemin source : `D:\APP\Immobillier\assets\media\logiciel_gestion_immobilière.mp4`

2. **Copiez-le vers** :
   - Chemin destination : `apps/web/public/videos/logiciel_gestion_immobilière.mp4`

3. **Créez le dossier si nécessaire** :
   - Le dossier `apps/web/public/videos/` doit exister

## Solution 2 : Utiliser le script de copie

Exécutez le fichier `copy-video.bat` à la racine du projet.

## Solution 3 : Renommer sans caractères spéciaux (si problème d'encodage)

Si vous avez des problèmes avec le caractère "è", vous pouvez :

1. Renommer le fichier source en : `logiciel_gestion_immobiliere.mp4` (sans accent)
2. Mettre à jour le code dans `apps/web/src/components/sections/Hero.tsx` ligne 39 :
   ```tsx
   <source src="/videos/logiciel_gestion_immobiliere.mp4" type="video/mp4" />
   ```

## Note

Le composant Hero gère déjà l'absence de vidéo avec un fallback gracieux : si la vidéo ne charge pas, le gradient de fond sera affiché automatiquement. Vous ne verrez pas d'erreur dans l'interface, seulement dans la console du navigateur.

## Vérification

Après avoir copié le fichier, redémarrez le serveur de développement :
```bash
pnpm dev:web
```


