import AppProgressBar from "@/components/charts/appProgressBar";
import React from "react";

function CardStorage({ total, used, name, type }) {
  return (
    <div className=" p-4 border-1 rounded-[10px] border-[#F3F4F6] ">
      <div className="flex flex-row justify-between md:justify-center items-center space-x-4 lg:space-x-40 ">
        <AppProgressBar value={used} total={total} />
        <div className="flex flex-col items-center justify-between  pr-5 md:pr-0 text-base">
          <span className=" text-md text-[#6B7280]">{name}</span>
          <span className="font-bold text-sm">
            {used}
            {type} of {total}
            {type} used
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardStorage;
