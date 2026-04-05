'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, Github, MapPin, Clock } from 'lucide-react'
import CountUp from 'react-countup'

const contacts = [
  { icon: Mail, label: 'Email', value: 'code@666code.com', href: 'mailto:code@666code.com' },
  { icon: Send, label: 'Telegram', value: '@triplesixontheblock', href: 'https://t.me/triplesixontheblock' },
  { icon: Github, label: 'GitHub', value: 'github.com/666Code-x', href: 'https://github.com/666Code-x' },
]

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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-666-gray/30 rounded-xl border border-666-red/10 text-center glow-card"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
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
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-666-gray/30 rounded-xl border border-666-red/10 hover:border-666-red/30 transition-all glow-card"
            >
              <contact.icon className="w-8 h-8 text-666-red mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
              <div className="font-semibold text-white group-hover:text-666-red transition-colors">
                {contact.value}
              </div>
            </motion.a>
          ))}
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
