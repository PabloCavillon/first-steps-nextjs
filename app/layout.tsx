import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First steps',
  description: 'Generado por Pablo :D',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
