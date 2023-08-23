"use client";
import { useSession, signOut } from "next-auth/react";
import { Sidebar, Button } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { AnyARecord } from "dns";

const Slidebar = () => {
  const { data: session, status } = useSession();
  return (() => {
    switch (status) {
      case "authenticated": //si el usuario esta autenticado retorna el dashboard
        return (
          <Sidebar aria-label="Sidebar with multi-level dropdown example h-screen">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/" icon={HiChartPie}>
                  <p>INICIO</p>
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiShoppingBag} label="Productos">
                  <Sidebar.Item href="#">Products</Sidebar.Item>
                  <Sidebar.Item href="#">Sales</Sidebar.Item>
                  <Sidebar.Item href="#">Refunds</Sidebar.Item>
                  <Sidebar.Item href="#">Shipping</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse icon={HiShoppingBag} label="Seguridad">
                  <Sidebar.Item href="/register">Usuarios</Sidebar.Item>
                  <Sidebar.Item href="#">Roles</Sidebar.Item>
                  <Sidebar.Item href="/perfil">Perfil</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item>
                  <Button
                    onClick={() => {
                      signOut();
                    }}
                    color="failure"
                  >
                    Cerrar Sesion
                  </Button>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        );
      case "loading":
        return null;
      case "unauthenticated":
        return null;
      default:
        return null;
    }
  })();
};

export default Slidebar;
