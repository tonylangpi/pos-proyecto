import  {NextResponse, NextRequest} from 'next/server'
import  {pool}  from '../../../config/db'; //traemos la conexion a la bd para manipular datos
export  async function POST(req: NextRequest) {
    const {descripcion} = await req.json(); 
 const usuarios:any =  await  pool.query('SELECT * FROM usuario'); 
   return NextResponse.json(usuarios[0]); 
}
