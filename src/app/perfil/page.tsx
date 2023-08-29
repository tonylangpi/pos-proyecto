"use client"
import { Card} from 'flowbite-react';
import { useSession, signOut } from "next-auth/react";
const Perfil = () => {
  const {data:session} = useSession();
  return (
    <Card>
    <div className="flex flex-col">
      <h1>PERFIL LOGUEADO</h1>
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {session?.user?.nombre}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {session?.user?.correo}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {session?.user?.Nivel}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {session?.user?.Rol}
      </span>
    </div>
  </Card>
  )
}

export default Perfil