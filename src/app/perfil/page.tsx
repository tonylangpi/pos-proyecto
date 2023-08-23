"use client"
import { Card} from 'flowbite-react';
import { useSession, signOut } from "next-auth/react";
const Perfil = () => {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <Card className='basis-2/4 w-40'>
    <div className="flex flex-col">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {session?.user?.nombre}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {session?.user?.correo}
      </span>
    </div>
  </Card>
  )
}

export default Perfil