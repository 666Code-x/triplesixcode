'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, Award, Clock, Coffee } from 'lucide-react'

const stats = [
  { icon: Award, value: '200+', label: 'Выполненных проектов' },
  { icon: User, value: '90+', label: 'Довольных клиентов' },
  { icon: Clock, value: '7+', label: 'Лет опыта' },
  { icon: Coffee, value: '∞', label: 'Чашек кофе' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-0 w-1/2 h-96 bg-gradient-to-l from-666-red/10 to-transparent rounded-l-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Обо <span className="gradient-text">мне</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Привет! Я — разработчик с более чем 5-летним опытом создания
                высоконагруженных приложений и систем различной сложности.
              </p>
              <p>
                Специализируюсь на разработке на{' '}
                <span className="text-666-red font-semibold">C++</span>,{' '}
                <span className="text-666-red font-semibold">C#</span>,{' '}
                <span className="text-666-red font-semibold">Python</span>,{' '}
                <span className="text-666-red font-semibold">Java</span>,{' '}
                <span className="text-666-red font-semibold">Go</span> и{' '}
                <span className="text-666-red font-semibold">Swift</span>.
              </p>
              <p>
                От небольших скриптов до корпоративных систем — подхожу к каждому
                проекту с полной отдачей и вниманием к деталям.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-666-gray/50 rounded-lg border border-666-red/20 glow-card"
                >
                  <stat.icon className="w-6 h-6 text-666-red mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-666-gray/50 rounded-2xl p-8 border border-666-red/20 glow-card">
              <h3 className="text-xl font-bold mb-6 text-center">
                Технический <span className="gradient-text">стек</span>
              </h3>

              <div className="space-y-4">
                {[
                  { name: 'C++', level: 95, color: '#00599C' },
                  { name: 'C#', level: 90, color: '#239120' },
                  { name: 'Python', level: 88, color: '#3776AB' },
                  { name: 'Java', level: 85, color: '#007396' },
                  { name: 'Go', level: 80, color: '#00ADD8' },
                  { name: 'Swift', level: 75, color: '#FFAC45' },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: skill.color }}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-666-black rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 10px ${skill.color}50`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dashed border-666-red/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
