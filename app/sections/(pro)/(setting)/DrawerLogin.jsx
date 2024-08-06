"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { Button, Card, Input, Navbar, NavbarBrand } from "@nextui-org/react";
import { Container } from "@mui/material";
import Link from "next/link";

export default function DrawerLogin() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <Navbar>
        <NavbarBrand className="flex flex-row justify-start items-center space-x-5">
          <svg
            onClick={toggleDrawer(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:size-[43px] size-[35px] cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <p className="font-bold text-xl">Cloudisk</p>
        </NavbarBrand>
      </Navbar>
      <Divider />

      <Container className="mt-4">
        <Card className="flex w-full flex-col gap-4" shadow="sm">
          <p className="font-bold text-base px-5 pt-3">Login to your account</p>
          <Input className="px-3 pb-2" type="email" label="Email" />
          <Input className="px-3 pb-2" type="password" label="Password" />
          <Button className="mx-3 " color="primary">
            Login
          </Button>
          <Link href="/signup" className="font-bold text-base px-3 pb-3">
            Create new account
          </Link>
        </Card>
      </Container>
    </Box>
  );

  return (
    <div>
      <svg
        onClick={toggleDrawer(true)}
        className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] cursor-pointer"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 0C9.0625 0 6.25 3.5 6.25 7.8125C6.25 12.125 9.0625 15.625 12.5 15.625C15.9375 15.625 18.75 12.125 18.75 7.8125C18.75 3.5 15.9375 0 12.5 0ZM5.96875 15.625C2.65625 15.7812 0 18.5 0 21.875V25H25V21.875C25 18.5 22.375 15.7812 19.0312 15.625C17.3438 17.5312 15.0312 18.75 12.5 18.75C9.96875 18.75 7.65625 17.5312 5.96875 15.625Z"
          fill="black"
        />
      </svg>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}