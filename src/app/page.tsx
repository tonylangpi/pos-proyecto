"use client";
import { useSession, signOut } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  return (
     <h1>HOME PAGE DASHBOARD</h1>
  )
}
