import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'

export default function Manifeste() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="manifeste" className="section-padding bg-encre overflow-hidden">
      <div className="container-site px-6 lg:px-24">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo polaroïd */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Cadre décalé derrière */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-vert/30"
                style={{ transform: 'rotate(-3deg) translate(10px, 10px)' }}
                aria-hidden="true"
              />
              {/* Polaroïd */}
              <div
                className="relative bg-white p-3 pb-12 rounded-2xl shadow-2xl"
                style={{ transform: 'rotate(1.5deg)' }}
              >
                {/* Photo placeholder */}
                <img
                  src="/assets/paul.webp"
                  alt="Paul Esthor — Développeur indépendant"
                  className="w-64 h-80 rounded-xl object-cover object-top"
                />
                {/* Badge localisation */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 bg-encre rounded-full border border-vert/20">
                  <MapPin size={11} className="text-vert" />
                  <span className="text-xs font-bold text-fond/80">Basé en Occitanie</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
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

            {/* Signature + contact */}
            <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-extrabold text-fond tracking-tight">Paul Esthor</p>
                <p className="text-sm text-fond/40 font-medium">Développeur indépendant · Artisan du web</p>
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
        </div>
      </div>
    </section>
  )
}
