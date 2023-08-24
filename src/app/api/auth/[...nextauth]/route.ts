import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"; 
import  {pool}  from '@/app/config/db';
import bcrypt from 'bcryptjs'; 
interface usuarios{
  idUsuario: number;
  nombre: string;
  correo: string;
  celular: string;
  idRole: number;
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
             email: {label:"Email", type: "email", placeholder:"langpi@gmail.com"},
             password: {label:"Password", type: "password"}
          },
          async authorize(credentials) {
            const [rows] = await pool.query('SELECT * FROM usuario WHERE correo = ?', [credentials?.email]);
            let usuarioEncontrado: any = rows;
            let objetoUsuario = usuarioEncontrado[0];
            if(objetoUsuario == undefined) throw new Error("Credenciales invalidas"); 
            const passworMatch = await bcrypt.compare(credentials!.password, objetoUsuario.clave);
            if(!passworMatch) throw new Error("contraseña invalida o no correcta"); 
            return  objetoUsuario; 
          }
        })
      ],
      callbacks: {
          jwt({account, token, user, profile, session}){
              if(user) token.user = user; 
              return token;
          },
          session({session,token}){
          const users : usuarios =  {
              idUsuario: token.user.idUsuario,
              nombre: token.user.nombre,
              correo: token.user.correo,
              celular: token.user.celular,
              idRole: token.user.idRoleS
            }
            session.user = users as any
            return session;
          }
      },
      pages: {
        signIn : '/login'
      }
})

export { handler as GET, handler as POST }