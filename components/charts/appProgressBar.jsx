"use client";

import React from "react";
import { CircularProgress, Card } from "@nextui-org/react";

export default function AppProgressBar({ value, total }) {
  const percentageUsed = (value / total) * 100;
  const percentage = percentageUsed.toFixed(2);

  return (
    <Card className="w-36 h-36 lg:w-52 lg:h-52 shadow-none">
      <CircularProgress
        classNames={{
          svg: "w-36 h-36 lg:w-52 lg:h-52 drop-shadow-md",
          indicator: `stroke-[#FF3B30]`,
          track: "storage-bar-gradient",
          value: "text-3xl font-semibold text-black",
        }}
        value={percentage}
        strokeWidth={4}
        showValueLabel={true}
      />
    </Card>
  );
}
