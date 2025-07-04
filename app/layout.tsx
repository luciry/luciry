import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luca Cirillo - AI Engineer & Researcher',
  description: 'PhD student in AI and Simulation Engineering, specializing in Large Language Models and Explainable AI',
  keywords: ['AI', 'Machine Learning', 'Simulation', 'PhD', 'Engineer', 'Luca Cirillo'],
  authors: [{ name: 'Luca Cirillo' }],
  creator: 'Luca Cirillo',
  openGraph: {
    title: 'Luca Cirillo - AI Engineer & Researcher',
    description: 'PhD student in AI and Simulation Engineering, specializing in Large Language Models and Explainable AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 