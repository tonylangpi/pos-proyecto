'use client';
import dynamic from 'next/dynamic'
const LogCard = dynamic(() => import('@/components/Login'), { ssr: false })
const Login = () => {
  return(
    <LogCard/>
  )
}

export default Login