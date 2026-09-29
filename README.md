# SCI Hufalou — Site vitrine minimal

## Objectif du site (à ne pas perdre de vue)
Ce site n'est **pas** un outil commercial ni un levier de financement — un site web n'a
aucun poids réel dans une décision de prêt bancaire (une banque évalue statuts, garanties,
apport, revenus). Son seul objectif est d'offrir une **présence numérique minimale et
crédible** : que quiconque cherche "SCI Hufalou" (notaire, futur locataire du bail
professionnel, associé potentiel) tombe sur quelque chose de sérieux plutôt que sur rien.
D'où le choix : une seule page, pas de formulaire, pas de contenu spéculatif.

## Décisions actées (à ne pas rouvrir sans raison)
- **Une seule page** (`index.html`). Pas de sous-pages "Nos investissements",
  "Partenaires", "Vendre votre immeuble" tant qu'il n'y a pas de contenu réel à y mettre.
- **Pas de formulaire de contact** — un simple lien `mailto:` remplace le formulaire
  (aucune collecte de données, aucun backend à maintenir).
- **Pas de section "secteurs d'investissement" ni de bloc "registre d'acquisition"** —
  supprimés pour rester sobre ; à réintroduire seulement si le patrimoine grossit
  réellement et qu'il y a quelque chose de concret à montrer.
- **Palette** : bleu marine + gris exacts du logo réel (`--accent #122641`, `--accent-light #57585A`).
- **Motif « Article premier / II / III »** (piliers) : conservé, assumé comme signature.
- **Téléphone / adresse** : volontairement absents (discrétion).
- **SIREN / RCS** : affichés en pied de page, en une ligne factuelle — pas un argument
  marketing, juste la transparence légale minimale.

## Fichiers
- `index.html` — page unique : hero, "Qui sommes-nous" (identité + 3 piliers), engagements,
  contact (email direct), footer.
- `mentions-legales.html` — squelette à compléter (SIREN, capital social, siège, gérant, hébergeur).
- `confidentialite.html` — politique allégée : pas de formulaire ni cookies, juste le contact email.
- `style.css` — design system unique (variables CSS en tête de fichier).
- `script.js` — comportements : en-tête au scroll, menu mobile, révélations au scroll, année du footer.
  (Plus de logique de formulaire depuis la simplification.)
- `images/logo-mark.png`, `images/logo-full.png`, `images/logo-original.png` — vrai logo fourni.

## À compléter par vos soins
- Dans `index.html` (section contact) et les deux pages légales : remplacer
  `contact@sci-hufalou.fr` par la vraie adresse email.
- Dans le footer (3 fichiers) : remplacer `SIREN [à compléter] · RCS [ville à compléter]`
  par les vraies valeurs.
- Dans `mentions-legales.html` : tous les champs `[...]` (capital social, siège, gérant, hébergeur).

## Pour ajouter une page plus tard
Si le patrimoine grossit et qu'une vraie page "Nos investissements" a du sens :
1. Dupliquer la structure `<header>`/`<footer>` d'une page existante.
2. Inclure `style.css` et `script.js` sans les modifier.
3. Ajouter le lien dans le nav (desktop + mobile) d'`index.html` et des pages légales.

## Pour ajouter un module futur (espace locataire, dashboard SCI, GED, pipeline d'acquisition…)
Chaque module vit dans son propre dossier avec son propre JS, chargé uniquement sur ses pages :
```
/espace-locataire/index.html + locataire.js
/espace-partenaire/index.html + partenaire.js
/dashboard/index.html + dashboard.js
/documents/... (GED)
/pipeline/...  (acquisitions)
/registre/...  (interventions)
```
Ces modules nécessiteront une authentification (à ajouter séparément) avant d'exposer
des données sensibles (loyers, baux, locataires).
