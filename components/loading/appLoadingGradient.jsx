import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F7DBA7" />
            <stop offset="100%" stopColor="#F0AB86" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size={25}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );
}

export default function AppLoadingGradient() {
  return (
    <div className="">
      <GradientCircularProgress />
    </div>
  );
}
