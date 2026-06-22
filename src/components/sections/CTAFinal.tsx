import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Calendar, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

// ▼ REMPLACE PAR TA CLÉ WEB3FORMS (web3forms.com → "Create Access Key")
const WEB3FORMS_KEY = '1c9141a9-d7d5-4717-ab58-483833f0fd2e'

const CRENEAUX = [
  { jour: 'Lun', date: '23 juin', slots: ['09h00', '14h30', '16h00'] },
  { jour: 'Mar', date: '24 juin', slots: ['10h00', '11h30'] },
  { jour: 'Mer', date: '25 juin', slots: ['09h30', '15h00', '17h00'] },
  { jour: 'Jeu', date: '26 juin', slots: ['10h30', '14h00'] },
]

type Etape = 'slot' | 'contact' | 'sending' | 'success' | 'error'

export default function CTAFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [etape, setEtape] = useState<Etape>('slot')
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')

  async function handleEnvoyer(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedSlot || !nom.trim() || !tel.trim()) return
    setEtape('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouvelle demande de RDV — ${nom}`,
          from_name: nom,
          message: `Nom : ${nom}\nTéléphone : ${tel}\nCréneau souhaité : ${selectedSlot}`,
          // Champs cachés pour Web3Forms
          botcheck: '',
        }),
      })

      const data = await res.json()
      setEtape(data.success ? 'success' : 'error')
    } catch {
      setEtape('error')
    }
  }

  return (
    <section id="rdv" className="section-padding bg-fond">
      <div className="container-site px-6 lg:px-24">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-vert mb-4">
            Passez à l'action
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-encre tracking-tighter leading-tight mb-4">
            Prêt à reprendre le contrôle ?
          </h2>
          <p className="text-lg text-encre/55 leading-relaxed">
            Un échange téléphonique de 15 minutes. Gratuit et sans engagement.
            Je vous explique ce que je peux faire pour votre entreprise, concrètement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {/* ── Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white rounded-3xl p-6 border border-encre/8"
          >

            {/* ÉTAPE 1 — Choix du créneau */}
            {(etape === 'slot' || etape === 'contact') && (
              <>
                <div className="flex items-center gap-2 mb-5">
                  <Calendar size={16} className="text-encre/40" />
                  <p className="text-sm font-bold text-encre">
                    {etape === 'slot' ? 'Choisissez un créneau' : 'Vos coordonnées'}
                  </p>
                  {selectedSlot && etape === 'contact' && (
                    <button
                      onClick={() => setEtape('slot')}
                      className="ml-auto text-xs text-encre/40 hover:text-encre transition-colors cursor-pointer"
                    >
                      ← Modifier
                    </button>
                  )}
                </div>

                {etape === 'slot' && (
                  <>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {CRENEAUX.map(jour => (
                        <div key={jour.jour}>
                          <p className="text-xs font-bold text-encre/40 uppercase tracking-wide mb-2">
                            {jour.jour} {jour.date}
                          </p>
                          <div className="flex flex-col gap-1.5">
                            {jour.slots.map(slot => {
                              const id = `${jour.jour} ${jour.date} à ${slot}`
                              return (
                                <button
                                  key={id}
                                  onClick={() => setSelectedSlot(id)}
                                  className={`py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                                    selectedSlot === id
                                      ? 'bg-vert text-white'
                                      : 'bg-fond text-encre/60 hover:bg-encre/5 hover:text-encre'
                                  }`}
                                >
                                  {slot}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => selectedSlot && setEtape('contact')}
                      disabled={!selectedSlot}
                      className="w-full py-3 bg-encre text-fond text-sm font-bold rounded-2xl transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-encre/80 flex items-center justify-center gap-2"
                    >
                      Continuer
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {etape === 'contact' && (
                  <form onSubmit={handleEnvoyer} className="flex flex-col gap-4">
                    {/* Créneau sélectionné */}
                    <div className="px-4 py-3 bg-vert/10 rounded-xl text-sm font-semibold text-vert">
                      {selectedSlot}
                    </div>

                    {/* Nom */}
                    <div>
                      <label className="block text-xs font-bold text-encre/50 uppercase tracking-wide mb-1.5">
                        Votre nom
                      </label>
                      <input
                        type="text"
                        required
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-encre/10 text-encre text-sm font-medium bg-fond focus:outline-none focus:border-vert transition-colors"
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-xs font-bold text-encre/50 uppercase tracking-wide mb-1.5">
                        Votre téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={tel}
                        onChange={e => setTel(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl border border-encre/10 text-encre text-sm font-medium bg-fond focus:outline-none focus:border-vert transition-colors"
                      />
                    </div>

                    {/* Anti-spam Web3Forms (caché) */}
                    <input type="checkbox" name="botcheck" className="hidden" />

                    <button
                      type="submit"
                      className="w-full py-3 bg-encre text-fond text-sm font-bold rounded-2xl hover:bg-encre/80 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      Confirmer ma demande
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </button>

                    <p className="text-xs text-encre/30 text-center">
                      Je vous rappelle dans les 24h pour confirmer le créneau.
                    </p>
                  </form>
                )}
              </>
            )}

            {/* ÉTAPE — Envoi en cours */}
            {etape === 'sending' && (
              <div className="text-center py-10">
                <Loader2 size={32} className="text-vert mx-auto mb-3 animate-spin" />
                <p className="text-sm font-semibold text-encre/60">Envoi en cours…</p>
              </div>
            )}

            {/* ÉTAPE — Succès */}
            {etape === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 size={40} className="text-vert mx-auto mb-4" />
                <p className="font-extrabold text-encre text-lg mb-2">Demande envoyée !</p>
                <p className="text-sm text-encre/50 leading-relaxed">
                  Je vous rappelle au <strong>{tel}</strong> dans les 24h pour confirmer votre créneau.
                </p>
              </motion.div>
            )}

            {/* ÉTAPE — Erreur */}
            {etape === 'error' && (
              <div className="text-center py-8">
                <p className="font-bold text-encre mb-2">Une erreur s'est produite.</p>
                <p className="text-sm text-encre/50 mb-5">
                  Appelez-moi directement au 06 74 90 36 53, je vous réponds rapidement.
                </p>
                <button
                  onClick={() => setEtape('slot')}
                  className="text-sm font-bold text-vert hover:underline cursor-pointer"
                >
                  Réessayer
                </button>
              </div>
            )}
          </motion.div>

          {/* ── Alternative téléphone ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-encre rounded-3xl p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-fond/30 mb-3">
                  Vous préférez appeler ?
                </p>
                <p className="text-2xl font-extrabold text-fond tracking-tight mb-2">
                  06 74 90 36 53
                </p>
                <p className="text-sm text-fond/50 leading-relaxed">
                  Disponible en fin de journée et le week-end. Je réponds toujours dans les 24h.
                </p>
              </div>
              <a
                href="tel:+33674903653"
                className="mt-6 flex items-center justify-center gap-2 py-3 bg-vert text-white text-sm font-bold rounded-2xl hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Phone size={14} />
                Appeler maintenant
              </a>
            </div>

            <div className="bg-white rounded-2xl px-5 py-4 border border-encre/6 text-sm text-encre/50 font-medium text-center">
              Sans engagement · Réponse sous 24h · Échange de 15 min
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
