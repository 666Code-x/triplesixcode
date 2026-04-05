'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal } from 'lucide-react'

const codeLines = [
  'class 666.CODE {',
  '  name = "TRIPLESIX";',
  '  languages = ["C", "C++", "C#", "Python", "Java", "Go", "Swift", "HTML", "CSS", "JS", "TS", "ASM"];',
  '  skills = ["React", "Vue", "Node", "API", "Reverse engineering", "Pentesting", "AI"];',
  '  createAwesomeProjects();',
  '}',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex]
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentLine[charIndex])
          setCharIndex((prev) => prev + 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + '\n')
          setLineIndex((prev) => prev + 1)
          setCharIndex(0)
        }, 300)
        return () => clearTimeout(timeout)
      }
    }
  }, [lineIndex, charIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-666-red/20 rounded-full blur-3xl morph-shape floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-666-dark-red/20 rounded-full blur-3xl morph-shape floating" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Terminal className="w-5 h-5 text-666-red" />
            <span className="text-666-red text-sm font-mono">Full-Stack Developer</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">666.CODE</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Профессиональная разработка программного обеспечения на заказ.
            <br />
            <span className="text-666-red">C++ · C# · Python · Java · Go · Swift</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#order"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-666-red hover:bg-666-red/90 text-white font-semibold rounded-lg glow-red text-center"
            >
              Оставить заявку
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-666-red/50 hover:border-666-red text-666-red hover:bg-666-red/10 font-semibold rounded-lg transition-all text-center"
            >
              Посмотреть проекты
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-666-gray rounded-lg overflow-hidden glow-card">
            <div className="bg-666-black/50 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400">dev.ts</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <pre className="text-gray-300 whitespace-pre-wrap typing-cursor">
                {typedText}
              </pre>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-666-red/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-666-red/30">
            <span className="text-666-red text-xs font-mono">{'<code />'}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 z-0"
        style={{ top: '850px' }}
      >
        <ChevronDown className="w-32 h-32 text-666-red opacity-80" />
      </motion.div>
    </section>
  )
}
