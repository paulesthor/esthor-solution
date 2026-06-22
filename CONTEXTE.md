# CONTEXTE — Esthor Solution (v2)

> Lis ce fichier en début de session pour avoir le contexte complet sans analyser le code.
> Mis à jour le 22 juin 2026.

---

## Qui / Quoi

**Fondateur :** Paul Esthor — développeur web indépendant, "Artisan du Web"
**Basé à :** Niort (79000), Deux-Sèvres
**Zones cibles :** Niort & Deux-Sèvres · Limoges & Haute-Vienne · France entière à distance
**Tel :** 06 74 90 36 53 · **Email :** contact@esthor-solution.fr
**Positionnement :** Pas une agence, un artisan. Zéro jargon, contact direct, disponible en fin de journée et week-end.
**Problème résolu :** La "SaaS fatigue" — payer Wix + Calendly + un outil de facturation ≈ 80€/mois pour des outils qui ne se parlent pas + 5h/semaine perdues sur l'administratif.

---

## Double offre

| Offre | Prix | Ce que c'est |
|---|---|---|
| **Présence** (site vitrine) | Dès **800 €** paiement unique | Site 100% statique, SEO local, PageSpeed 95+, livré en 10 jours ouvrés, zéro abonnement |
| **Bureau Virtuel** (SaaS PME) | Dès **3 500 €** setup + **89 €/mois** | Site vitrine + tableau de bord (Agenda, Devis/Factures PDF, CRM, Dashboard, espace client) |

---

## Clients réalisés (portfolio)

| Client | Offre | Région | Statut |
|---|---|---|---|
| **Maxime — Emylas Animation** | Présence ~800€ | Rhône-Alpes | ✅ En ligne sur [emylas.fr](https://www.emylas.fr) |
| **Mathilde Gesta** (tapissière) | Bureau Virtuel ~2 500€ | Région de Metz | 🔧 En construction (GitHub seulement) |
| **Michèle — Moment d'Évasion** (massage) | Bureau Virtuel Premium ~4 500€ | Montamisé, Vienne (86), près de Poitiers | ✅ En ligne sur [GitHub Pages](https://paulesthor.github.io/moment/) |

---

## Stack technique

- **Framework :** React 19 + TypeScript + Vite 8
- **Style :** Tailwind CSS 3 (config custom) + utilitaires CSS manuels dans `index.css`
- **Animations :** Framer Motion — toutes respectent `useReducedMotion`
- **Icônes :** Lucide React
- **Polices :** Plus Jakarta Sans auto-hébergée (`/public/fonts/*.ttf`) — RGPD compliant
- **Formulaire RDV :** Web3Forms (clé : `1c9141a9-d7d5-4717-ab58-483833f0fd2e`)
- **Déploiement :** GitHub Pages via GitHub Actions (auto à chaque push sur `main`)
- **Repo :** https://github.com/paulesthor/esthor-solution
- **URL actuelle :** https://paulesthor.github.io/esthor-solution/ (temporaire, en attente du domaine)

---

## Design System

### Couleurs (`tailwind.config.js`)
| Token | Hex | Usage |
|---|---|---|
| `fond` | `#FDFBF7` | Fond général (blanc papier chaud) |
| `encre` | `#18181B` | Texte, éléments sombres |
| `vert` | `#10B981` | Accent, CTA principal, validation |

### Utilitaires CSS (`index.css`)
- `.glass` — glassmorphism blanc (bg white/75, backdrop-blur-20, border white/95, shadow)
- `.glass-dark` — glassmorphism sombre
- `.section-padding` — `px-6 py-24 md:px-12 lg:px-24`
- `.container-site` — `max-w-6xl mx-auto w-full`
- `.logo-block-top/mid/bot` — animation SVG logo (slide 5s, respecte `prefers-reduced-motion`)
- `.logo-pillar` — animation SVG logo (fill pulse 5s)
- `.animate-blob` — blob flou ambiance hero (8s)

### Animations Tailwind (`tailwind.config.js`)
- `animate-float-slow` — float 6s (carte 1)
- `animate-float-medium` — float 4.5s delay 0.5s (carte 2)
- `animate-float-fast` — float 3.8s delay 1s (carte 3)

---

## Architecture sections (App.tsx, dans l'ordre)

```
Nav → Hero → Probleme → Bifurcation → CommentCaMarche
    → Portfolio → BacASable (fusionné avec Manifeste) → FAQ → CTAFinal → Footer
```

### Nav (`Nav.tsx`) ✅
- Pilule flottante glassmorphism `fixed top-6 inset-x-0`, `glass rounded-full`, max-w-2xl centré
- Logo SVG animé (blocs qui glissent + pilier qui pulse)
- Liens : Offres · Portfolio · Démo — CTA "Discuter" → `#rdv`
- Mobile : hamburger dans la pilule, menu s'étend vers le bas

### Hero (`Hero.tsx`) ✅
- Layout asymétrique `grid lg:grid-cols-12` — 7 cols texte / 5 cols photo
- Badge : "Développeur web indépendant à Niort"
- H1 : "Votre site. Votre gestion. Un seul endroit." (gradient grisé sur derniers mots)
- CTAs : "Voir comment ça marche" (vert) + "J'ai besoin d'un site vitrine" (border)
- Téléphone discret sous les CTAs : 06 74 90 36 53
- Photo de Paul en colonne droite desktop avec overlay "Artisan du Web. / Basé à Niort · Disponible partout"
- Blob vert flou en arrière-plan (rendu conditionnel si `!reduced`)
- Mobile : cartes (Facture, RDV, Visites) en carrousel horizontal

### Probleme (`Probleme.tsx`) ✅
- 3 cartes : 80€/mois gaspillés · 5h/semaine perdues · 0 appel généré
- Texte : sans jargon, sans référence à un secteur spécifique

### Bifurcation (`Bifurcation.tsx`) ✅
- Titre : "Deux offres. Un seul engagement : que ça marche."
- Gauche : Offre Présence 800€ (fond blanc)
- Droite : Bureau Virtuel 3 500€ + 89€/mois (fond encre, glow vert, badge "Recommandé")

### CommentCaMarche (`CommentCaMarche.tsx`) ✅
- 3 étapes : 01 Config espace (48h) → 02 Personnalisation → 03 Vous gérez tout
- Numéro direct en bas de section

### Portfolio (`Portfolio.tsx`) ✅
- Grille asymétrique style v1 : Emylas + Mathilde côte à côte (Mathilde décalée vers le bas)
- Moment d'Évasion en carte large panoramique en dessous
- Chaque card cliquable → page étude de cas (`/projets/[nom].html`)
- Images : `/public/assets/emylas.png`, `mathilde.png`, `moment.png`
- Chemins préfixés `import.meta.env.BASE_URL` pour compatibilité GitHub Pages

### BacASable (`BacASable.tsx`) ✅ — fusionné avec Manifeste
- Section `#bac-a-sable`, fond `bg-encre`, 2 colonnes
- Gauche : citation + texte fondateur + signature Paul Esthor + bouton téléphone
- Droite : modale démo "Niort Rénov'" — email `admin@bureauvirtuel.fr` / mdp `admin2026`
- Bouton → `${import.meta.env.BASE_URL}demo/?demo=true` (auto-login bureau-virtuel embarqué)
- ⚠️ Mettre à jour DEMO_URL quand domaine configuré → `https://esthor-solution.fr/demo/?demo=true`

### FAQ (`FAQ.tsx`) ✅
- Layout sticky desktop : titre gauche, accordion droite
- 6 questions : tech-phobie · arrêt activité · propriété contenu · délais · 89€/mois · modifications

### CTAFinal (`CTAFinal.tsx`) ✅
- Formulaire 2 étapes : sélection créneau → nom + téléphone
- Dates dynamiques : 4 prochains jours ouvrés calculés à la volée (jamais dans le passé)
- Envoi via Web3Forms → reçu par email à Paul
- État : sending → success (avec rappel du numéro saisi) → error (fallback téléphone)

### Footer (`Footer.tsx`) ✅
- 4 colonnes : Logo · Prestations + Zones SEO · Légal · Contact
- Zones SEO : liens vers `/niort.html` et `/limoges.html` (liens internes pour Google)
- Liens légaux avec extension `.html` et BASE_URL prefix
- SIRET "en cours d'immatriculation"

---

## Fichiers statiques dans `/public/`

| Fichier | Description |
|---|---|
| `assets/paul.webp` | Photo de Paul (Hero + Manifeste) |
| `assets/emylas.png` | Screenshot site Emylas |
| `assets/mathilde.png` | Screenshot site Mathilde Gesta |
| `assets/moment.png` | Screenshot site Moment d'Évasion |
| `fonts/PlusJakartaSans-*.ttf` | Polices auto-hébergées (RGPD) |
| `demo/index.html` | Bureau-virtuel buildé (viteSingleFile) |
| `projets/emylas.html` | Étude de cas Emylas |
| `projets/mathilde-gesta.html` | Étude de cas Mathilde Gesta |
| `projets/moment-devasion.html` | Étude de cas Moment d'Évasion |
| `niort.html` | Landing page SEO Niort |
| `limoges.html` | Landing page SEO Limoges |
| `mentions-legales.html` | Mentions légales |
| `politique-confidentialite.html` | Politique de confidentialité RGPD |
| `cgv.html` | Conditions Générales de Vente |
| `sitemap.xml` | Sitemap (URLs esthor-solution.fr) |
| `robots.txt` | Bloque /demo/, pointe vers sitemap |

---

## SEO en place

- **Title :** "Esthor Solution | Développeur Web à Niort — Sites & Logiciels pour Artisans et PME"
- **Meta description :** optimisée mots-clés Niort + Deux-Sèvres + Vienne + Haute-Vienne
- **Schema.org :** LocalBusiness + ProfessionalService + OfferCatalog complet
- **Canonical :** `https://esthor-solution.fr/`
- **sitemap.xml :** 9 URLs avec priorités et fréquences
- **robots.txt :** Allow tout sauf /demo/
- **Plausible :** script présent, activable dès le domaine configuré (RGPD, sans cookie)

---

## Étapes restantes → voir `DEPLOIEMENT.md`

**Bloquant :** Acheter le domaine `esthor-solution.fr` → changer `base: '/'` dans `vite.config.ts` → redéployer.
**Après domaine :** Google Search Console + Google Business Profile + Plausible.
**Au fil du temps :** Vrais témoignages clients · SIRET · Mathilde site live.
