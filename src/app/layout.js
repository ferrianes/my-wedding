import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color='#5A5F4F' />
        <div className="container mx-auto max-w-md bg-[url(/assets/background.png)] bg-cover bg-center min-h-screen overflow-hidden relative">
          {children}
        </div>
      </body>
    </html>
  )
}
