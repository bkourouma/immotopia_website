import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  AlertTriangle,
  Copy,
  Camera,
  Shield,
  Users,
  Home,
  ClipboardCheck,
  Lightbulb,
  XCircle,
  Zap,
  FileCheck
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/structured-data';
import CopyToClipboardButton from '@/components/ui/CopyToClipboardButton';

export const metadata: Metadata = generateSEOMetadata(
  {
    title: "Modèle d'état des lieux (entrée/sortie) en Côte d'Ivoire (gratuit) | ImmoTopia",
    description:
      "Modèle gratuit d'état des lieux (entrée & sortie) à copier, avec checklist pièce par pièce. Découvrez comment centraliser vos documents et incidents avec ImmoTopia.",
    canonicalUrl: '/modeles/etat-des-lieux-cote-divoire',
    keywords: [
      'modèle état des lieux Côte d\'Ivoire',
      'état des lieux entrée',
      'état des lieux sortie',
      'modèle état des lieux location',
      'état des lieux Abidjan',
      'checklist état des lieux',
      'état des lieux gratuit Côte d\'Ivoire',
      'modèle état des lieux meublé',
      'état des lieux logement',
      'état des lieux appartement',
    ],
  },
  '/modeles/etat-des-lieux-cote-divoire'
);

const faqItems = [
  {
    question: "L'état des lieux est-il obligatoire en Côte d'Ivoire ?",
    answer:
      "Bien que la réglementation puisse varier, il est fortement recommandé de réaliser un état des lieux d'entrée et de sortie. L'état des lieux protège à la fois le bailleur et le locataire en documentant l'état du logement au début et à la fin de la location. Il permet d'éviter les litiges concernant les dégradations et facilite la restitution du dépôt de garantie. Nous vous recommandons de consulter un professionnel du droit pour connaître les obligations légales en vigueur.",
  },
  {
    question: "Quelle est la différence entre l'état des lieux d'entrée et de sortie ?",
    answer:
      "L'état des lieux d'entrée est réalisé au moment de la remise des clés au locataire. Il documente l'état initial du logement et sert de référence. L'état des lieux de sortie est effectué à la fin du bail, lors de la restitution des clés. Il permet de comparer l'état du logement avec l'état initial et d'identifier les éventuelles dégradations imputables au locataire. Les deux documents doivent suivre la même structure pour faciliter la comparaison.",
  },
  {
    question: "Faut-il obligatoirement prendre des photos lors de l'état des lieux ?",
    answer:
      "Bien que non obligatoire dans tous les cas, la prise de photos horodatées est fortement recommandée. Les photos constituent une preuve visuelle de l'état du logement et peuvent être déterminantes en cas de litige. Prenez des photos générales de chaque pièce ainsi que des photos détaillées des anomalies, équipements et finitions. Assurez-vous que les photos soient datées et annexées à l'état des lieux signé par les deux parties.",
  },
  {
    question: "Comment décrire précisément une anomalie ou une dégradation ?",
    answer:
      "Évitez les descriptions vagues comme 'bon état' ou 'mauvais état'. Soyez précis et factuel : indiquez la nature exacte de l'anomalie (fissure, tache, rayure), sa localisation précise (mur nord, angle supérieur gauche), et ses dimensions approximatives si pertinent. Par exemple : 'Fissure verticale de 15 cm environ sur le mur nord du salon, à 1 mètre du plafond' ou 'Tache d'humidité circulaire de 20 cm de diamètre au plafond de la salle de bain, au-dessus de la douche'.",
  },
  {
    question: "Que faire en cas de désaccord sur l'état des lieux ?",
    answer:
      "En cas de désaccord entre le bailleur et le locataire, plusieurs options existent : vous pouvez faire appel à un tiers neutre (huissier de justice, expert immobilier) pour établir un constat contradictoire. Notez les points de désaccord directement sur l'état des lieux et faites-les signer par les deux parties. Conservez toutes les preuves (photos, échanges écrits). Si le désaccord persiste, consultez un professionnel du droit pour connaître vos recours.",
  },
  {
    question: "Comment archiver et retrouver facilement mes états des lieux ?",
    answer:
      "L'archivage manuel (papier ou fichiers dispersés) rend difficile la recherche et la comparaison entre l'entrée et la sortie. Un logiciel de gestion immobilière comme ImmoTopia permet de centraliser tous vos états des lieux, de les rattacher aux biens et contrats concernés, et de les retrouver instantanément. Vous pouvez également associer les photos, créer des tickets de maintenance à partir des anomalies détectées, et disposer d'un historique complet pour chaque logement.",
  },
  {
    question: "Comment ImmoTopia simplifie-t-il la gestion des états des lieux ?",
    answer:
      "ImmoTopia centralise tous vos états des lieux (entrée et sortie) dans un ERP immobilier complet. Chaque état des lieux est rattaché à un bien, un contrat et un locataire. Vous pouvez uploader les photos directement dans le dossier, créer automatiquement un ticket de maintenance à partir d'une anomalie détectée, et comparer facilement l'état d'entrée et de sortie. L'historique complet de chaque bien est accessible en un clic, ce qui facilite la gestion des dépôts de garantie et réduit les litiges.",
  },
  {
    question: "Ce modèle d'état des lieux est-il conforme à la législation ivoirienne ?",
    answer:
      "Ce modèle est fourni à titre indicatif et doit être adapté à votre situation spécifique. Nous ne fournissons pas de conseil juridique. Pour garantir la conformité de votre état des lieux avec les pratiques et la législation en vigueur en Côte d'Ivoire, nous vous recommandons de le faire valider par un professionnel du droit ou de l'immobilier. Les exigences peuvent varier selon le type de bien et le contexte.",
  },
];

export default function EtatDesLieuxPage() {
  const faqSchema = generateFAQSchema({ 
    questions: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  });

  // Modèle d'état des lieux complet
  const etatDesLieuxModele = `ÉTAT DES LIEUX D'ENTRÉE / SORTIE
(Cocher la case appropriée : ☐ Entrée  ☐ Sortie)

═══════════════════════════════════════════════════════════════
1. INFORMATIONS GÉNÉRALES
═══════════════════════════════════════════════════════════════

Date de l'état des lieux : [JJ/MM/AAAA]
Heure de début : [HH:MM]
Heure de fin : [HH:MM]

BAILLEUR (Propriétaire)
Nom et Prénom(s) : _______________________________________________
Adresse : ________________________________________________________
Téléphone : ______________________________________________________
Email : __________________________________________________________

LOCATAIRE
Nom et Prénom(s) : _______________________________________________
Adresse actuelle : _______________________________________________
Téléphone : ______________________________________________________
Email : __________________________________________________________

BIEN CONCERNÉ
Adresse complète : _______________________________________________
Type de bien : ☐ Appartement  ☐ Villa  ☐ Studio  ☐ Chambre  ☐ Autre : _______
Nombre de pièces : _______________________________________________
Surface approximative : __________________________________________
Étage (si applicable) : __________________________________________
☐ Logement vide  ☐ Logement meublé

═══════════════════════════════════════════════════════════════
2. RELEVÉS DES COMPTEURS
═══════════════════════════════════════════════════════════════

ÉLECTRICITÉ
Numéro de compteur : _____________________________________________
Index au [DATE] : ________________________________________________
Observations : ___________________________________________________

EAU
Numéro de compteur : _____________________________________________
Index au [DATE] : ________________________________________________
Observations : ___________________________________________________

GAZ (si applicable)
Numéro de compteur : _____________________________________________
Index au [DATE] : ________________________________________________
Observations : ___________________________________________________

═══════════════════════════════════════════════════════════════
3. REMISE DES CLÉS
═══════════════════════════════════════════════════════════════

Nombre de clés remises :
- Porte d'entrée principale : ____________________________________
- Portail / Grille : _____________________________________________
- Autres (préciser) : ____________________________________________

Badges / Télécommandes :
- Portail automatique : __________________________________________
- Autres : _______________________________________________________

═══════════════════════════════════════════════════════════════
4. DESCRIPTION DÉTAILLÉE PIÈCE PAR PIÈCE
═══════════════════════════════════════════════════════════════

Instructions :
- Décrire l'état de chaque élément de manière précise et factuelle
- Éviter les termes vagues ("bon état", "mauvais état")
- Indiquer la nature, la localisation et les dimensions des anomalies
- Cocher ☐ si conforme, ☒ si anomalie détectée

─────────────────────────────────────────────────────────────────
PIÈCE 1 : SALON / SÉJOUR
─────────────────────────────────────────────────────────────────

SOLS
☐ Carrelage  ☐ Parquet  ☐ Béton ciré  ☐ Autre : _______________
État : ___________________________________________________________
Anomalies (fissures, éclats, taches) : __________________________
____________________________________________________________________

MURS
Revêtement : ☐ Peinture  ☐ Papier peint  ☐ Enduit  ☐ Autre : ___
Couleur : ________________________________________________________
État : ___________________________________________________________
Anomalies (fissures, taches, décollements) : ____________________
____________________________________________________________________

PLAFOND
Revêtement : _____________________________________________________
État : ___________________________________________________________
Anomalies (fissures, taches d'humidité, moisissures) : __________
____________________________________________________________________

PORTES ET FENÊTRES
Nombre de portes : _______________________________________________
État des portes (poignées, serrures, gonds) : ___________________
____________________________________________________________________
Nombre de fenêtres : _____________________________________________
Type : ☐ Battantes  ☐ Coulissantes  ☐ Fixes
État des fenêtres (vitres, poignées, joints) : __________________
____________________________________________________________________
Volets / Rideaux : _______________________________________________

ÉLECTRICITÉ
Nombre de prises : _______________________________________________
État des prises : ________________________________________________
Nombre d'interrupteurs : _________________________________________
État des interrupteurs : _________________________________________
Points lumineux (plafonniers, appliques) : ______________________
____________________________________________________________________

OBSERVATIONS GÉNÉRALES (SALON)
____________________________________________________________________
____________________________________________________________________
____________________________________________________________________

─────────────────────────────────────────────────────────────────
PIÈCE 2 : CUISINE
─────────────────────────────────────────────────────────────────

SOLS
Type : ___________________________________________________________
État : ___________________________________________________________
Anomalies : ______________________________________________________

MURS
Revêtement : _____________________________________________________
État : ___________________________________________________________
Anomalies : ______________________________________________________

PLAFOND
État : ___________________________________________________________
Anomalies : ______________________________________________________

PLOMBERIE
Évier : ☐ Simple  ☐ Double
État de l'évier : ________________________________________________
Robinetterie : ___________________________________________________
Évacuation : _____________________________________________________

ÉLECTRICITÉ
Prises : _________________________________________________________
Interrupteurs : __________________________________________________
Éclairage : ______________________________________________________

ÉQUIPEMENTS (si logement meublé)
☐ Cuisinière / Gazinière - État : _______________________________
☐ Réfrigérateur - État : _________________________________________
☐ Four - État : ___________________________________________________
☐ Hotte - État : __________________________________________________
☐ Placards / Rangements - État : _________________________________
☐ Autre : ________________________________________________________

OBSERVATIONS GÉNÉRALES (CUISINE)
____________________________________________________________________
____________________________________________________________________

─────────────────────────────────────────────────────────────────
PIÈCE 3 : SALLE DE BAIN / DOUCHE
─────────────────────────────────────────────────────────────────

SOLS
Type : ___________________________________________________________
État : ___________________________________________________________
Anomalies : ______________________________________________________

MURS
Revêtement : ☐ Carrelage  ☐ Peinture  ☐ Autre : ________________
État : ___________________________________________________________
Anomalies (moisissures, décollements) : __________________________

PLAFOND
État : ___________________________________________________________
Anomalies (humidité, moisissures) : ______________________________

SANITAIRES
☐ Douche - État (bac, paroi, robinetterie) : ____________________
____________________________________________________________________
☐ Baignoire - État : _____________________________________________
☐ Lavabo - État : ________________________________________________
Robinetterie : ___________________________________________________
Miroir : _________________________________________________________

VENTILATION
☐ VMC  ☐ Fenêtre  ☐ Aération naturelle
État : ___________________________________________________________

OBSERVATIONS GÉNÉRALES (SALLE DE BAIN)
____________________________________________________________________
____________________________________________________________________

─────────────────────────────────────────────────────────────────
PIÈCE 4 : WC / TOILETTES
─────────────────────────────────────────────────────────────────

SOLS
Type : ___________________________________________________________
État : ___________________________________________________________

MURS
État : ___________________________________________________________
Anomalies : ______________________________________________________

SANITAIRES
Cuvette WC : _____________________________________________________
Chasse d'eau : ___________________________________________________
Abattant : _______________________________________________________
Lave-mains (si présent) : ________________________________________

OBSERVATIONS GÉNÉRALES (WC)
____________________________________________________________________

─────────────────────────────────────────────────────────────────
PIÈCE 5 : CHAMBRE 1
─────────────────────────────────────────────────────────────────

SOLS
Type : ___________________________________________________________
État : ___________________________________________________________

MURS
Couleur : ________________________________________________________
État : ___________________________________________________________
Anomalies : ______________________________________________________

PLAFOND
État : ___________________________________________________________

PORTES ET FENÊTRES
Porte : __________________________________________________________
Fenêtre(s) : _____________________________________________________
Volets / Rideaux : _______________________________________________

ÉLECTRICITÉ
Prises : _________________________________________________________
Interrupteurs : __________________________________________________
Éclairage : ______________________________________________________

ÉQUIPEMENTS (si meublé)
☐ Lit - État : ___________________________________________________
☐ Armoire / Placard - État : _____________________________________
☐ Autre : ________________________________________________________

OBSERVATIONS GÉNÉRALES (CHAMBRE 1)
____________________________________________________________________

─────────────────────────────────────────────────────────────────
PIÈCE 6 : CHAMBRE 2 (si applicable)
─────────────────────────────────────────────────────────────────

[Répéter la même structure que Chambre 1]

─────────────────────────────────────────────────────────────────
PIÈCE 7 : CHAMBRE 3 (si applicable)
─────────────────────────────────────────────────────────────────

[Répéter la même structure que Chambre 1]

─────────────────────────────────────────────────────────────────
ESPACES EXTÉRIEURS (si applicable)
─────────────────────────────────────────────────────────────────

BALCON / TERRASSE
Surface : ________________________________________________________
Revêtement sol : _________________________________________________
État : ___________________________________________________________
Garde-corps : ____________________________________________________

COUR / JARDIN
Surface : ________________________________________________________
État : ___________________________________________________________
Portail / Clôture : ______________________________________________

PARKING / GARAGE
☐ Place de parking n° : __________________________________________
☐ Garage - État : ________________________________________________

OBSERVATIONS GÉNÉRALES (EXTÉRIEURS)
____________________________________________________________________

═══════════════════════════════════════════════════════════════
5. TRAVAUX / RÉPARATIONS À PRÉVOIR
═══════════════════════════════════════════════════════════════

Liste des travaux identifiés :
____________________________________________________________________
____________________________________________________________________
____________________________________________________________________
____________________________________________________________________

Responsabilité : ☐ Bailleur  ☐ Locataire  ☐ À déterminer
Délai prévu : ____________________________________________________

═══════════════════════════════════════════════════════════════
6. OBSERVATIONS COMPLÉMENTAIRES
═══════════════════════════════════════════════════════════════

Remarques du bailleur :
____________________________________________________________________
____________________________________________________________________
____________________________________________________________________

Remarques du locataire :
____________________________________________________________________
____________________________________________________________________
____________________________________________________________________

═══════════════════════════════════════════════════════════════
7. ANNEXES
═══════════════════════════════════════════════════════════════

☐ Photos horodatées jointes (nombre : ______)
☐ Inventaire du mobilier (si logement meublé)
☐ Notice d'utilisation des équipements
☐ Autre : ________________________________________________________

═══════════════════════════════════════════════════════════════
8. SIGNATURES
═══════════════════════════════════════════════════════════════

Fait à [VILLE], le [DATE]

Nous, soussignés, certifions avoir établi le présent état des lieux
de manière contradictoire et en avoir reçu chacun un exemplaire.

Le Bailleur                                Le Locataire
(Signature et mention "Lu et approuvé")    (Signature et mention "Lu et approuvé")


[NOM DU BAILLEUR]                          [NOM DU LOCATAIRE]


Tiers présent (si applicable) :
Nom : ____________________________________________________________
Qualité : ________________________________________________________
Signature : ______________________________________________________`;

  return (
    <>
      <StructuredData data={faqSchema} />
      <article className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <FileText className="h-4 w-4" />
                Modèle gratuit à copier
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Modèle d'état des lieux (entrée/sortie) en Côte d'Ivoire
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
                Checklist complète et modèle gratuit d'état des lieux, prêt à copier pour vos locations
              </p>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
                Téléchargez ce modèle d'état des lieux détaillé (entrée & sortie) avec checklist pièce par pièce. Découvrez comment ImmoTopia centralise vos documents, photos et incidents pour réduire les litiges.
              </p>

              {/* CTAs Hero */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  <a href="#modele-etat-lieux" className="flex items-center font-bold">
                    Copier le modèle
                    <Copy className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
                >
                  <Link href="/contact?demo=true" className="flex items-center font-semibold">
                    Centraliser ma gestion locative (démo)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avertissement Important */}
        <section className="border-b-4 border-amber-400 bg-amber-50 py-8">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 flex-shrink-0 text-amber-600" />
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  ⚠️ Avertissement important
                </h2>
                <p className="mb-3 text-gray-800 leading-relaxed">
                  Ce modèle d'état des lieux est fourni <strong>à titre indicatif</strong> et doit être adapté à votre situation spécifique. Nous ne fournissons pas de conseil juridique.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Pour garantir la conformité avec les pratiques et la législation en vigueur en Côte d'Ivoire, nous vous recommandons de <strong>faire valider ce modèle par un professionnel</strong> (avocat, notaire, expert immobilier) avant utilisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Pourquoi l'état des lieux est important */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi l'état des lieux est-il important ?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                L'état des lieux est un document essentiel qui protège à la fois le propriétaire (bailleur) et le locataire. Il constitue une preuve objective de l'état du logement à un instant donné et permet d'éviter les litiges lors de la restitution du bien.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <Shield className="mb-4 h-8 w-8 text-blue-600" />
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Preuve de l'état initial
                  </h3>
                  <p className="text-gray-700">
                    L'état des lieux d'entrée documente précisément l'état du logement au moment de la remise des clés. Il sert de référence pour toute la durée du bail.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-green-600" />
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Réduit les litiges
                  </h3>
                  <p className="text-gray-700">
                    En comparant l'état d'entrée et de sortie, vous identifiez objectivement les dégradations imputables au locataire, ce qui facilite les discussions.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
                  <FileCheck className="mb-4 h-8 w-8 text-purple-600" />
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Facilite la restitution
                  </h3>
                  <p className="text-gray-700">
                    L'état des lieux sert de base pour déterminer les retenues éventuelles sur le dépôt de garantie de manière transparente et justifiée.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-gray-400">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                  Conseil pratique
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Réalisez l'état des lieux en présence des deux parties (bailleur et locataire) et prenez le temps nécessaire pour inspecter chaque pièce. N'hésitez pas à être très précis dans vos descriptions : cela vous protégera en cas de désaccord ultérieur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Quand faire l'état des lieux */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              Quand faire l'état des lieux ?
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <Home className="h-8 w-8 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      État des lieux d'entrée
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      L'état des lieux d'entrée doit être réalisé <strong>au moment de la remise des clés</strong> au locataire, avant qu'il n'emménage. C'est le document de référence qui servira de base de comparaison à la sortie.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Effectuez-le en présence du bailleur et du locataire</li>
                      <li>Prenez le temps d'inspecter chaque pièce méthodiquement</li>
                      <li>Relevez les compteurs (eau, électricité, gaz)</li>
                      <li>Notez le nombre de clés remises</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-8 w-8 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      État des lieux de sortie
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      L'état des lieux de sortie est effectué <strong>à la fin du bail</strong>, lors de la restitution des clés par le locataire. Il permet de comparer l'état actuel du logement avec l'état initial.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Utilisez le même modèle que pour l'entrée (facilite la comparaison)</li>
                      <li>Relevez à nouveau les compteurs</li>
                      <li>Identifiez les dégradations éventuelles</li>
                      <li>Récupérez toutes les clés remises à l'entrée</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <Camera className="h-8 w-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Photos horodatées (fortement recommandé)
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Prenez des <strong>photos horodatées</strong> lors de l'état des lieux d'entrée et de sortie. Les photos constituent une preuve visuelle précieuse en cas de litige.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Photos générales de chaque pièce (vue d'ensemble)</li>
                      <li>Photos détaillées des anomalies, équipements et finitions</li>
                      <li>Photos des compteurs avec les index visibles</li>
                      <li>Annexez les photos à l'état des lieux signé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Checklist avant de commencer */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ✅ Checklist avant de commencer l'état des lieux
            </h2>

            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Avant de remplir l'état des lieux, assurez-vous d'avoir préparé les éléments suivants pour un constat complet et sans oubli :
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Relevés des compteurs</h3>
                  <p className="text-sm text-gray-700">Notez les index d'eau, électricité et gaz (si applicable)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Photos horodatées</h3>
                  <p className="text-sm text-gray-700">Appareil photo ou smartphone avec date/heure activées</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Inventaire du mobilier</h3>
                  <p className="text-sm text-gray-700">Si logement meublé : liste complète des meubles et équipements</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Signatures des parties</h3>
                  <p className="text-sm text-gray-700">Présence du bailleur et du locataire (ou leurs représentants)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Date, heure et lieu</h3>
                  <p className="text-sm text-gray-700">Précisez le jour, l'heure de début/fin et l'adresse du bien</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Clés remises/reprises</h3>
                  <p className="text-sm text-gray-700">Comptez et notez le nombre exact de clés, badges, télécommandes</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-yellow-50 p-6 border-l-4 border-yellow-500">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Astuce : soyez précis et factuel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Évitez les descriptions vagues comme "bon état" ou "mauvais état". Préférez des descriptions factuelles et précises : "Fissure verticale de 15 cm sur le mur nord du salon" ou "Tache d'humidité circulaire de 20 cm de diamètre au plafond de la salle de bain". Cette précision vous protégera en cas de litige.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Modèle d'état des lieux */}
        <section id="modele-etat-lieux" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                ✅ Modèle d'état des lieux à copier-coller
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Modèle complet et structuré, prêt à être copié et personnalisé selon votre situation. Couvre toutes les pièces et tous les éléments à vérifier.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 md:p-8 shadow-xl border-2 border-blue-200">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Modèle complet d'état des lieux
                  </h3>
                </div>
                <CopyToClipboardButton
                  text={etatDesLieuxModele}
                  label="Copier le modèle"
                />
              </div>

              <div className="rounded-lg bg-gray-50 p-6 border border-gray-200 max-h-[600px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                  {etatDesLieuxModele}
                </pre>
              </div>

              <div className="mt-6 flex justify-center">
                <CopyToClipboardButton
                  text={etatDesLieuxModele}
                  label="Copier le modèle"
                />
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-blue-50 p-6 border-l-4 border-blue-500">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Comment utiliser ce modèle ?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Copiez le modèle ci-dessus en cliquant sur le bouton "Copier le modèle"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Collez-le dans un document Word, Google Docs ou un éditeur de texte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Remplissez les champs entre crochets [XXX] avec vos informations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Cochez les cases ☐ appropriées et complétez les descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">5.</span>
                  <span>Imprimez en 2 exemplaires et faites signer par les deux parties</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Variante logement meublé */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              📦 Variante pour logement meublé
            </h2>

            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Si vous louez un logement meublé, vous devez ajouter un <strong>inventaire détaillé du mobilier et des équipements</strong> en annexe de l'état des lieux. Cet inventaire doit lister tous les meubles, électroménagers et équipements mis à disposition du locataire.
            </p>

            <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-purple-500">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Éléments à inclure dans l'inventaire :
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mobilier</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Lits (type, dimensions, état)</li>
                    <li>Armoires / Placards</li>
                    <li>Tables et chaises</li>
                    <li>Canapés / Fauteuils</li>
                    <li>Bureaux / Étagères</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Électroménager</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Réfrigérateur (marque, modèle)</li>
                    <li>Cuisinière / Gazinière</li>
                    <li>Four / Micro-ondes</li>
                    <li>Lave-linge</li>
                    <li>Climatiseurs / Ventilateurs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vaisselle & Ustensiles</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Assiettes, verres, couverts (quantité)</li>
                    <li>Casseroles, poêles</li>
                    <li>Ustensiles de cuisine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Linge & Décoration</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Rideaux / Voilages</li>
                    <li>Tapis / Paillassons</li>
                    <li>Luminaires</li>
                    <li>Miroirs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-yellow-50 p-6 border-l-4 border-yellow-500">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Important
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pour chaque élément de l'inventaire, précisez l'état (neuf, bon état, usure normale, défaut visible) et prenez des photos. Cet inventaire doit être signé par les deux parties et annexé à l'état des lieux.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Exemple rempli */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              📝 Exemple d'état des lieux rempli (fictif)
            </h2>

            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Voici un exemple concret d'état des lieux pour un appartement 2 pièces à Abidjan. Cet exemple vous montre comment décrire précisément l'état du logement et les anomalies éventuelles.
            </p>

            <div className="rounded-lg bg-white p-6 shadow-md border-2 border-blue-200">
              <div className="mb-4 pb-4 border-b-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ÉTAT DES LIEUX D'ENTRÉE ☒</h3>
                <p className="text-sm text-gray-600">Date : 15 janvier 2026 | Heure : 10h00 - 11h30</p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Informations générales</h4>
                  <p className="text-gray-700"><strong>Bailleur :</strong> M. KOUASSI Jean-Pierre</p>
                  <p className="text-gray-700"><strong>Locataire :</strong> Mme DIALLO Aminata</p>
                  <p className="text-gray-700"><strong>Bien :</strong> Appartement 2 pièces, Cocody Riviera Palmeraie, Abidjan</p>
                  <p className="text-gray-700"><strong>Type :</strong> Logement vide</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relevés des compteurs</h4>
                  <p className="text-gray-700"><strong>Électricité :</strong> Index 12 458 kWh</p>
                  <p className="text-gray-700"><strong>Eau :</strong> Index 3 247 m³</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clés remises</h4>
                  <p className="text-gray-700">2 clés porte d'entrée, 1 clé portail, 1 télécommande portail automatique</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Description détaillée</h4>

                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">SALON</h5>
                    <p className="text-gray-700 mb-1"><strong>Sols :</strong> Carrelage beige 60x60 cm, état général bon. Éclat de 3 cm sur un carreau près de la porte d'entrée (angle inférieur droit).</p>
                    <p className="text-gray-700 mb-1"><strong>Murs :</strong> Peinture blanche. Mur nord : légère fissure horizontale de 20 cm environ à 1,5 m du sol. Mur est : propre, sans anomalie.</p>
                    <p className="text-gray-700 mb-1"><strong>Plafond :</strong> Peinture blanche, propre, sans fissure ni tache.</p>
                    <p className="text-gray-700 mb-1"><strong>Fenêtres :</strong> 2 fenêtres coulissantes aluminium avec vitres simples. Vitres propres, poignées fonctionnelles. Volets roulants manuels en bon état.</p>
                    <p className="text-gray-700"><strong>Électricité :</strong> 4 prises murales fonctionnelles, 2 interrupteurs fonctionnels, 1 plafonnier LED.</p>
                  </div>

                  <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">CUISINE</h5>
                    <p className="text-gray-700 mb-1"><strong>Sols :</strong> Carrelage gris antidérapant, propre, sans anomalie.</p>
                    <p className="text-gray-700 mb-1"><strong>Murs :</strong> Carrelage blanc jusqu'à 1,5 m de hauteur, peinture blanche au-dessus. Propre, sans fissure.</p>
                    <p className="text-gray-700 mb-1"><strong>Évier :</strong> Évier inox double bac, bon état. Robinetterie mitigeur chromé, fonctionne correctement.</p>
                    <p className="text-gray-700 mb-1"><strong>Placards :</strong> 3 placards muraux en bois, portes fonctionnelles, intérieur propre.</p>
                    <p className="text-gray-700"><strong>Électricité :</strong> 3 prises, 1 interrupteur, 1 néon plafonnier, tout fonctionnel.</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">SALLE DE BAIN</h5>
                    <p className="text-gray-700 mb-1"><strong>Sols :</strong> Carrelage gris antidérapant, propre.</p>
                    <p className="text-gray-700 mb-1"><strong>Murs :</strong> Carrelage blanc, propre. Petite tache d'humidité circulaire de 10 cm de diamètre au plafond au-dessus de la douche.</p>
                    <p className="text-gray-700 mb-1"><strong>Douche :</strong> Bac à douche en céramique blanche, bon état. Robinetterie mitigeur, fonctionne. Paroi vitrée fixe, propre.</p>
                    <p className="text-gray-700 mb-1"><strong>Lavabo :</strong> Lavabo suspendu blanc, bon état. Robinet mitigeur fonctionnel.</p>
                    <p className="text-gray-700"><strong>WC :</strong> Cuvette WC blanche, chasse d'eau fonctionnelle, abattant présent et en bon état.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Travaux à prévoir</h4>
                  <p className="text-gray-700">Aucun travail urgent. La tache d'humidité au plafond de la salle de bain sera surveillée.</p>
                </div>

                <div className="pt-4 border-t-2 border-gray-300">
                  <p className="text-gray-700 italic">Signatures : Bailleur et Locataire ont signé le 15/01/2026</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-blue-50 p-6 border-l-4 border-blue-500">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Ce qu'on retient de cet exemple
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Descriptions précises et factuelles (dimensions, localisation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Anomalies clairement identifiées (fissure, tache d'humidité, éclat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Relevés de compteurs et nombre de clés notés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Date, heure et signatures des deux parties</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Erreurs fréquentes */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ❌ Erreurs fréquentes à éviter
            </h2>

            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Voici les erreurs les plus courantes lors de la réalisation d'un état des lieux, et comment les éviter pour protéger vos intérêts.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Descriptions trop vagues
                    </h3>
                    <p className="mb-3 text-gray-700">
                      <strong className="text-red-600">❌ À éviter :</strong> "Murs en bon état", "Sol correct", "Quelques traces"
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-green-600">✅ À faire :</strong> "Mur nord du salon : fissure verticale de 15 cm à 1 m du plafond", "Sol cuisine : carrelage gris, éclat de 2 cm sur carreau près de l'évier"
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Absence de photos
                    </h3>
                    <p className="mb-3 text-gray-700">
                      <strong className="text-red-600">❌ Problème :</strong> En cas de litige, vous n'avez aucune preuve visuelle de l'état initial du logement.
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-green-600">✅ Solution :</strong> Prenez des photos horodatées de chaque pièce (vue générale + détails des anomalies) et annexez-les à l'état des lieux signé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Oubli des relevés de compteurs
                    </h3>
                    <p className="mb-3 text-gray-700">
                      <strong className="text-red-600">❌ Problème :</strong> Impossible de déterminer la consommation réelle du locataire, risque de litige sur les charges.
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-green-600">✅ Solution :</strong> Relevez systématiquement les index d'eau, électricité et gaz (si applicable) et prenez une photo de chaque compteur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Absence de signatures
                    </h3>
                    <p className="mb-3 text-gray-700">
                      <strong className="text-red-600">❌ Problème :</strong> Un état des lieux non signé par les deux parties n'a aucune valeur juridique.
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-green-600">✅ Solution :</strong> Faites signer l'état des lieux par le bailleur et le locataire en présence l'un de l'autre, avec la mention "Lu et approuvé". Chacun reçoit un exemplaire original.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      État des lieux trop rapide
                    </h3>
                    <p className="mb-3 text-gray-700">
                      <strong className="text-red-600">❌ Problème :</strong> Inspection bâclée, anomalies non détectées, litiges à la sortie.
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-green-600">✅ Solution :</strong> Prévoyez au moins 1 à 2 heures pour un appartement standard. Inspectez méthodiquement chaque pièce, chaque équipement, chaque finition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Comment ImmoTopia aide */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20 text-white">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Comment ImmoTopia centralise vos états des lieux et simplifie votre gestion
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Fini les états des lieux papier dispersés et les photos perdues. ImmoTopia centralise tout dans un ERP immobilier complet.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <FileCheck className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Centralisation des documents
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Stockez tous vos états des lieux (entrée et sortie) dans un seul endroit, rattachés automatiquement au bien, au contrat et au locataire concernés.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <Camera className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Photos et preuves
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Uploadez directement les photos horodatées dans le dossier de l'état des lieux. Toutes les preuves sont centralisées et accessibles en un clic.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <ClipboardCheck className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Comparaison entrée/sortie
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Comparez facilement l'état des lieux d'entrée et de sortie côte à côte pour identifier rapidement les dégradations et justifier les retenues.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <Zap className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Tickets de maintenance
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Créez automatiquement un ticket de maintenance à partir d'une anomalie détectée lors de l'état des lieux. Suivez les réparations en temps réel.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <Users className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Historique complet
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Accédez à l'historique complet de chaque bien : tous les états des lieux, contrats, locataires, incidents et travaux réalisés.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <Shield className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="mb-3 text-xl font-semibold">
                  Réduction des litiges
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Avec des preuves centralisées et traçables, vous réduisez drastiquement les litiges sur les dépôts de garantie et les dégradations.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-8 border-2 border-white/30">
              <h3 className="mb-4 text-2xl font-bold text-center">
                Modules ImmoTopia pour une gestion complète
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Gestion locative</h4>
                    <p className="text-sm text-blue-100">Contrats, loyers, quittances, paiements Mobile Money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Maintenance & Ticketing</h4>
                    <p className="text-sm text-blue-100">Suivi des incidents, réparations, interventions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Biens & Annonces</h4>
                    <p className="text-sm text-blue-100">Gestion du patrimoine, publication d'annonces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">ERP complet</h4>
                    <p className="text-sm text-blue-100">CRM, comptabilité, syndic, promotion immobilière</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg transition-all hover:scale-105 font-bold"
                >
                  <Link href="/contact?demo=true" className="flex items-center">
                    Demander une démo gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-center">
              <Link
                href="/gestion-locative-cote-divoire"
                className="rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <h4 className="font-semibold mb-1">Gestion locative</h4>
                <p className="text-sm text-blue-100">En savoir plus →</p>
              </Link>
              <Link
                href="/maintenance-immobiliere-ticketing-cote-divoire"
                className="rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <h4 className="font-semibold mb-1">Maintenance</h4>
                <p className="text-sm text-blue-100">En savoir plus →</p>
              </Link>
              <Link
                href="/logiciel-immobilier-cote-divoire"
                className="rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <h4 className="font-semibold mb-1">ERP Immobilier</h4>
                <p className="text-sm text-blue-100">En savoir plus →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl text-center">
              ❓ Questions fréquentes
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md border-l-4 border-blue-500"
                >
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: CTA Final */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à centraliser votre gestion locative ?
            </h2>
            <p className="mb-8 text-xl text-gray-700 max-w-2xl mx-auto">
              Découvrez comment ImmoTopia simplifie la gestion de vos états des lieux, contrats, loyers et maintenance dans un seul ERP immobilier.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-8">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
              >
                <Link href="/contact?demo=true" className="flex items-center font-bold">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 bg-white text-blue-600 transition-all hover:scale-105 hover:bg-blue-50"
              >
                <Link href="/gestion-locative-cote-divoire" className="flex items-center font-semibold">
                  Voir le module gestion locative
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <Link href="/tarifs" className="hover:text-blue-600 transition-colors font-semibold">
                Voir les tarifs
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/paiement-loyer-charges-mobile-money-cote-divoire" className="hover:text-blue-600 transition-colors font-semibold">
                Paiements Mobile Money
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/modeles/contrat-bail-habitation-cote-divoire" className="hover:text-blue-600 transition-colors font-semibold">
                Modèle de contrat de bail
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/pour-qui/gestionnaires-locatifs" className="hover:text-blue-600 transition-colors font-semibold">
                Gestionnaires locatifs
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/pour-qui/proprietaires-bailleurs" className="hover:text-blue-600 transition-colors font-semibold">
                Propriétaires-bailleurs
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

