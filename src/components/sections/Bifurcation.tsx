import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const OFFRE_PRESENCE = [
  "Vos clients vous trouvent sur Google",
  "Votre entreprise présentée sous son meilleur jour",
  "Affiché instantanément, sans publicité payante",
  "Aucun abonnement mensuel — vous payez une seule fois",
  "Livraison en 10 jours ouvrés",
]

const OFFRE_BUREAU = [
  "Votre site vitrine inclus",
  "Vos clients réservent en ligne, 7j/7",
  "Devis et factures générés en 1 clic",
  "Vous suivez votre chiffre d'affaires en un coup d'œil",
  "Remplace Wix, Calendly et vos tableaux Excel",
]

export default function Bifurcation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="offres" className="section-padding bg-fond">
      <div className="container-site px-6 lg:px-24">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
            Les offres
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-encre tracking-tighter leading-tight">
            Deux besoins.<br />Une seule exigence.
          </h2>
        </motion.div>

        {/* Deux colonnes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Box Présence — claire */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 border border-encre/8 flex flex-col"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-encre/40 mb-3 block">
                Offre Présence
              </span>
              <h3 className="text-2xl font-extrabold text-encre tracking-tight mb-2">
                Le site vitrine qui vend.
              </h3>
              <p className="text-encre/55 text-sm leading-relaxed">
                La carte de visite digitale parfaite. Rapide, propre et sans maintenance.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {OFFRE_PRESENCE.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-encre/70">
                  <Check size={15} className="text-encre/30 mt-0.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <p className="text-3xl font-extrabold text-encre tracking-tight mb-1">Dès 800 €</p>
              <p className="text-xs text-encre/40 font-medium mb-5">Paiement unique · Zéro abonnement</p>
              <a
                href="#rdv"
                className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-encre/20 text-encre text-sm font-bold rounded-2xl hover:border-encre/50 hover:bg-encre/5 transition-all duration-200 cursor-pointer"
              >
                Demander un devis
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Box Bureau Virtuel — sombre */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="bg-encre rounded-3xl p-8 flex flex-col relative overflow-hidden"
          >
            {/* Badge recommandé */}
            <span className="absolute top-6 right-6 px-3 py-1 bg-vert text-white text-xs font-bold rounded-full">
              Recommandé
            </span>

            {/* Glow décoratif */}
            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-fond/30 mb-3 block">
                Bureau Virtuel
              </span>
              <h3 className="text-2xl font-extrabold text-fond tracking-tight mb-2">
                Votre entreprise en un seul endroit.
              </h3>
              <p className="text-fond/50 text-sm leading-relaxed">
                Le site vitrine inclus, propulsé par un tableau de bord sur-mesure pour votre gestion.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {OFFRE_BUREAU.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-fond/70">
                  <Check size={15} className="text-vert mt-0.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <p className="text-3xl font-extrabold text-fond tracking-tight mb-1">Dès 3 500 €</p>
              <p className="text-xs text-fond/30 font-medium mb-5">Setup · puis 89 €/mois maintenance</p>
              <a
                href="#bac-a-sable"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-vert text-white text-sm font-bold rounded-2xl hover:opacity-90 transition-opacity duration-200 cursor-pointer shadow-lg shadow-vert/30"
              >
                Tester le tableau de bord
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
