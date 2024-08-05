"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import DrawerLogin from "@/app/sections/(dashboard)/DrawerLogin";

export default function AppNavbar({ title }) {
  return (
    <Navbar isBordered maxWidth="full" className="md:px-20">
      <NavbarBrand>
        <p className="font-bold text-xl">{title}</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <DrawerLogin />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
