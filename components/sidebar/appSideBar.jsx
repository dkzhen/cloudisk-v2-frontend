"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemIcon } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksSidebar } from "@/config/site";

const drawerWidth = 170;

export default function AppSideBar({ children }) {
  const currentPath = usePathname();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            zIndex: 1,
            borderRight: "none",
            paddingLeft: 7,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <List>
            {linksSidebar.map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  marginBottom: 5,
                }}
              >
                <ListItemIcon className="" sx={{ zIndex: 2 }}>
                  <Link href={item.href} passHref>
                    <div
                      className={`p-3 rounded-lg cursor-pointer ${
                        currentPath === item.href
                          ? "bg-[#F1F1F1]"
                          : "bg-transparent"
                      }${console.log(currentPath, item.href)} `}
                    >
                      {item.icon}
                    </div>
                  </Link>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
