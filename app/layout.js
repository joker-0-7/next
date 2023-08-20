'use client'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from 'react'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  viewport:"width=device-width, initial-scale=1.0",
}

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
