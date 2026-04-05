'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const allTestimonials = [
  {
    id: 1,
    name: 'Александр К.',
    role: 'CEO, TechStart',
    content: '666.CODE разработал для нас высоконагруженный бэкенд на Go. Отличное качество кода и соблюдение всех сроков. Рекомендую!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Мария В.',
    role: 'Product Manager, FinCorp',
    content: 'Работа по созданию CRM-системы была выполнена на высшем уровне. Профессиональный подход к архитектуре и чистый код.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Дмитрий С.',
    role: 'Founder, GameDev Studio',
    content: 'Игровой движок на C++ превзошел все ожидания. Отличная производительность и продуманная архитектура.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Елена М.',
    role: 'CTO, E-commerce Platform',
    content: 'API на Java с микросервисной архитектурой работает безупречно. Отличная документация и поддержка.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Иван П.',
    role: 'Founder, CryptoExchange',
    content: 'Торговый бот на C++ обрабатывает тысячи транзакций в секунду. Профессионализм на высшем уровне!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Наталья К.',
    role: 'Head of IT, LogiTech',
    content: 'Система обработки данных на Python справляется с нагрузкой в 10 раз лучше предыдущего решения.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Сергей В.',
    role: 'Director, MedSoft',
    content: 'iOS-приложение для клиники вышло в топ-10 медицинских приложений. Спасибо за отличную работу!',
    rating: 5,
  },
  {
    id: 8,
    name: 'Ольга Д.',
    role: 'CTO, EduPlatform',
    content: 'Образовательная платформа на .NET обслуживает миллионы пользователей без единого сбоя.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % allTestimonials.length)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = allTestimonials[currentIndex]

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % allTestimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <section id="testimonials" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-666-red/5 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Что говорят заказчики о сотрудничестве с 666.CODE
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPrev}
            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10"
            style={{ 
              background: 'rgba(255, 0, 64, 0.15)', 
              border: '2px solid rgba(255, 0, 64, 0.6)', 
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(255, 0, 64, 0.3)'
            }}
          >
            <ChevronLeft className="w-8 h-8" style={{ color: '#ff0040' }} />
          </button>

          <div className="flex-1 overflow-hidden max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="testimonial-card p-8 md:p-12 rounded-2xl backdrop-blur-sm"
                style={{ minHeight: '280px' }}
              >
                <div className="flex flex-col items-center text-center">
                  <Quote className="w-12 h-12 text-666-red/30 mb-6" />
                  <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed max-w-2xl">
                    "{currentTestimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-666-red text-666-red" />
                    ))}
                  </div>
                  <div className="font-semibold text-white text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentTestimonial.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10"
            style={{ 
              background: 'rgba(255, 0, 64, 0.15)', 
              border: '2px solid rgba(255, 0, 64, 0.6)', 
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(255, 0, 64, 0.3)'
            }}
          >
            <ChevronRight className="w-8 h-8" style={{ color: '#ff0040' }} />
          </button>
        </div>

        <div className="flex justify-center" style={{ marginTop: '2rem', gap: '0.75rem' }}>
          {allTestimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              animate={{
                width: index === currentIndex ? 32 : 8,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                height: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
                backgroundColor: index === currentIndex ? '#ff0040' : 'rgba(255, 0, 64, 0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
