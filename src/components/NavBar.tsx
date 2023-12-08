import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavigationBar () {
  return (
    <Navbar>
      <NavbarBrand>        
        <p className="font-bold text-inherit">SABAQ</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/fields">
            Inventario
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="inventory" aria-current="page">
            Formulario
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/instructions">
            Instructivo
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
