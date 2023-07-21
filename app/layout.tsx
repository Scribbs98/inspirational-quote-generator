import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspirational Quote Generator',
  description: 'A fun project to generate quotes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
