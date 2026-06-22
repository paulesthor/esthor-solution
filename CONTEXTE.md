# CONTEXTE — Esthor Solution (v2)

> Lis ce fichier en début de session pour avoir le contexte complet sans analyser le code.

---

## Qui / Quoi

**Fondateur :** Paul Esthor — développeur indépendant, "Artisan du Web"
**Zone cible :** Occitanie (Toulouse) + Nouvelle-Aquitaine (Niort, Limoges)
**Positionnement :** Pas une agence, un artisan. Zéro jargon, accompagnement humain, disponible directement au 06 74 90 36 53.
**Problème résolu :** La "SaaS fatigue" — Wix + Calendly + Sellsy = 80€/mois gaspillés + 5h/semaine perdues.

---

## Double offre

| Offre | Prix | Ce que c'est |
|---|---|---|
| **Présence** (site vitrine) | Dès 800 € paiement unique | Site 100% statique, SEO local, PageSpeed 95+, 10 jours ouvrés |
| **Bureau Virtuel** (SaaS PME) | Dès 3 500 € setup + 89 €/mois | Site vitrine + tableau de bord (Agenda, Devis/Factures PDF, CRM, Dashboard CA) |

---

## Stack technique

- **Framework :** React 18 + TypeScript + Vite
- **Style :** Tailwind CSS (config custom) + classes utilitaires manuelles dans `index.css`
- **Animations :** Framer Motion — toutes les animations respectent `useReducedMotion`
- **Icônes :** Lucide React
- **Polices :** Plus Jakarta Sans auto-hébergée (`/public/fonts/*.ttf`) — RGPD compliant, pas de CDN Google

---

## Design System

### Couleurs (tailwind.config.js)
| Token | Hex | Usage |
|---|---|---|
| `fond` | `#FDFBF7` | Fond général (blanc papier chaud) |
| `encre` | `#18181B` | Texte, éléments sombres |
| `vert` | `#10B981` | Accent, CTA principal, validation |

### Utilitaires CSS (index.css)
- `.glass` — glassmorphism blanc (bg white/75, backdrop-blur-20, border white/95)
- `.glass-dark` — glassmorphism sombre
- `.section-padding` — `px-6 py-24 md:px-12 lg:px-24`
- `.container-site` — `max-w-6xl mx-auto w-full`
- `.logo-block-top/mid/bot` — animation SVG logo (slide 5s)
- `.logo-pillar` — animation SVG logo (fill pulse 5s)
- `.animate-blob` — blob flou ambiance hero (8s)

### Animations Tailwind
- `animate-float-slow` — float 6s (cartes hero gauche)
- `animate-float-medium` — float 4.5s delay 0.5s (carte centre)
- `animate-float-fast` — float 3.8s delay 1s (carte droite)

---

## Architecture sections (App.tsx, dans l'ordre)

```
Nav → Hero → Probleme → Bifurcation → CommentCaMarche
    → Portfolio → BacASable → Manifeste → FAQ → CTAFinal → Footer
```

### Nav (`Nav.tsx`) ✅ Mis à jour
- **Pilule flottante glassmorphism** — `fixed top-6`, `glass rounded-full`, max-w-2xl centré
- **Logo SVG animé** — blocs qui glissent + pilier qui pulse (classes `.logo-block-*`, `.logo-pillar`)
- Liens : Offres (`#offres`) · Portfolio (`#portfolio`) · Démo (`#bac-a-sable`)
- CTA desktop : "Discuter" → `#rdv`, `rounded-full bg-encre`
- Mobile : hamburger dans la pilule, menu s'étend vers le bas (`AnimatePresence`)

### Hero (`Hero.tsx`) ✅ Mis à jour
- **Layout asymétrique** : `grid lg:grid-cols-12` — 7 cols texte gauche / 5 cols cartes droite
- **Blob ambiance** : `animate-blob bg-vert/10 blur-3xl` — rendu conditionnel si `!reduced`
- **Badge** : "Développeur & Partenaire Digital à Niort"
- **H1** : "Le centre de commande de votre entreprise." avec gradient grisé sur "entreprise." (`bg-clip-text from-encre/60 to-encre/25`)
- **CTAs pilules** : "Tester l'outil (Démo)" `rounded-full bg-vert` + "J'ai besoin d'un site vitrine" `rounded-full border`
- **Cartes droite (desktop)** : CardFacture / CardRDV / CardVisites en colonne avec `animate-float-*`
- **Cartes mobile** : carrousel horizontal `overflow-x-auto snap-x`

### Probleme (`Probleme.tsx`) ✅
- Section `bg-white`, 3 cartes `bg-fond rounded-3xl`
- Données chiffrées : 80€/mois gaspillés · 5h/semaine perdues · 0 appel généré

### Bifurcation (`Bifurcation.tsx`) ✅
- Section `#offres`, 2 colonnes
- **Gauche** : Offre Présence — fond blanc, 5 arguments, prix 800€, CTA "Demander un devis"
- **Droite** : Bureau Virtuel — fond `bg-encre`, glow vert, badge "Recommandé", prix 3 500€ + 89€/mois, CTA "Tester le tableau de bord"

### CommentCaMarche (`CommentCaMarche.tsx`) ✅
- Section `#bureau-virtuel`, `bg-white`
- 3 étapes numérotées 01/02/03 avec ligne de connexion desktop
- Numéro direct en bas de section

### Portfolio (`Portfolio.tsx`) ✅ (projets démo)
- Section `#portfolio`, `bg-fond`
- **2 projets démo** avec `MockupSite` (composant généré, pas de vraie image) :
  - "Occitanie Rénov'" — tags Bureau Virtuel, Agenda, Devis PDF
  - "Maçonnerie Durand" — tags Site Vitrine, SEO Local, PageSpeed 98
- Badge "Projet démo" visible sur chaque card
- Slot vide en bas "Votre entreprise ici"

### BacASable (`BacASable.tsx`) ✅ (UI seulement)
- Section `#bac-a-sable`, fond vert `#10B981`
- Modale glassmorphism centrée, entreprise "Occitanie Rénov'"
- Email pré-rempli `demo@esthor-solution.fr`, mot de passe `demo1234` (toggle afficher/masquer)
- **⚠️ Bouton "Lancer la simulation" ne fait rien pour l'instant** — doit pointer vers `bureau-virtuel/`

### Manifeste (`Manifeste.tsx`) ✅ (placeholder photo)
- Section `#manifeste`, `bg-encre`, layout 2 colonnes
- Polaroïd avec cadre vert décalé — **⚠️ photo placeholder picsum, à remplacer par la vraie photo**
- Citation : "Je code pour ceux qui travaillent dur."
- Badge localisation : "Basé en Occitanie"

### FAQ (`FAQ.tsx`) ✅
- Section `#faq`, `bg-fond`
- Layout sticky : titre à gauche, accordion à droite
- 6 questions : tech-phobie, arrêt activité, propriété, délais, 89€ couvre quoi, modifications

### CTAFinal (`CTAFinal.tsx`) ✅ (UI seulement)
- Section `#rdv`, `bg-fond`
- Sélecteur créneaux (4 jours hardcodés) + confirmation locale
- **⚠️ Pas d'envoi email réel** — à brancher sur Supabase ou Resend
- Alternative : carte appel direct 06 74 90 36 53

### Footer (`Footer.tsx`) ✅
- `bg-encre`, 4 colonnes : Logo · Offres · Légal · Contact
- **⚠️ SIRET à remplir** : `XXX XXX XXX XXXXX`
- **⚠️ Pages légales manquantes** : `/mentions-legales`, `/politique-confidentialite`, `/cgv`
- Email : `contact@esthor-solution.fr`

---

## Ce qui est FAIT ✅

- [x] Toutes les sections codées et animées
- [x] Design system complet (couleurs, typo, glass, spacing)
- [x] Police auto-hébergée (RGPD OK)
- [x] Nav pilule glassmorphism + logo SVG animé
- [x] Hero asymétrique avec blob + gradient text + cartes flottantes
- [x] Offres (Présence 800€ + Bureau Virtuel 3500€+89€/mois)
- [x] Processus 3 étapes
- [x] Portfolio avec 3 vrais projets (Emylas, Mathilde Gesta, Moment d'Évasion)
- [x] Bac à sable (UI modale, bouton → https://demo.esthor-solution.fr à remplacer)
- [x] Manifeste fondateur (polaroïd, vraie photo /assets/paul.webp)
- [x] FAQ 6 questions
- [x] CTA prise de RDV (UI créneaux)
- [x] Footer complet
- [x] `prefers-reduced-motion` respecté partout
- [x] Responsive mobile (carrousel, hamburger)

---

## Ce qui est À FAIRE ⚠️

- [ ] **Bouton "Lancer la simulation"** → router vers `bureau-virtuel/` (le dashboard démo qui existe dans `/bureau-virtuel/`)
- [ ] **Créneaux RDV réels** → brancher sur Supabase ou Resend pour envoi email
- [ ] **SIRET** dans le footer
- [ ] **Pages légales** : mentions légales, CGV, politique de confidentialité
- [ ] **Analytics** : installer Plausible ou Umami (pas Google Analytics — RGPD)
- [ ] **Domaine** : configurer esthor.fr ou esthor-solution.fr
- [ ] **URL bac à sable** : remplacer `https://demo.esthor-solution.fr` par la vraie URL de déploiement du bureau-virtuel
- [ ] **Landing pages locales** : `/niort` et `/limoges` pour SEO local
- [ ] **GitHub Action keep-alive** Supabase (quand le SaaS sera branché)

---

## Contacts & liens utiles

- Tél : 06 74 90 36 53
- Email : contact@esthor-solution.fr
- Dashboard démo : dossier `../bureau-virtuel/` (React app, port 5174 suggéré)
- Roadmap complète : `../Préparation/Road Map.txt` et `Road Map et Idées du site.txt`
