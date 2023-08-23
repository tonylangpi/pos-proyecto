"use client"
import { Card} from 'flowbite-react';
const Perfil = () => {
  return (
    <Card className='basis-2/4 w-40'>
    <div className="flex flex-col">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Bonnie Green
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Visual Designer
      </span>
    </div>
  </Card>
  )
}

export default Perfil