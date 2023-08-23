'use client';
import dynamic from 'next/dynamic';
//import Spin from '@/components/Spinner';
const LogCard = dynamic(() => import('@/components/Login'), { ssr: false})

const Login = () => {
  return(
  <>
  <LogCard/>
  </>
  )
}

export default Login