'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, DollarSign, Calendar } from 'lucide-react'

const languages = [
  { 
    id: 'cpp', 
    name: 'C++',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6" fill="currentColor">
        <path d="M117.4 30.5l-8.3-14.4c-1.5-2.6-4.2-4.2-7.1-4.2H25.5c-2.9 0-5.6 1.6-7.1 4.2l-8.3 14.4c-1.5 2.6-1.5 5.8 0 8.4l41.6 72c1.5 2.6 4.2 4.2 7.1 4.2h14.4c2.9 0 5.6-1.6 7.1-4.2l41.6-72c1.5-2.6 1.5-5.8 0-8.4zM82.3 19L64 50.9 45.7 19h36.6zM56.2 63.4L36.7 29.5h39.1L56.2 63.4zM41.6 19L25.9 46.2 15.3 27.8 22.6 15h19zm-12.8 32.8l17.7 30.7-30.4-17.6 12.7-13.1zM38.6 81.1l25.4-44 25.4 44H38.6zm50.8-6.3l17.7-30.7 12.7 13.1-30.4 17.6zm8.4-35.3L89.4 19h19l7.3 12.8-13.7 7.7z"/>
      </svg>
    )
  },
  { 
    id: 'csharp', 
    name: 'C#',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6" fill="currentColor">
        <path d="M117.5 5.5h-107C4.7 5.5 0 10.2 0 16v96c0 5.8 4.7 10.5 10.5 10.5h107c5.8 0 10.5-4.7 10.5-10.5V16c0-5.8-4.7-10.5-10.5-10.5zM57.6 95.5c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4c10.3 0 19.4 5.1 24.8 12.9l-10.6 6.1c-2.9-4.3-7.8-7.1-14.2-7.1-10.6 0-19.2 8.6-19.2 19.2s8.6 19.2 19.2 19.2c6.4 0 11.3-2.8 14.2-7.1l10.6 6.1c-5.4 7.8-14.5 12.9-24.8 12.9zm35.3-4.7h-6.2v-6.2h-7.1v6.2h-6.2v-7.1h-6.2v-6.2h6.2v-7.1h-6.2v-6.2h6.2v-6.2h6.2v6.2h7.1v-6.2h6.2v7.1h6.2v6.2h-6.2v7.1h6.2v6.2h-6.2v6.2zM99.9 66.6h-7.1v7.1h7.1v-7.1z"/>
      </svg>
    )
  },
  { 
    id: 'python', 
    name: 'Python',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#3776AB" d="M63.9.5c-22.8 0-21.3 9.9-21.3 9.9l.1 10.3h21.7v3.1H42.4S26.3 24.4 26.3 47.2c0 0-1.8 18.4 11.7 18.4h7v-8.8s-.6-11.5 11.3-11.5h21.7s10.9.2 10.9-10.5V11.5S86.9.5 63.9.5zM51.7 7.5a3.8 3.8 0 11-.1 7.6 3.8 3.8 0 01.1-7.6z"/>
        <path fill="#FFD43B" d="M64.3 127.4c22.8 0 21.3-9.9 21.3-9.9l-.1-10.3H63.8v-3.1h21.7s16.1-1.7 16.1-24.5c0 0 1.8-18.4-11.7-18.4h-7v8.8s.6 11.5-11.3 11.5H50.9S40 80.8 40 91.1v21.8s-.3 14.5 24.3 14.5zm12.2-7a3.8 3.8 0 11.1-7.6 3.8 3.8 0 01-.1 7.6z"/>
      </svg>
    )
  },
  { 
    id: 'java', 
    name: 'Java',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#007396" d="M47.8 86.9c-4.9 7.1-14.5 6.8-14.5 6.8s16.2 11.8 28.8-4.2c11.8-14.9 5.2-23.8 5.2-23.8s-4.3 9.7-19.5 21.2z"/>
        <path fill="#007396" d="M85.6 79.1c-.5 3.4-3.6 6.6-3.6 6.6s10.9-2.2 10.9-12.4-6.6-10.8-6.6-10.8-1.2 9.7-.7 16.6zM47.9 47.7S39.1 47 35.4 50.4c-2.9 2.7-3.8 6.9-.9 9.9 6.4 6.6 21.6 2.9 21.6 2.9s-6.6-6.6-8.2-15.5zM109.4 68c-5.7-4.1-17.5-4.1-17.5-4.1s9.8 6.4 10.8 18.4c.4 4.7 3.3 8.1 7.5 8.1 4.7 0 8.5-3.8 8.5-8.5 0-3.4-1.3-6.5-9.3-13.9z"/>
        <path fill="#ED8B00" d="M82.8 59.8c-4.9-2.9-11.4-3.1-11.4-3.1s5.7 5.9 6.3 16c.2 3.6 2.6 6.7 6.1 7.1 4 .5 7.7-2.5 8.2-6.5.3-2.6-.4-5.2-9.2-13.5z"/>
      </svg>
    )
  },
  { 
    id: 'go', 
    name: 'Go',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#00ADD8" d="M1.5 62.3c0 3.4.5 6.7 1.3 10h48.3c3.3 0 6-2.7 6-6s-2.7-6-6-6H12.3C7.1 52.9 3.6 49.4 3.6 44.2c0-5.2 4.2-9.4 9.4-9.4h38.5c4.4 0 8 3.6 8 8s-3.6 8-8 8H17.2c-2.8 0-5-2.2-5-5s2.2-5 5-5h21.6c.6 0 1-.4 1-1s-.4-1-1-1H17.2c-3.9 0-7 3.1-7 7s3.1 7 7 7h33.7c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6H13c-7.2 0-13 5.8-13 13 0 4.8 2.6 9 6.5 11.3z"/>
        <circle fill="#00ADD8" cx="109.5" cy="43.7" r="7.5"/>
        <circle fill="#00ADD8" cx="88.5" cy="78.7" r="7.5"/>
        <circle fill="#00ADD8" cx="76.5" cy="56.7" r="7.5"/>
        <circle fill="#00ADD8" cx="109.5" cy="84.7" r="7.5"/>
        <circle fill="#00ADD8" cx="64.5" cy="90.7" r="7.5"/>
      </svg>
    )
  },
  { 
    id: 'swift', 
    name: 'Swift',
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#FFAC45" d="M126.4 63.3c-10.1-6.2-24.8-9.8-24.8-9.8s-8.5-1.5-13.6-2.5c5.7-2.8 9.8-5.3 14.2-8.6 6.7-5 11.2-10.6 13.3-17.6.7-2.3.2-2.9-2.1-2.3-6.9 1.8-12.7 5.5-18.4 9.3-7.4 5-14.4 10.5-22.3 15.7-3.6-1-7.2-1.8-10.9-2.4-15.2-2.5-29.9-2.3-44.2 2.6-19.7 6.7-33.7 19.3-35.2 40.8-.7 10.8 2.1 20.5 9.1 28.7 9.2 10.7 21.2 15.8 35.3 14.9 16.3-1 29.8-7.5 41.6-17.8 3.6 4.7 7.4 9.2 11.6 13.3 6.7 6.5 14.5 11.3 23.9 12.8 2.4.4 3-.2 2.3-2.4-1.6-5.6-5.3-9.7-9.7-13.1-5.7-4.3-11.9-8-17.9-12 7.6-7.5 13.9-15.8 18.4-25.3 3.6-7.5 5.8-15.4 5.8-23.7-.1-.1-.1-.1-.1-.2z"/>
      </svg>
    )
  },
]

const projectTypes = [
  { id: 'desktop', name: 'Desktop App', icon: '💻' },
  { id: 'mobile', name: 'Mobile App', icon: '📱' },
  { id: 'web', name: 'Web Backend', icon: '🌐' },
  { id: 'system', name: 'System Software', icon: '⚙️' },
  { id: 'data', name: 'Data Processing', icon: '📊' },
  { id: 'other', name: 'Other', icon: '📦' },
]

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    language: '',
    projectType: '',
    description: '',
    budget: '',
    deadline: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="order" className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Заявка отправлена!</h2>
            <p className="text-gray-400 mb-8">
              Спасибо за обращение. Я свяжусь с вами в ближайшее время для обсуждения деталей проекта.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-666-red/20 hover:bg-666-red/30 text-666-red rounded-lg transition-colors"
            >
              Отправить ещё одну заявку
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="order" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-666-red/20 via-666-dark-red/20 to-666-red/20 rounded-full blur-3xl morph-shape" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Сделать <span className="gradient-text">заказ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Опишите ваш проект и получите бесплатную консультацию
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-666-red to-666-dark-red mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-666-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-666-red/20 glow-card"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Ваше имя *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
                placeholder="ivan@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Telegram</label>
            <input
              type="text"
              value={formData.telegram}
              onChange={(e) => handleChange('telegram', e.target.value)}
              className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
              placeholder="@username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">Язык программирования</label>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => {
                const isSelected = formData.language === lang.id
                return (
                  <motion.button
                    key={lang.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChange('language', lang.id)}
                    className="px-4 py-3 rounded-lg border transition-all flex items-center gap-3"
                    style={{
                      background: isSelected ? 'rgba(255, 0, 64, 0.2)' : 'rgba(10, 10, 15, 0.5)',
                      borderColor: isSelected ? '#ff0040' : 'rgba(255, 0, 64, 0.2)',
                      color: isSelected ? '#ff0040' : '#9ca3af'
                    }}
                  >
                    {lang.icon}
                    <span className="font-medium">{lang.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">Тип проекта</label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => {
                const isSelected = formData.projectType === type.id
                return (
                  <motion.button
                    key={type.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChange('projectType', type.id)}
                    className="px-3 py-2 rounded-lg border transition-all flex flex-col items-center justify-center text-center"
                    style={{
                      background: isSelected ? 'rgba(255, 0, 64, 0.2)' : 'rgba(10, 10, 15, 0.5)',
                      borderColor: isSelected ? '#ff0040' : 'rgba(255, 0, 64, 0.2)',
                      color: isSelected ? '#ff0040' : '#9ca3af',
                      width: '7rem',
                      height: '4rem'
                    }}
                  >
                    <span className="text-lg">{type.icon}</span>
                    <span className="text-xs leading-tight mt-1">{type.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Описание проекта *</label>
            <textarea
              required
              rows={5}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors resize-none"
              placeholder="Опишите требования, функционал, особенности проекта..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Бюджет (USD)
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white focus:outline-none focus:border-666-red/50 transition-colors"
              >
                <option value="">Выберите бюджет</option>
                <option value="und1000">До $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000+">$25,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Сроки
              </label>
              <select
                value={formData.deadline}
                onChange={(e) => handleChange('deadline', e.target.value)}
                className="w-full px-4 py-3 bg-666-black/50 border border-666-red/20 rounded-lg text-white focus:outline-none focus:border-666-red/50 transition-colors"
              >
                <option value="">Выберите срок</option>
                <option value="1-2weeks">1-2 недели</option>
                <option value="1month">1 месяц</option>
                <option value="2-3months">2-3 месяца</option>
                <option value="3months+">3+ месяца</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-666-red hover:bg-666-red/90 text-white font-semibold rounded-lg glow-red flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Отправить заявку
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
