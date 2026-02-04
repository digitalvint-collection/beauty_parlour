import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Lumière Beauty Studio | Professional Makeup Artistry',
    template: '%s | Lumière Beauty Studio'
  },
  description: 'Award-winning makeup artistry for weddings, events, and special occasions in [City]. Book your consultation today.',
  keywords: ['makeup artist', 'bridal makeup', 'special effects makeup', 'beauty studio', 'professional makeup'],
  authors: [{ name: 'Lumière Beauty Studio' }],
  openGraph: {
    title: 'Lumière Beauty Studio',
    description: 'Transforming visions into beautiful reality since 2010',
    url: 'https://www.lumierebeauty.com',
    siteName: 'Lumière Beauty Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professional makeup artist at work'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière Beauty Studio',
    description: 'Award-winning makeup artistry for your special day',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=630&fit=crop'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual code before deploy
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
