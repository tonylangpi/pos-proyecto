import './globals.css'
import { Inter } from 'next/font/google'
import Providers  from './Providers'
const inter = Inter({ subsets: ['latin'] })
//import Loading from '@/components/Spinner';
import Slidebar from '@/components/Sidebar'; 
 //import dynamic from 'next/dynamic';
 //const Slidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false, loading: () => <Loading/> })
 
import  {Suspense} from 'react'
export const metadata = {
  title: 'Casa Ces´s',
  description: 'POS tienda de suplementos y maquillaje',
  keywords:'tienda,POS, suplementos, maquillaje'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}><Providers><div className='flex'><Slidebar/><div className='p-7 flex-1 h-screen'>{children}</div></div></Providers></body>
    </html>
  )
}
