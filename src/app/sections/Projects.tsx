'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, FolderGit2 } from 'lucide-react'

const projects = [
  {
    title: 'Trading Bot',
    description: 'Автоматизированная торговая система для криптовалютных бирж. High-frequency trading на C++.',
    techs: ['C++', 'Python', 'WebSocket'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'CRM System',
    description: 'Корпоративная система управления клиентами с микросервисной архитектурой.',
    techs: ['C#', '.NET', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'IOS Assistant App',
    description: 'Нативное iOS приложение для работы со встроенным AI-ассистентом.',
    techs: ['Swift', 'SwiftUI', 'CoreData'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Data Pipeline',
    description: 'Система обработки больших данных с real-time аналитикой.',
    techs: ['Go', 'Kafka', 'ClickHouse'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Gamesense Helper',
    description: 'Легкий игровой помощник с поддержкой кастомных скриптов и рендерингом на OpenGL.',
    techs: ['C++', 'OpenGL', 'Lua'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'E-commerce API',
    description: 'REST и GraphQL API для крупной e-commerce платформы.',
    techs: ['Java', 'Spring', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: false,
  },
]

const techColors: Record<string, string> = {
  'C++': '#00599C',
  'C#': '#239120',
  'Python': '#3776AB',
  'Java': '#007396',
  'Go': '#00ADD8',
  'Swift': '#FFAC45',
  '.NET': '#512BD4',
  'PostgreSQL': '#336791',
  'MongoDB': '#47A248',
  'WebSocket': '#FF6600',
  'CoreData': '#FF9500',
  'Kafka': '#231F20',
  'ClickHouse': '#FFCC00',
  'OpenGL': '#5586A4',
  'Lua': '#000080',
  'Spring': '#6DB33F',
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Избранные <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Реальные проекты, демонстрирующие экспертизу в различных технологиях
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl glow-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-666-red/10 via-transparent to-666-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <FolderGit2 className="w-10 h-10 text-666-red" />
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-gray-400 hover:text-666-red transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          className="text-gray-400 hover:text-666-red transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-666-red transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full border"
                          style={{
                            borderColor: `${techColors[tech] || '#ff0040'}40`,
                            backgroundColor: `${techColors[tech] || '#ff0040'}15`,
                            color: techColors[tech] || '#ff0040',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-7 rounded-2xl glow-card">
                  <div className="flex items-center justify-between mb-4">
                    <FolderGit2 className="w-9 h-9 text-666-red/70" />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-gray-500 hover:text-666-red transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-500 hover:text-666-red transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-666-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-md"
                        style={{
                          backgroundColor: `${techColors[tech] || '#ff0040'}20`,
                          color: techColors[tech] || '#ff0040',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
