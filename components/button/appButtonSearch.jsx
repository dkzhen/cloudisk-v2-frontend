"use client";
import { GridSearchIcon } from "@mui/x-data-grid";
import { Input } from "@nextui-org/react";
import React from "react";

function AppButtonSearch() {
  return (
    <Input
      className=""
      classNames={{
        base: " h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search..."
      size="sm"
      startContent={<GridSearchIcon size={18} />}
      type="search"
    />
  );
}

export default AppButtonSearch;
