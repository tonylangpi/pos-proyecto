import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Image from 'next/image'
import Logo from '../../public/Logo.jpg';
const CardLogin = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) return setError(res.error as string);

    if (res?.ok) return router.push("/");
  };
  return (
    <> 
      <div className="flex items-center justify-center h-screen gap-3">
      <Card className="w-96">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
          )}
          <h3>Iniciar Sesion</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Ingresa tu correo" />
            </div>
            <TextInput
              id="email1"
              placeholder="juanCaballo@gmail.com"
              required
              type="email"
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Ingresa tu contraseña" />
            </div>
            <TextInput
              id="password1"
              required
              type="password"
              name="password"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
      <Image
      src={Logo}
      width={600}
      height={500}
      alt="Picture of the author"
    />
    </div>
    </>
  );
};

export default CardLogin;
