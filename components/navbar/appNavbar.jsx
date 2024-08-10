"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import DrawerRegister from "../auth/DrawerRegister";
import DrawerLogin from "../auth/DrawerLogin";
import AppDropdownProfile from "../dropdown/appDropdownProfile";
import { useAuthStore, useDrawerStore } from "@/zustand/store";

export default function AppNavbar({ title }) {
  // Accessing the isRegister state from Zustand store
  const authToken = useAuthStore((state) => state.authToken);
  const setAuthToken = useAuthStore((state) => state.setAuthToken);
  const isRegister = useDrawerStore((state) => state.isRegister);

  // get token auth
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("auth");
      setAuthToken(value);
    }
  }, []);
  console.log(authToken);

  return (
    <Navbar isBordered maxWidth="full" className="md:px-20">
      <NavbarBrand>
        <Link href="/" className="font-bold text-xl">
          {title}
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          {authToken ? (
            <AppDropdownProfile />
          ) : isRegister ? (
            <DrawerRegister />
          ) : (
            <DrawerLogin />
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
