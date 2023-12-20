import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className='title'><Link href='/'>Dormitory!</Link></h1>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>

  )
}
