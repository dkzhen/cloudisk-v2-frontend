import AppNavbar from "@/components/navbar/appNavbar";
import React from "react";
import GridContent from "../sections/(pro)/(dashboard)/GridContent";
import AppButtonSearch from "@/components/button/appButtonSearch";
import CustomTableFiles from "../sections/(pro)/(dashboard)/TableFiles";
import AppSideBar from "../../components/sidebar/appSideBar";

function page() {
  return (
    <main>
      <AppNavbar title="Cloudisk Pro" />
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

export default page;
