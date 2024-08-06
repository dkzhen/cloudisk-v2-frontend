
import React from "react";
import AppNavbar from "@/components/navbar/appNavbar";
import GridContent from "@/app/sections/(pro)/(setting)/GridContent";
import AppButtonSearch from "@/components/button/appButtonSearch";
import SideBar from "@/app/sections/(pro)/SideBar";
import CustomTableFiles from "@/app/sections/(pro)/(setting)/TableFiles";

function Page() {
  return (
    <main>
      <AppNavbar title="Setting" />
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

export default Page;
