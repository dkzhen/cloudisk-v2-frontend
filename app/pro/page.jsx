import AppNavbar from "@/components/navbar/appNavbar";
import React from "react";
import SideBar from "../sections/(pro)/SideBar";
import { Typography } from "@mui/material";

function page() {
  return (
    <main>
      <AppNavbar title="Cloudisk Pro" />
      <SideBar>
        <Typography variant="paragraph" className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          quia hic cumque perferendis, eveniet ratione quis, repellendus dolore
          animi, ut eum. Fuga, culpa laudantium est voluptatum doloremque
          quibusdam praesentium officiis, reprehenderit hic vero perspiciatis
          dolor nihil pariatur amet omnis veniam, tenetur deleniti laboriosam
          quod adipisci consequatur corrupti deserunt! Beatae, magni cum iure
          aliquam odit voluptatibus illum cumque modi hic, amet commodi unde
          officiis corporis placeat temporibus iusto autem aperiam porro
          recusandae alias. Culpa suscipit saepe enim autem perferendis, fugiat
          sequi officia praesentium quasi, quisquam itaque? Eius atque rerum
          optio, perspiciatis explicabo quam sapiente omnis facilis nisi ipsam
          quibusdam blanditiis a.
        </Typography>
      </SideBar>
    </main>
  );
}

export default page;
