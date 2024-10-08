import AppNavbar from "@/components/navbar/appNavbar";
import GridContent from "@/app/sections/(dashboard)/GridContent";
import CustomTableFiles from "./sections/(dashboard)/TableFiles";
import AppButtonSearch from "@/components/button/appButtonSearch";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <AppNavbar title="Cloudisk" />

      <GridContent />
      <div className="mt-4 px-4 md:w-[25%] md:pl-20">
        <AppButtonSearch />
      </div>
      <CustomTableFiles />
    </main>
  );
}
