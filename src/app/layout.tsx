import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Architectural Experience | Luxury Villa Showcase',
  description: 'Immersive cinematic architectural WebGL experience inspired by premium real-estate walkthroughs',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
