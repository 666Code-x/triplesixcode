'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cpu, 
  Shield,
  Terminal,
  Layers
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Разработка ПО',
    description: 'Создание программного обеспечения любой сложности на C++, C#, Python, Java, Go, Swift.',
    techs: ['C++', 'C#', 'Python'],
  },
  {
    icon: Database,
    title: 'Базы данных',
    description: 'Проектирование и оптимизация баз данных. SQL и NoSQL решения для ваших проектов.',
    techs: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: Globe,
    title: 'Веб-разработка',
    description: 'Разработка серверной части веб-приложений, API, микросервисов.',
    techs: ['FastAPI', 'Spring', 'ASP.NET'],
  },
  {
    icon: Smartphone,
    title: 'Мобильные приложения',
    description: 'Нативная разработка iOS приложений на Swift с современным UI.',
    techs: ['Swift', 'SwiftUI', 'UIKit'],
  },
  {
    icon: Cpu,
    title: 'Системное ПО',
    description: 'Разработка драйверов, встраиваемых систем, низкоуровневого ПО на C/C++.',
    techs: ['C', 'C++', 'Assembly'],
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Аудит кода, тестирование на проникновение, реализация защитных механизмов.',
    techs: ['Penetration Testing', 'Cryptography'],
  },
  {
    icon: Terminal,
    title: 'Автоматизация',
    description: 'Создание скриптов и инструментов для автоматизации рутинных задач.',
    techs: ['Python', 'Bash', 'PowerShell'],
  },
  {
    icon: Layers,
    title: 'Консультации',
    description: 'Технические консультации, code review, помощь в выборе архитектуры.',
    techs: ['Architecture', 'Review', 'Mentoring'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Услуги <span className="gradient-text">666.CODE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Полный спектр разработческих услуг для реализации ваших идей любой сложности
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl glow-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-666-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mb-5 rounded-xl bg-666-red/20 flex items-center justify-center"
                  >
                    <service.icon className="w-8 h-8 text-666-red" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-666-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-gray-400 border border-666-red/10 rounded bg-666-black/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-666-red/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
