import  {NextResponse, NextRequest} from 'next/server'
import  {pool}  from '../../config/db'; //traemos la conexion a la bd para manipular datos
export  async function GET(req: NextRequest) {
 const usuarios:any =  await  pool.query('SELECT * FROM usuario'); 
   return NextResponse.json(usuarios[0]); 
}