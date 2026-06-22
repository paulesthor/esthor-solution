import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const QUESTIONS = [
  {
    q: "Je ne suis pas à l'aise avec la technologie — est-ce que je vais m'en sortir ?",
    r: "Oui, sans aucun doute. L'interface a été conçue pour des gérants d'entreprise, pas pour des informaticiens. Et si vous bloquez sur quelque chose, vous m'appelez directement au 06 74 90 36 53. Pas de ticket support, pas d'email qui reste sans réponse.",
  },
  {
    q: "Que se passe-t-il si vous arrêtez votre activité ?",
    r: "Votre site vitrine vous appartient entièrement et reste en ligne. Pour le tableau de bord, je vous livre toutes vos données en export CSV dans les 30 jours suivant l'arrêt, et je vous aide à migrer vers une solution alternative. Vous n'êtes jamais pris en otage.",
  },
  {
    q: "Est-ce que je suis propriétaire de mon site ?",
    r: "Votre contenu, vos textes, vos photos et votre nom de domaine vous appartiennent à 100%. Le code source reste de mon côté — ce qui me permet d'assurer votre maintenance sans vous facturer chaque correction. Si vous souhaitez en être propriétaire complet un jour, c'est prévu et possible sur devis.",
  },
  {
    q: "Combien de temps pour avoir mon site en ligne ?",
    r: "Pour un site vitrine (Offre Présence) : 10 jours ouvrés à partir de la signature du devis. Pour le Bureau Virtuel complet : 3 à 4 semaines selon la complexité de votre activité.",
  },
  {
    q: "Les 89€/mois couvrent quoi exactement ?",
    r: "L'hébergement, les sauvegardes automatiques, les mises à jour de sécurité, le support technique direct, et les petites modifications de contenu (textes, tarifs, photos). Les nouvelles fonctionnalités importantes font l'objet d'un devis séparé.",
  },
  {
    q: "Puis-je modifier mon site moi-même sans vous appeler ?",
    r: "Pour le Bureau Virtuel, oui — modifier vos textes, photos ou tarifs se fait en quelques clics depuis votre espace, sans toucher au code. Pour un site vitrine simple, je m'en occupe directement sur demande, en général en moins de 24h. Dans tous les cas, vous n'avez pas à vous débrouiller seul.",
  },
]

function Item({ q, r, isOpen, onToggle }: { q: string; r: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-encre/8 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-bold leading-snug transition-colors ${isOpen ? 'text-encre' : 'text-encre/70 group-hover:text-encre'}`}>
          {q}
        </span>
        <span className="shrink-0 mt-0.5">
          {isOpen
            ? <Minus size={18} className="text-vert" strokeWidth={2.5} />
            : <Plus size={18} className="text-encre/30 group-hover:text-encre/60 transition-colors" strokeWidth={2.5} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-encre/55 leading-relaxed">{r}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-fond">
      <div className="container-site px-6 lg:px-24">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 items-start">

          {/* En-tête */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-24"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
              Questions fréquentes
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-encre tracking-tighter leading-tight mb-4">
              Vous avez des doutes. C'est normal.
            </h2>
            <p className="text-encre/55 leading-relaxed mb-6">
              Voici les questions que me posent systématiquement mes clients avant de se lancer.
            </p>
            <a
              href="tel:+33674903653"
              className="inline-flex items-center gap-2 text-sm font-bold text-encre hover:text-vert transition-colors cursor-pointer"
            >
              Une autre question ? → 06 74 90 36 53
            </a>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl px-6 py-2 border border-encre/6"
          >
            {QUESTIONS.map((item, i) => (
              <Item
                key={i}
                q={item.q}
                r={item.r}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
