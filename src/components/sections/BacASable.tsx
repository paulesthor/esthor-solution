import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Eye, EyeOff, Lock, MapPin } from 'lucide-react'

// URL du bureau virtuel de démonstration
// → En production : remplacer par l'URL deployée (ex: https://demo.esthor-solution.fr)
const DEMO_URL = `${import.meta.env.BASE_URL}demo/?demo=true`

export default function BacASable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [showPwd, setShowPwd] = useState(false)

  return (
    <section id="bac-a-sable" className="section-padding bg-encre overflow-hidden">
      <div className="container-site px-6 lg:px-24">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Colonne gauche : Qui je suis ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-6">
              Le fondateur
            </span>

            <blockquote className="text-3xl md:text-4xl font-extrabold text-fond tracking-tight leading-tight mb-8">
              "Je code pour ceux qui travaillent dur."
            </blockquote>

            <div className="space-y-4 text-fond/55 leading-relaxed">
              <p>
                J'ai fondé Esthor Solution en partant d'un constat simple : la majorité des indépendants paient trop cher pour des usines à gaz informatiques qu'ils n'utilisent qu'à 10%.
              </p>
              <p>
                Je suis un artisan du web. Mon but n'est pas de vous vendre un abonnement de plus, mais de vous rendre les 5 heures par semaine que vous perdez sur l'administratif.
              </p>
              <p className="text-fond/80 font-semibold">
                Pas de plateforme téléphonique délocalisée. Vous avez un problème ? Vous m'appelez directement.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-extrabold text-fond tracking-tight">Paul Esthor</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin size={11} className="text-vert" />
                  <p className="text-sm text-fond/40 font-medium">Développeur indépendant · Niort</p>
                </div>
              </div>
              <a
                href="tel:+33674903653"
                className="flex items-center gap-2 px-5 py-2.5 border border-fond/20 text-fond/70 text-sm font-semibold rounded-xl hover:bg-fond/10 hover:text-fond transition-all duration-200 cursor-pointer"
              >
                <Phone size={14} />
                06 74 90 36 53
              </a>
            </div>
          </motion.div>

          {/* ── Colonne droite : Démo ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
              Démonstration
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-fond tracking-tight leading-tight mb-3">
              Ne me croyez pas sur parole.
            </h2>
            <p className="text-fond/50 text-sm leading-relaxed mb-8">
              Connectez-vous à l'espace de démonstration <strong className="text-fond/80">Niort Rénov'</strong> et testez le tableau de bord vous-même.
            </p>

            {/* Modale de connexion */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 border border-white shadow-2xl shadow-encre/30">

              <div className="flex items-center gap-3 mb-7">
                <div className="relative w-9 h-9 bg-encre rounded-xl flex items-center justify-center shrink-0">
                  <span className="absolute top-1 right-1 w-2 h-2 bg-vert rounded-full" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-encre/40">Entreprise de démonstration</p>
                  <p className="text-sm font-extrabold text-encre tracking-tight">Niort Rénov'</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-bold text-encre/50 uppercase tracking-wide mb-1.5">
                  Adresse email
                </label>
                <input
                  type="email"
                  value="admin@bureauvirtuel.fr"
                  readOnly
                  className="w-full px-4 py-2.5 rounded-xl bg-fond border border-encre/10 text-encre text-sm font-medium cursor-default focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-bold text-encre/50 uppercase tracking-wide mb-1.5">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    value="admin2026"
                    readOnly
                    className="w-full px-4 py-2.5 pr-10 rounded-xl bg-fond border border-encre/10 text-encre text-sm font-medium cursor-default focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-encre/30 hover:text-encre/60 transition-colors cursor-pointer"
                    aria-label={showPwd ? 'Masquer' : 'Afficher'}
                  >
                    {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-encre text-fond text-sm font-bold rounded-2xl hover:bg-encre/80 transition-colors duration-200 cursor-pointer flex items-center justify-center"
              >
                Lancer la simulation
              </a>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-encre/30 font-medium">
                <Lock size={10} strokeWidth={2} />
                Données fictives — aucun risque, aucun compte réel
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
