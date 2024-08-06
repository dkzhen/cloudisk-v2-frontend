import AppNavbar from "@/components/navbar/appNavbar";
import React from "react";
import SideBar from "../sections/(pro)/SideBar";
import GridContent from "../sections/(pro)/(dashboard)/GridContent";
import AppButtonSearch from "@/components/button/appButtonSearch";
import CustomTableFiles from "../sections/(pro)/(dashboard)/TableFiles";

function page() {
  return (
    <main>
      <AppNavbar title="Cloudisk Pro" />
      <SideBar>
        <GridContent />
        <div className="mt-4 px-4 md:w-[25%] md:pl-20">
          <AppButtonSearch />
        </div>
        <CustomTableFiles />
      </SideBar>
    </main>
  );
}

export default page;
