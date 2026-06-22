import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const PROJETS = [
  {
    nom: "Emylas Animation",
    categorie: "Animation sportive · Rhône-Alpes",
    description: "Une carte de visite digitale qui travaille 24h/24. Les clients trouvent Emylas sur Google, découvrent ses prestations et envoient une demande de devis directement depuis le site.",
    img: `${import.meta.env.BASE_URL}assets/emylas.png`,
    url: "https://www.emylas.fr",
    offre: "Offre Présence",
    tarif: "~800 €",
  },
  {
    nom: "Mathilde Gesta",
    categorie: "Tapissière artisan · Occitanie",
    description: "Mathilde gère son catalogue de créations et ses commandes clients depuis un espace personnel sécurisé — sans passer par email ou Excel.",
    img: `${import.meta.env.BASE_URL}assets/mathilde.png`,
    url: null,
    offre: "Bureau Virtuel",
    tarif: "~2 500 €",
  },
  {
    nom: "Moment d'Évasion",
    categorie: "Massage & bien-être · Montamisé",
    description: "La praticienne gère tout depuis son téléphone : elle modifie ses textes et photos elle-même, voit ses rendez-vous synchronisés avec Google Agenda, bloque ses congés et répond à ses clients via une messagerie intégrée. Ses clients réservent en ligne, 7j/7.",
    img: `${import.meta.env.BASE_URL}assets/moment.png`,
    url: "https://paulesthor.github.io/moment/",
    offre: "Bureau Virtuel Premium",
    tarif: "~4 500 €",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [emylas, mathilde, moment] = PROJETS

  return (
    <section id="portfolio" className="section-padding bg-fond">
      <div className="container-site px-6 lg:px-24">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-encre tracking-tighter leading-tight">
              Ils m'ont fait confiance.
            </h2>
          </div>
          <p className="text-encre/50 font-medium md:max-w-xs md:text-right">
            Des sites conçus pour être le premier vendeur de ces artisans et commerçants.
          </p>
        </motion.div>

        {/* ── Grille asymétrique : Emylas + Mathilde ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">

          {/* Emylas — col gauche */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group cursor-pointer"
          >
            <a href={emylas.url!} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative mb-6 shadow-md border border-encre/8">
                <img
                  src={emylas.img}
                  alt={`Site ${emylas.nom}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-encre/0 group-hover:bg-encre/10 transition-colors duration-300" />
                <div className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <ArrowRight size={16} className="text-encre" />
                </div>
              </div>
              <InfoProjet projet={emylas} />
            </a>
          </motion.div>

          {/* Mathilde — col droite, décalée vers le bas */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="group cursor-default md:mt-16"
          >
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative mb-6 shadow-md border border-encre/8">
              <img
                src={mathilde.img}
                alt={`Site ${mathilde.nom}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <InfoProjet projet={mathilde} />
          </motion.div>
        </div>

        {/* ── Moment d'Évasion — carte large featured ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="group"
        >
          <a href={moment.url!} target="_blank" rel="noopener noreferrer" className="block">
            <div className="w-full aspect-[16/6] rounded-[2rem] overflow-hidden relative mb-6 shadow-md border border-encre/8">
              <img
                src={moment.img}
                alt={`Site ${moment.nom}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-encre/0 group-hover:bg-encre/10 transition-colors duration-300" />

              {/* Badge premium */}
              <div className="absolute top-5 left-5 px-3 py-1.5 bg-vert text-white text-xs font-bold rounded-full shadow-lg">
                Bureau Virtuel Premium
              </div>

              <div className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <ArrowRight size={16} className="text-encre" />
              </div>
            </div>
            <InfoProjet projet={moment} />
          </a>
        </motion.div>

        {/* Slot vide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 rounded-2xl border-2 border-dashed border-encre/10 p-10 text-center"
        >
          <p className="text-sm font-semibold text-encre/30">
            Votre entreprise ici — <a href="#rdv" className="text-vert hover:underline">parlons-en</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function InfoProjet({ projet }: { projet: typeof PROJETS[number] }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold text-encre/40 uppercase tracking-wide mb-1">{projet.categorie}</p>
        <h3 className="text-xl font-extrabold text-encre mb-2 tracking-tight">{projet.nom}</h3>
        <p className="text-sm text-encre/55 leading-relaxed">{projet.description}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-xs font-semibold text-encre/30">{projet.offre}</p>
        <p className="text-lg font-extrabold text-encre tracking-tight">{projet.tarif}</p>
      </div>
    </div>
  )
}
