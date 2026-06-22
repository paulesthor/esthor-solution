# DEPLOIEMENT — Esthor Solution

> Roadmap des étapes restantes avant mise en ligne 100% fonctionnelle.
> Mis à jour le 22 juin 2026.

---

## PHASE 1 — Domaine & mise en ligne finale
> **Bloquant pour tout le reste. Priorité absolue.**

### 1.1 Acheter le domaine
- [ ] Acheter `esthor-solution.fr` sur OVH, Gandi ou Namecheap (~10€/an)
- Alternatives : `esthor.fr` ou `esthor-solution.com`

### 1.2 Configurer GitHub Pages avec le domaine personnalisé
- [ ] Dans le repo GitHub → Settings → Pages → Custom Domain → entrer `esthor-solution.fr`
- [ ] Chez le registrar, ajouter les DNS GitHub :
  ```
  A     @    185.199.108.153
  A     @    185.199.109.153
  A     @    185.199.110.153
  A     @    185.199.111.153
  CNAME www  paulesthor.github.io
  ```
- [ ] Attendre la propagation DNS (15 min à 48h)
- [ ] Cocher "Enforce HTTPS" dans GitHub Pages Settings

### 1.3 Mettre à jour vite.config.ts (base URL)
Quand le domaine est actif, changer dans `vite.config.ts` :
```typescript
// AVANT (GitHub Pages sans domaine)
base: '/esthor-solution/'

// APRÈS (domaine personnalisé)
base: '/'
```
Puis commit + push → le déploiement repart automatiquement.

### 1.4 Mettre à jour les chemins internes
Après le changement de `base`, tous les liens `${import.meta.env.BASE_URL}xxx` s'adapteront seuls.
Vérifier que les pages HTML statiques dans `/public/` utilisent des chemins relatifs (`../assets/`, `../fonts/`) — c'est déjà le cas ✅

### 1.5 Mettre à jour DEMO_URL
Dans `src/components/sections/BacASable.tsx`, ligne 8 :
```typescript
// Remplacer par l'URL de déploiement réelle du bureau-virtuel
const DEMO_URL = 'http://localhost:5174/?demo=true'
// → https://demo.esthor-solution.fr/?demo=true  (à déployer séparément)
// → ou https://esthor-solution.fr/demo/?demo=true  (si intégré au même site)
```
Actuellement : le bureau-virtuel buildé est dans `/public/demo/index.html`.
Sur le domaine, l'URL sera : `https://esthor-solution.fr/demo/?demo=true` → ça marche sans rien changer ✅

---

## PHASE 2 — SEO et visibilité locale
> **À faire dès que le domaine est actif. Impact sur 3 à 6 mois.**

### 2.1 Google Search Console
- [ ] Aller sur https://search.google.com/search-console
- [ ] Ajouter la propriété `esthor-solution.fr`
- [ ] Vérifier via le fichier HTML ou la balise meta (Google te donnera la procédure)
- [ ] Soumettre le sitemap : `https://esthor-solution.fr/sitemap.xml`
- [ ] Surveiller les impressions et positions toutes les semaines

### 2.2 Google Business Profile (levier le plus puissant)
- [ ] Aller sur https://business.google.com
- [ ] Créer une fiche "Esthor Solution" avec :
  - Catégorie : "Développeur de logiciels" ou "Service informatique"
  - Adresse : Niort (79000)
  - Téléphone : 06 74 90 36 53
  - Site web : https://esthor-solution.fr
  - Description avec les mots-clés (création site web, logiciel PME, Niort, Deux-Sèvres)
- [ ] Ajouter des photos (logo, photo de profil)
- [ ] Demander des avis à Maxime (Emylas) et Michèle (Moment d'Évasion) une fois leurs sites validés

### 2.3 Activer Plausible Analytics
- [ ] Créer un compte sur https://plausible.io (14 jours gratuits puis ~9€/mois)
- [ ] Ajouter le domaine `esthor-solution.fr`
- [ ] Le script est déjà intégré dans `index.html`, `niort.html` et `limoges.html` → automatique

### 2.4 Annuaires locaux (backlinks = confiance aux yeux de Google)
- [ ] **Pages Jaunes** → https://www.pagesjaunes.fr (ajouter l'activité gratuitement)
- [ ] **Yelp France** → https://biz.yelp.fr
- [ ] **Chambre de Commerce des Deux-Sèvres** → se renseigner pour inscription annuaire membres
- [ ] **Malt** → https://www.malt.fr (plateforme freelance, profil + lien vers site)

### 2.5 LinkedIn
- [ ] Mettre à jour le profil LinkedIn de Paul Esthor :
  - Titre : "Développeur Web Indépendant · Sites & Logiciels PME · Niort"
  - URL du site dans "Infos de contact"
  - Projets : Emylas, Mathilde Gesta, Moment d'Évasion
- [ ] Ajouter le lien LinkedIn dans le Footer (`Footer.tsx` — colonne Contact)

---

## PHASE 3 — Contenu & preuves sociales
> **À compléter au fil des livraisons clients.**

### 3.1 Témoignages réels
Les citations actuelles dans les études de cas sont inventées. Les remplacer dès que possible :
- [ ] **Maxime (Emylas)** → demander une citation courte sur l'impact du site
- [ ] **Mathilde Gesta** → demander une citation à la livraison
- [ ] **Michèle (Moment d'Évasion)** → demander une citation après quelques semaines d'utilisation
- Modifier les fichiers `public/projets/emylas.html`, `mathilde-gesta.html`, `moment-devasion.html`

### 3.2 SIRET
- [ ] Dès l'immatriculation, remplacer "en cours d'immatriculation" dans :
  - `src/components/sections/Footer.tsx`
  - `public/mentions-legales.html`
  - `public/cgv.html`

### 3.3 Mathilde Gesta — URL de déploiement
- [ ] Quand le site Mathilde est déployé, ajouter le lien dans `public/projets/mathilde-gesta.html`
  - Ajouter le bouton "Voir le site en direct ↗" dans la section hero de la page
  - Mettre à jour la card dans `Portfolio.tsx` si besoin

### 3.4 Résultats concrets à documenter
Quand les données sont disponibles, mettre à jour les études de cas avec de vraies stats :
- [ ] Emylas → nombre exact de contrats signés via le site, nombre de demandes reçues
- [ ] Mathilde → premières commandes reçues via le catalogue
- [ ] Moment d'Évasion → réduction des appels manqués, RDV pris en ligne

---

## PHASE 4 — Fonctionnalités futures (non bloquantes)
> **Après les premières signatures clients.**

### 4.1 CTAFinal — créneaux configurables
Actuellement les plages horaires (09h00, 14h30...) sont fixes dans le code.
- [ ] Permettre à Paul de modifier ses disponibilités sans toucher au code
- Option : un simple fichier JSON dans `/public/disponibilites.json` lu par le composant

### 4.2 Ajouter un 4ème projet au portfolio
- [ ] Quand un nouveau client est livré, ajouter sa card dans `Portfolio.tsx` et créer `/public/projets/[nom].html`

### 4.3 Blog / contenu éditorial
- [ ] Articles SEO cibles : "comment choisir un développeur web à Niort", "logiciel devis facture artisan", etc.
- [ ] 1 article par mois suffit pour construire une autorité sur les mots-clés longue traîne

### 4.4 Scroll indicator Hero
- [ ] Ajouter une petite flèche animée vers le bas dans le Hero pour inviter au scroll
- [ ] Fichier : `src/components/sections/Hero.tsx` (fin de la section)

---

## Récapitulatif — Ce qui est 100% prêt aujourd'hui

| Module | État |
|---|---|
| Design & animations | ✅ Complet |
| Toutes les sections | ✅ Complet |
| Formulaire RDV (Web3Forms) | ✅ Fonctionnel |
| Démo bureau-virtuel embarquée | ✅ Fonctionnel (auto-login) |
| Portfolio 3 projets + études de cas | ✅ Complet |
| Pages légales (mentions, CGV, confidentialité) | ✅ Complet |
| Landing pages SEO Niort + Limoges | ✅ Complet |
| SEO technique (meta, schema.org, sitemap, robots) | ✅ Complet |
| Polices auto-hébergées (RGPD) | ✅ Complet |
| Analytics Plausible (script intégré) | ✅ Prêt (activer après domaine) |
| CI/CD GitHub Actions | ✅ Automatique à chaque push |
| **Domaine personnalisé** | ❌ À acheter |
| **Google Search Console** | ❌ À configurer |
| **Google Business Profile** | ❌ À créer |
| **SIRET** | ❌ En cours d'immatriculation |
| **Témoignages réels** | ❌ À collecter |
