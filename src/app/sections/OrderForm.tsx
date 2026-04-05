'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, DollarSign, Calendar } from 'lucide-react'

const languages = [
  { 
    id: 'cpp', 
    name: 'C++',
    icon: <img src="/logos/cpp.svg" alt="C++" className="w-6 h-6" />
  },
  { 
    id: 'csharp', 
    name: 'C#',
    icon: <img src="/logos/csharp.svg" alt="C#" className="w-6 h-6" />
  },
  { 
    id: 'python', 
    name: 'Python',
    icon: <img src="/logos/python.svg" alt="Python" className="w-6 h-6" />
  },
  { 
    id: 'java', 
    name: 'Java',
    icon: <img src="/logos/java.svg" alt="Java" className="w-6 h-6" />
  },
  { 
    id: 'go', 
    name: 'Go',
    icon: <img src="/logos/go.svg" alt="Go" className="w-6 h-6" />
  },
  { 
    id: 'swift', 
    name: 'Swift',
    icon: <img src="/logos/swift.svg" alt="Swift" className="w-6 h-6" />
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
                className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
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
                className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
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
              className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors"
              placeholder="@username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">Язык программирования</label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {languages.slice(0, 3).map((lang) => {
                  const isSelected = formData.language === lang.id
                  return (
                    <motion.button
                      key={lang.id}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChange('language', lang.id)}
                      className="px-6 py-4 rounded-xl border transition-all flex items-center gap-4 min-w-[160px]"
                      style={{
                        background: isSelected ? 'rgba(255, 0, 64, 0.2)' : 'rgba(10, 10, 15, 0.5)',
                        borderColor: isSelected ? '#ff0040' : 'rgba(255, 0, 64, 0.2)',
                        color: isSelected ? '#ff0040' : '#9ca3af'
                      }}
                    >
                      <img src={`/logos/${lang.id === 'csharp' ? 'csharp' : lang.id}.svg`} alt={lang.name} className="w-9 h-9" />
                      <span className="text-lg font-semibold">{lang.name}</span>
                    </motion.button>
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-4">
                {languages.slice(3).map((lang) => {
                  const isSelected = formData.language === lang.id
                  return (
                    <motion.button
                      key={lang.id}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChange('language', lang.id)}
                      className="px-6 py-4 rounded-xl border transition-all flex items-center gap-4 min-w-[160px]"
                      style={{
                        background: isSelected ? 'rgba(255, 0, 64, 0.2)' : 'rgba(10, 10, 15, 0.5)',
                        borderColor: isSelected ? '#ff0040' : 'rgba(255, 0, 64, 0.2)',
                        color: isSelected ? '#ff0040' : '#9ca3af'
                      }}
                    >
                      <img src={`/logos/${lang.id === 'csharp' ? 'csharp' : lang.id}.svg`} alt={lang.name} className="w-9 h-9" />
                      <span className="text-lg font-semibold">{lang.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">Тип проекта</label>
            <div className="flex flex-wrap gap-4">
              {projectTypes.map((type) => {
                const isSelected = formData.projectType === type.id
                return (
                  <motion.button
                    key={type.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChange('projectType', type.id)}
                    className="px-6 py-4 rounded-xl border transition-all flex items-center gap-4 min-w-[160px]"
                    style={{
                      background: isSelected ? 'rgba(255, 0, 64, 0.2)' : 'rgba(10, 10, 15, 0.5)',
                      borderColor: isSelected ? '#ff0040' : 'rgba(255, 0, 64, 0.2)',
                      color: isSelected ? '#ff0040' : '#9ca3af'
                    }}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className="text-lg font-semibold">{type.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Описание проекта *</label>
            <textarea
              required
              rows={6}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:border-666-red/50 transition-colors resize-none"
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
                className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg focus:outline-none focus:border-666-red/50 transition-colors"
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
                className="w-full px-6 py-4 bg-666-black/50 border border-666-red/20 rounded-lg text-white text-lg focus:outline-none focus:border-666-red/50 transition-colors"
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
