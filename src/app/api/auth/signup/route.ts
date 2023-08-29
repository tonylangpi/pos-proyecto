import  {NextResponse, NextRequest} from 'next/server'
import  {pool}  from '@/app/config/db'; //traemos la conexion a la bd para manipular datos
import { RowDataPacket } from "mysql2";
const bcryptjs = require("bcryptjs");
export async function POST(req: Request){
    const {nombre, correo, celular, clave, idRol} = await req.json(); 
    let passwordHash = await bcryptjs.hash(clave, 10);

  const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  try {
    if(!nombre ||
      !correo ||
      !celular ||
      !clave  || 
      !idRol ) {
             return  NextResponse.json({
                 message: "Faltan datos"
             }); 
      } else if(!emailregex.test(correo)) {
         return NextResponse.json({
           message: "El correo electronico no es valido"
         });
       } else {
            const verificar: any = await pool.query('SELECT * FROM usuario WHERE correo = ?', [correo]); 
            if(verificar[0].length > 0) return NextResponse.json({message: "usuario ya registrado"},{
             status: 409
            }); 
 
            await pool.query('INSERT INTO usuario SET ?',
            {
              nombre:nombre,
              correo:correo,
              celular:celular,
              clave: passwordHash,
              idRol:idRol
            })
         return NextResponse.json({message: "usuario creado"});
       }
  } catch (error) {
      console.log(error);
  }
}

export async function GET(req: Request){
   const [rows] = await  pool.query('select * from usuario'); 
   let tempResult: any = rows;
   return NextResponse.json(tempResult); 
}