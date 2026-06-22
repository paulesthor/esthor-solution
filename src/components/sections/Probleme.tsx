import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CreditCard, Clock, AlertTriangle } from 'lucide-react'

const PROBLEMES = [
  {
    icon: CreditCard,
    titre: "3 abonnements. 3 factures. Chaque mois.",
    texte: "Wix à 20€, Calendly à 12€, Sellsy à 49€... Vous payez trois outils qui ne se parlent pas, et vous ressaisissez les mêmes infos partout.",
    chiffre: "80€/mois",
    label: "gaspillés en moyenne",
  },
  {
    icon: Clock,
    titre: "5 heures par semaine perdues sur l'administratif.",
    texte: "Devis sur Word, factures sur Excel, relances par SMS. Des heures de travail qui ne rapportent rien, pendant que votre chantier vous attend.",
    chiffre: "5h/semaine",
    label: "de temps récupérables",
  },
  {
    icon: AlertTriangle,
    titre: "Votre site vitrine ne travaille pas pour vous.",
    texte: "Un site créé il y a 5 ans, que vous ne pouvez plus modifier, qui ne sort pas sur Google, et qui ne génère aucun appel entrant. Un investissement dormant.",
    chiffre: "0 appel",
    label: "généré par votre site actuel",
  },
]

function useScrollReveal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, isInView }
}

export default function Probleme() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="probleme" className="section-padding bg-white">
      <div className="container-site px-6 lg:px-24">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
            Le constat
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-encre leading-tight tracking-tighter mb-4">
            Vous méritez mieux que ça.
          </h2>
          <p className="text-lg text-encre/55 leading-relaxed">
            La majorité des indépendants et gérants de PME paient trop cher pour des outils qu'ils n'utilisent qu'à 10%.
          </p>
        </motion.div>

        {/* Cartes problèmes */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMES.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.titre}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative bg-fond rounded-3xl p-7 border border-encre/6 hover:border-encre/12 transition-colors duration-300 cursor-default"
              >
                {/* Icône */}
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-encre/6 mb-5">
                  <Icon size={18} className="text-encre/60" strokeWidth={1.8} />
                </span>

                {/* Chiffre clé */}
                <p className="text-3xl font-extrabold text-encre tracking-tight mb-0.5">{p.chiffre}</p>
                <p className="text-xs font-semibold text-encre/40 uppercase tracking-wide mb-4">{p.label}</p>

                {/* Titre + texte */}
                <h3 className="text-base font-bold text-encre mb-2 leading-snug">{p.titre}</h3>
                <p className="text-sm text-encre/55 leading-relaxed">{p.texte}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
