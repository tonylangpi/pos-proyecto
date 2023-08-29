
import Tabla from '@/components/Tabla'; 
async function loadPost(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data; 
}
 const Categorias = async() => {
   const datos =  await loadPost();
  return (
   <>
        <Tabla datos={datos}/>
    </>
  )
}

export default Categorias