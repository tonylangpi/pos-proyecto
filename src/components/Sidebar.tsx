"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AnyARecord } from "dns";

const  Slidebar = () => {
    const { data: session, status } = useSession();
  return (
    (() => {
        switch (status) {
          case 'authenticated':
            return <h1>SIDEBAR</h1>
          case 'loading':
            return null
          case 'unauthenticated':
            return null
          default:
            return null
        }
      })()
  )
}

export default Slidebar