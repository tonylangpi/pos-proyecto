'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';
export default function ProductosLayout({children}: {
    children: React.ReactNode
  }){
    return <>
      <Navbar
      fluid
      rounded
    >
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          active
          href="/productos"
        >
          <p>
            Productos
          </p>
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/productos/categorias"
        >
          <p>
            Categorias
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Presentaciones
        </Navbar.Link>
        <Navbar.Link href="#">
          Marcas
        </Navbar.Link>
        <Navbar.Link href="#">
          Sabores
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    {children}
    
    </>
}