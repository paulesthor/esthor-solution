import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Settings, Palette, LayoutDashboard } from 'lucide-react'

const ETAPES = [
  {
    num: "01",
    icon: Settings,
    titre: "On installe votre tableau de bord",
    texte: "Je configure votre espace en 48h. Vos données restent chez vous — pas de plateforme tierce, pas de partage avec qui que ce soit.",
  },
  {
    num: "02",
    icon: Palette,
    titre: "On personnalise à vos couleurs",
    texte: "Votre logo, vos services, vos tarifs, vos textes. Le site vitrine et le tableau de bord reflètent votre entreprise, pas un template générique.",
  },
  {
    num: "03",
    icon: LayoutDashboard,
    titre: "Vous gérez tout depuis un seul endroit",
    texte: "Agenda, devis, factures, clients — tout est là. Si vous avez un problème, vous m'appelez directement. Pas de plateforme téléphonique délocalisée.",
  },
]

export default function CommentCaMarche() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="bureau-virtuel" className="section-padding bg-white">
      <div className="container-site px-6 lg:px-24">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
            Comment ça marche
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-encre tracking-tighter leading-tight mb-4">
            Opérationnel en 3 étapes.
          </h2>
          <p className="text-lg text-encre/55 leading-relaxed">
            Pas besoin d'être à l'aise avec la technologie. Je m'occupe de tout, vous prenez en main à votre rythme.
          </p>
        </motion.div>

        {/* Étapes */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* Ligne de connexion desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-encre/8" aria-hidden="true" />

          {ETAPES.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={e.num}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.14 }}
                className="relative"
              >
                {/* Numéro + icône */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-fond border border-encre/10">
                    <Icon size={18} className="text-encre/50" strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-extrabold text-encre/20 tracking-widest">{e.num}</span>
                </div>

                <h3 className="text-lg font-extrabold text-encre mb-3 leading-snug">{e.titre}</h3>
                <p className="text-sm text-encre/55 leading-relaxed">{e.texte}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Réassurance bas */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 text-sm text-encre/40 text-center font-medium"
        >
          Vous avez un problème après la livraison ? Vous appelez le <a href="tel:+33674903653" className="text-encre/60 hover:text-encre transition-colors font-semibold">06 74 90 36 53</a> directement.
        </motion.p>
      </div>
    </section>
  )
}
