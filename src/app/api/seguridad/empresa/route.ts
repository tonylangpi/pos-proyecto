import  {NextResponse, NextRequest} from 'next/server'
import  {pool}  from '../../../config/db'; 

export async function GET(res:NextResponse){//obtener empresas
    const [rows] = await pool.query('SELECT * FROM Empresa'); 
    let empresas:any = rows;
    return NextResponse.json(empresas); 
}

export async function POST(req:NextRequest,res:NextResponse){//obtener empresas
    const {nombre, direccion} = await req.json(); 
    if(!nombre || !direccion){
        return  NextResponse.json({
            message: "Faltan datos"
        }); 
    }else{
        await pool.query('INSERT INTO Empresa SET ?',
            {
              nombre:nombre,
              direccion:direccion
            })
         return NextResponse.json({message: "Empresa Creada"});
    }
}