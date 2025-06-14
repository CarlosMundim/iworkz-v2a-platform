import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'iWORKZ - AI-Powered Workforce Mobility',
  description: 'Borderless Talent. Limitless Impact. AI-powered workforce mobility for Japan & Asia.',
  keywords: ['AI', 'workforce', 'mobility', 'Japan', 'Asia', 'talent', 'compliance'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}