// components/UploadButton.js
import React from "react";
import { Button } from "@nextui-org/react";

function UploadButton({ status, onClick }) {
  return (
    <Button
      color={status === "success" ? "success" : "primary"}
      className="w-full"
      onClick={onClick}
      disabled={status === "uploading"}
    >
      {status === "default" && "Upload"}
      {status === "uploading" && "Uploading..."}
      {status === "success" && "Success"}
    </Button>
  );
}

export default UploadButton;
