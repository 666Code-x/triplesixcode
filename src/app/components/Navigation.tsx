'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navItems = [
  { name: 'Главная', href: '#hero' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Отзывы', href: '#testimonials' },
  { name: 'Заказать', href: '#order' },
  { name: 'Контакты', href: '#contacts' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3 }
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.href === activeSection)
    const activeNav = navRefs.current[activeIndex]
    if (activeNav) {
      const rect = activeNav.getBoundingClientRect()
      const parentRect = activeNav.parentElement?.getBoundingClientRect()
      if (parentRect) {
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        })
      }
    }
  }, [activeSection])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href) as Element | null
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div 
        className={`max-w-5xl mx-auto transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl shadow-2xl shadow-666-red/5 border border-666-red/20' 
            : 'bg-[#0a0a0f]/40 backdrop-blur-md border border-white/5'
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between h-14 px-6">
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
          >
            <Code2 className="w-6 h-6 text-666-red" />
            <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              666.CODE
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 relative">
            <motion.div
              className="absolute h-8 bg-666-red/15 border border-666-red/30 rounded-lg"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                ref={(el: HTMLAnchorElement | null) => { navRefs.current[index] = el }}
                href={item.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative px-4 py-2 text-sm transition-colors z-10 ${
                  activeSection === item.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-5xl"
          >
            <div className="bg-[#0a0a0f]/95 backdrop-blur-xl rounded-2xl border border-666-red/20 p-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`block px-4 py-3 rounded-xl transition-colors ${
                    activeSection === item.href
                      ? 'text-white bg-666-red/20'
                      : 'text-gray-300 hover:text-white hover:bg-666-red/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
