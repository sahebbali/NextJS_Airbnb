import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly'
import RegisterModal from '@/components/models/RegisterModel'
import Modal from '@/components/models/Modal'
import LoginModal from '@/components/models/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Generate Airbnb app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        {children}
        
        </body>
    </html>
  )
}
