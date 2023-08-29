
import { NextRequest, NextResponse } from "next/server";
import  {pool}  from '@/app/config/db'; 

export async function GET(res:NextResponse, req:NextRequest){//obtener empresas
   console.log(req); 
   return NextResponse.json({message:"enviado"})
}