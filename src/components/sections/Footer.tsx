import { Phone, Mail, MapPin } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const OFFRES = [
  { label: "Site Vitrine (Offre Présence)", href: "#offres" },
  { label: "Bureau Virtuel (Logiciel PME)", href: "#bureau-virtuel" },
  { label: "Comment ça marche", href: "#bureau-virtuel" },
  { label: "Voir la démo", href: "#bac-a-sable" },
]

const ZONES = [
  { label: "Développeur web à Niort", href: `${BASE}niort.html` },
  { label: "Développeur web à Limoges", href: `${BASE}limoges.html` },
]

const LEGAL = [
  { label: "Mentions légales", href: `${BASE}mentions-legales.html` },
  { label: "Confidentialité", href: `${BASE}politique-confidentialite.html` },
  { label: "CGV", href: `${BASE}cgv.html` },
]

export default function Footer() {
  return (
    <footer className="bg-encre pt-16 pb-8">
      <div className="container-site px-6 lg:px-24">

        {/* Grille principale */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Colonne logo */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 cursor-pointer mb-5 group">
              <span className="relative flex items-center justify-center w-8 h-8 bg-fond rounded-lg shrink-0">
                <span className="absolute top-1 right-1 w-2 h-2 bg-vert rounded-full" />
              </span>
              <span className="text-xl font-extrabold text-fond tracking-tight">Esthor.</span>
            </a>
            <p className="text-sm text-fond/40 leading-relaxed mb-4">
              Artisan du web basé à Niort. Sites vitrines ultra-rapides et logiciels de gestion PME sur-mesure pour les indépendants de Niort, Limoges et partout en France.
            </p>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} className="text-fond/20 shrink-0" />
              <p className="text-xs text-fond/20 font-medium">Niort (79000) · Deux-Sèvres</p>
            </div>
          </div>

          {/* Offres */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fond/30 mb-5">Prestations</p>
            <ul className="flex flex-col gap-3">
              {OFFRES.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-fond/50 hover:text-fond transition-colors duration-200 cursor-pointer font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Zones SEO */}
            <p className="text-xs font-bold uppercase tracking-widest text-fond/30 mt-6 mb-3">Zones</p>
            <ul className="flex flex-col gap-2">
              {ZONES.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-fond/40 hover:text-fond transition-colors duration-200 cursor-pointer font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fond/30 mb-5">Légal</p>
            <ul className="flex flex-col gap-3">
              {LEGAL.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-fond/50 hover:text-fond transition-colors duration-200 cursor-pointer font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-fond/20 font-medium mt-6">SIRET : en cours d'immatriculation</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fond/30 mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+33674903653" className="flex items-center gap-2.5 text-sm text-fond/50 hover:text-fond transition-colors duration-200 cursor-pointer font-medium">
                  <Phone size={13} className="shrink-0" />
                  06 74 90 36 53
                </a>
              </li>
              <li>
                <a href="mailto:contact@esthor-solution.fr" className="flex items-center gap-2.5 text-sm text-fond/50 hover:text-fond transition-colors duration-200 cursor-pointer font-medium">
                  <Mail size={13} className="shrink-0" />
                  contact@esthor-solution.fr
                </a>
              </li>
              <li className="pt-2">
                <a href="#rdv" className="inline-flex items-center px-4 py-2.5 bg-vert text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
                  Réserver un appel gratuit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-fond/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fond/20 font-medium">
          <p>© {new Date().getFullYear()} Esthor Solution — Paul Esthor. Tous droits réservés.</p>
          <p>Fait avec soin à Niort.</p>
        </div>
      </div>
    </footer>
  )
}
