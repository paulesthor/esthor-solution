import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Offres',     href: '#offres' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Démo',       href: '#bac-a-sable' },
]

function EsthorLogo() {
  return (
    <svg
      viewBox="0 0 260 100"
      className="h-7 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Esthor Solution"
      role="img"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect className="logo-pillar"    x="15" y="15" width="16" height="70" rx="4" fill="#18181B" />
      <rect className="logo-block-top" x="35" y="15" width="50" height="16" rx="4" fill="url(#logo-grad)" />
      <rect className="logo-block-mid" x="35" y="42" width="35" height="16" rx="4" fill="#34D399" />
      <rect className="logo-block-bot" x="35" y="69" width="50" height="16" rx="4" fill="url(#logo-grad)" />
      <text
        x="95" y="72"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="#18181B"
        letterSpacing="-2"
      >
        sthor.
      </text>
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = useReducedMotion() ?? false

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="glass rounded-full pointer-events-auto w-full max-w-2xl">

        {/* Barre principale de la pilule */}
        <div className="flex items-center justify-between gap-4 px-5 py-2.5">

          {/* Logo */}
          <a href="#" className="cursor-pointer" aria-label="Accueil">
            <EsthorLogo />
          </a>

          {/* Liens desktop */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-encre/60 hover:text-encre transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#rdv"
            className="hidden md:flex items-center px-5 py-2 bg-encre text-fond text-sm font-bold rounded-full hover:bg-encre/80 transition-colors duration-200 cursor-pointer shrink-0"
          >
            Discuter
          </a>

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-1.5 cursor-pointer rounded-full hover:bg-encre/5 transition-colors shrink-0"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen
              ? <X size={20} className="text-encre" />
              : <Menu size={20} className="text-encre" />
            }
          </button>
        </div>

        {/* Menu mobile — s'étend sous la pilule */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduced ? 0 : 0.2, ease: 'easeOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-encre/10 px-5 py-4 flex flex-col gap-4 rounded-b-3xl">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-semibold text-encre/70 hover:text-encre transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+33674903653"
                  className="flex items-center gap-2 text-sm font-medium text-encre/50 cursor-pointer"
                >
                  <Phone size={14} />
                  06 74 90 36 53
                </a>
                <a
                  href="#rdv"
                  className="text-center py-2.5 bg-encre text-fond text-sm font-bold rounded-full cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Réserver un appel
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
