'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Github, MapPin, Clock, MessageSquare, Loader2, CheckCircle } from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
  { value: 200, suffix: '+', label: 'Проектов' },
  { value: 90, suffix: '+', label: 'Клиентов' },
  { value: 98, suffix: '%', label: 'Успешных сдач' },
  { value: 24, suffix: '/7', label: 'Поддержка' },
]

export default function Contacts() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка отправки')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка отправки')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section id="contacts" ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Связаться <span className="gradient-text">со мной</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Готов обсудить ваш проект в любое время
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 py-28 bg-666-gray/30 rounded-xl border border-666-red/10 text-center glow-card min-h-[180px] flex flex-col justify-center items-center"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                {hasAnimated ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-lg text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-666-gray/30 rounded-xl border border-666-red/20 text-center glow-card"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Сообщение отправлено!</h3>
              <p className="text-gray-400 mb-6">
                Спасибо за обращение. Я свяжусь с вами в ближайшее время.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-666-red/20 hover:bg-666-red/30 text-666-red rounded-lg transition-colors"
              >
                Отправить ещё
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-666-gray/30 rounded-xl border border-666-red/20 glow-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Отправить <span className="gradient-text">сообщение</span>
              </h3>

              <div className="space-y-8 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-8 py-4 h-14 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Ваш email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-8 py-4 h-14 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors text-lg"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ваше сообщение..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-8 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors resize-none text-lg"
                  />
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-666-red hover:bg-666-red/90 text-white font-semibold rounded-lg glow-red flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      Отправить
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          <motion.a
            href="https://t.me/triplesixontheblock"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 bg-666-gray/30 rounded-xl border border-666-red/10 hover:border-666-red/30 transition-all glow-card text-center flex items-center justify-center gap-4"
          >
            <Send className="w-8 h-8 text-666-red group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-500">Telegram</div>
              <div className="font-semibold text-white group-hover:text-666-red transition-colors text-lg">
                @triplesixontheblock
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/666Code-x"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 bg-666-gray/30 rounded-xl border border-666-red/10 hover:border-666-red/30 transition-all glow-card text-center flex items-center justify-center gap-4"
          >
            <Github className="w-8 h-8 text-666-red group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-500">GitHub</div>
              <div className="font-semibold text-white group-hover:text-666-red transition-colors text-lg">
                666Code-x
              </div>
            </div>
          </motion.a>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-666-red/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">666.CODE</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-666-red" />
                <span>Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-666-red" />
                <span>UTC+3 (MSK)</span>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} 666.CODE. All rights reserved.
            </div>
          </div>

          <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-666-red/50 to-transparent rounded-full" />
        </motion.footer>
      </div>
    </section>
  )
}
