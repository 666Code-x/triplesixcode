import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: '666.CODE - Разработка на C++, C#, Python, Java, Go, Swift',
  description: 'Профессиональная разработка программного обеспечения на заказ. C++, C#, Python, Java, Go, Swift.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
