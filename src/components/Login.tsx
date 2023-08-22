"use client";
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Card, Label, TextInput } from 'flowbite-react';
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
    <Card>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            name="password"
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default CardLogin