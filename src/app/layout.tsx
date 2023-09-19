import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar/Sidebar'
import ThemeProvider from '@/lib/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <ThemeProvider>
        <body className="min-h-screen flex">
          <div>
            <Sidebar/>
          </div>
          <main className='flex-1'>
            {children}
          </main>
        </body>
</ThemeProvider>
    </html>
  )
}
