import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dormitory',
  description: 'Generated by Kim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1><Link href='/'> Dormitory!</Link></h1>
        {children}
      </body>
    </html>
  )
}
