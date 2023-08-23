"use client";
import dynamic from 'next/dynamic';
//import Spin from '@/components/Spinner';
const FormRegister = dynamic(() => import('@/components/FormRegister'), { ssr: false, loading:() => <p>Cagando</p>})
const Register = () => {
  return (
    <FormRegister/>
  )
}

export default Register