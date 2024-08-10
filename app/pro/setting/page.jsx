import React from "react";
import AppNavbar from "@/components/navbar/appNavbar";
import GridContent from "@/app/sections/(pro)/(setting)/GridContent";
import AppButtonSearch from "@/components/button/appButtonSearch";
import CustomTableFiles from "@/app/sections/(pro)/(setting)/TableFiles";
import AppSideBar from "@/components/sidebar/appSideBar";

function Page() {
  return (
    <main>
      <AppNavbar title="Setting" />
      <AppSideBar>
        <GridContent />
        <div className="mt-4 px-4 md:w-[25%] md:pl-20">
          <AppButtonSearch />
        </div>
        <CustomTableFiles />
      </AppSideBar>
    </main>
  );
}

export default Page;
