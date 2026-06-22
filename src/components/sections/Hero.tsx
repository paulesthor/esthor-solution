import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText, Calendar, BarChart2, CheckCircle2, TrendingUp } from 'lucide-react'

/* ── Cartes flottantes ── */
function CardFacture() {
  return (
    <div className="glass rounded-2xl p-4 w-48">
      <div className="flex items-center gap-2 mb-3">
        <FileText size={14} className="text-encre/50" strokeWidth={2} />
        <span className="text-xs font-semibold text-encre/50 uppercase tracking-wide">Facture générée</span>
      </div>
      <p className="text-sm font-semibold text-encre mb-0.5">Bâti-Sud SAS</p>
      <p className="text-2xl font-extrabold text-encre tracking-tight">2 400 €</p>
      <div className="flex items-center gap-1.5 mt-2.5">
        <CheckCircle2 size={13} className="text-vert" />
        <span className="text-xs font-semibold text-vert">Envoyée par email</span>
      </div>
    </div>
  )
}

function CardRDV() {
  return (
    <div className="glass rounded-2xl p-4 w-48">
      <div className="flex items-center gap-2 mb-3">
        <Calendar size={14} className="text-encre/50" strokeWidth={2} />
        <span className="text-xs font-semibold text-encre/50 uppercase tracking-wide">Nouveau RDV</span>
      </div>
      <p className="text-sm font-semibold text-encre mb-0.5">Marie Dupont</p>
      <p className="text-lg font-bold text-encre">Mardi · 14h30</p>
      <span className="inline-block mt-2 px-2.5 py-1 bg-vert/10 rounded-lg text-xs font-semibold text-vert">
        Confirmé
      </span>
    </div>
  )
}

function CardVisites() {
  const bars = [40, 65, 50, 80, 70, 90, 85]
  return (
    <div className="glass rounded-2xl p-4 w-48">
      <div className="flex items-center gap-2 mb-3">
        <BarChart2 size={14} className="text-encre/50" strokeWidth={2} />
        <span className="text-xs font-semibold text-encre/50 uppercase tracking-wide">Visites ce mois</span>
      </div>
      <div className="flex items-end gap-0.5 h-9 mb-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-vert/25" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-extrabold text-encre tracking-tight">1 284</span>
        <div className="flex items-center gap-1 text-vert">
          <TrendingUp size={13} />
          <span className="text-xs font-bold">+18%</span>
        </div>
      </div>
    </div>
  )
}

/* ── Variantes framer-motion ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
})

/* ── Hero ── */
export default function Hero() {
  const reduced = useReducedMotion() ?? false

  return (
    <section id="hero" className="relative min-h-screen bg-fond flex items-center overflow-hidden">

      {/* Blob ambiance */}
      {!reduced && (
        <div
          className="animate-blob absolute top-24 left-1/4 w-[500px] h-[500px] bg-vert/10 rounded-full mix-blend-multiply blur-3xl opacity-60 pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className="w-full px-6 md:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Colonne gauche : Texte ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item(reduced)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-encre/10 text-sm font-semibold text-encre/70 mb-8">
                <span className="w-2 h-2 rounded-full bg-vert animate-pulse shrink-0" aria-hidden="true" />
                Développeur & Partenaire Digital à Niort
              </span>
            </motion.div>

            {/* H1 avec gradient sur le dernier mot */}
            <motion.h1
              variants={item(reduced)}
              className="text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold text-encre leading-[1.05] tracking-tighter mb-6"
            >
              Le centre de commande<br className="hidden sm:block" />
              de votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-encre/60 to-encre/25">
                entreprise.
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={item(reduced)}
              className="text-lg md:text-xl text-encre/55 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              De la vitrine ultra-rapide au tableau de bord complet.
              <br className="hidden md:block" />
              Une technologie sur-mesure,{' '}
              <strong className="text-encre font-semibold">sans abonnement caché.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item(reduced)}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#bac-a-sable"
                className="group flex items-center gap-2 px-7 py-3.5 bg-vert text-white text-base font-bold rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-vert/25 cursor-pointer"
              >
                Tester l'outil (Démo)
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </a>
              <a
                href="#offres"
                className="flex items-center gap-2 px-7 py-3.5 border-2 border-encre/20 text-encre text-base font-bold rounded-full hover:border-encre/50 hover:bg-encre/5 transition-all duration-200 cursor-pointer"
              >
                J'ai besoin d'un site vitrine
              </a>
            </motion.div>
          </motion.div>

          {/* ── Colonne droite : Photo (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-encre/8 group">
              <img
                src={`${import.meta.env.BASE_URL}assets/paul.webp`}
                alt="Paul Esthor — Artisan du Web"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-encre/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-extrabold text-2xl tracking-tight leading-tight">Artisan du Web.</p>
                <p className="text-white/60 text-sm font-medium mt-1">Conçu et développé à Niort</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Cartes mobile : carrousel horizontal ── */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="lg:hidden flex gap-4 mt-16 overflow-x-auto pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
          aria-label="Aperçu des fonctionnalités"
        >
          <div className="snap-start shrink-0 pl-6 first:pl-6"><CardFacture /></div>
          <div className="snap-start shrink-0"><CardRDV /></div>
          <div className="snap-start shrink-0 pr-6"><CardVisites /></div>
        </motion.div>
      </div>
    </section>
  )
}
