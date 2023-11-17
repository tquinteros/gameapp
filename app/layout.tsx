import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <ReduxProvider>
            {/* <Header /> */}
            {children}
            {/* <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-2 max-h-screen sticky top-4 border border-red-500'>
              <SideLayout />
            </div>
            <div className='col-span-10 border border-black'>
              {children}
            </div>
          </div> */}
            <ToastContainer position='bottom-right' theme='dark' hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} />
        </ReduxProvider>
      </body>
    </html>
  )
}
