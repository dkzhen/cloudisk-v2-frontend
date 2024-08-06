"use client";
import React, { useState, useEffect } from "react";
import { Progress, Switch } from "@nextui-org/react";
import UploadButton from "@/components/button/appUploadButton";

function CardUpload() {
  const [status, setStatus] = useState("default"); // "default", "uploading", "success"
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (status === "uploading") {
      const id = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(id);
            setStatus("success");
            return 100;
          }
          return prev + 10;
        });
      }, 500); // Update every 500ms
      setIntervalId(id);
    } else if (status === "success") {
      setProgress(100);
    } else {
      setProgress(0);
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status]);

  return (
    <div>
      <div className="border-1 rounded-[20px] border-[#A9A9A9] flex flex-col p-12 justify-center items-center cursor-pointer">
        <svg
          className="md:w-[113px] md:h-[96px] w-[80px] h-[80px]"
          width="113"
          height="96"
          viewBox="0 0 113 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.32 0.465012C46.3915 0.465012 31.5616 10.6756 28.3438 24.2106C12.9542 24.2106 0.362793 34.8962 0.362793 47.9563C0.362793 52.3492 1.90175 56.386 4.28013 59.8291H35.339L63.32 36.0834L91.301 59.8291H111.028C111.867 57.9294 112.287 56.0298 112.287 53.8927C112.287 46.1753 106.411 38.5767 98.2963 36.0834V30.147C98.2963 13.7626 82.6269 0.465012 63.32 0.465012ZM63.32 53.8927L28.3438 83.5747H56.3248V89.5111C56.3248 91.0855 57.0618 92.5955 58.3736 93.7088C59.6855 94.8221 61.4648 95.4475 63.32 95.4475C65.1753 95.4475 66.9546 94.8221 68.2664 93.7088C69.5783 92.5955 70.3153 91.0855 70.3153 89.5111V83.5747H98.2963L63.32 53.8927Z"
            fill="#403F3F"
          />
        </svg>
        <span className="text-lg font-bold mt-2">Drop files here</span>
      </div>
      <div className="mt-4 w-full max-w-[600px]">
        <UploadButton
          status={status}
          onClick={() => {
            if (status === "default") {
              setStatus("uploading");
            }
          }}
        />
        {status !== "default" && (
          <div className="mt-4 w-full">
            <Progress
              aria-label="Progress"
              size="md"
              value={progress}
              color={status === "success" ? "success" : "primary"}
              showValueLabel={true}
              className="w-full"
            />
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-4">
        <Switch defaultSelected size="sm">Private</Switch>
        <Switch defaultSelected size="sm">Limit Upload 50MB</Switch>
      </div>
    </div>
  );
}

export default CardUpload;
