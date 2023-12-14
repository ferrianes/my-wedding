import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import BackgroundMusic from '@/components/BackgroundMusic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chintia & Ferrian',
  description: 'Generated by create next app',
  openGraph: {
    title: 'Chintia & Ferrian',
    description: 'Wedding Invitation',
    images: ['/favicon.ico']
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color='#5A5F4F' />
        <div className="container mx-auto max-w-md bg-[url(/assets/background.webp)] bg-cover bg-center h-[100dvh] overflow-hidden relative">
          <BackgroundMusic src="/assets/song.mp3" children={children} />
          {/* floating music play rounded button */}
        </div>
      </body>
    </html>
  )
}
