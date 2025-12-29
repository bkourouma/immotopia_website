# Instructions pour copier la vidéo Hero

## Problème
La vidéo n'a pas été trouvée dans le dossier public, ce qui cause une erreur 404.

## Solution

### Option 1 : Utiliser le script batch (recommandé)
1. Exécutez le fichier `copy-video.bat` à la racine du projet
2. Vérifiez que le fichier source existe à : `D:\APP\Immobillier\assets\media\logiciel_gestion_immobilière.mp4`

### Option 2 : Copie manuelle
1. Copiez le fichier vidéo depuis :
   ```
   D:\APP\Immobillier\assets\media\logiciel_gestion_immobilière.mp4
   ```
   
2. Collez-le dans :
   ```
   apps/web/public/videos/logiciel_gestion_immobilière.mp4
   ```

### Option 3 : Si le fichier a un nom différent
Si votre fichier vidéo a un nom différent :
1. Trouvez votre fichier vidéo
2. Copiez-le dans `apps/web/public/videos/`
3. Renommez-le en `logiciel_gestion_immobilière.mp4`

## Vérification
Une fois le fichier copié, redémarrez le serveur de développement Next.js et rechargez la page. La vidéo devrait s'afficher automatiquement en arrière-plan de la section Hero.

## Note
Le composant Hero gère automatiquement l'absence de vidéo : si le fichier n'existe pas, un fond dégradé sera affiché à la place.

