import './admin.css'
import { Inter } from 'next/font/google'
import NavAdmin from './components/navAdmin'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
<div div className='row'>

  <div className='col-lg-2 col-sm 12'>
            <NavAdmin />
  </div>
  <div className='col-lg-10 col-sm 12'>
  {children}
  </div>
          
</div>
        </body>
    </html>
  )
}
