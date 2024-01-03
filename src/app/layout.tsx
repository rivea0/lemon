import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import ThemeProvider from './components/ThemeProvider'
import Header from './components/Header'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lemon: 30-Day Challenge Tracker',
  description: 'Track your habits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="border-box m-0 p-0">
      <body className={`${dm_sans.className} flex flex-col h-screen`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <footer className="mt-auto text-center text-xs">footer</footer>
      </body>
    </html>
  )
}
