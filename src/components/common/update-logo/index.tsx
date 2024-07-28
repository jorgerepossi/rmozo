"use client";
import { useRef } from "react";

import { Camera } from "lucide-react";

import Box from "@/components/common/box";
import Card from "@/components/common/card";

const UpdateLogo = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <Card className="col-start-1 col-end-4 grid">
      <Box className="flex flex-col items-center">
        <p>cargar logo</p>
        <Box onClick={handleOnClick} className="cursor-pointer">
          <Camera size={24} />
        </Box>
        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </Box>
    </Card>
  );
};

export default UpdateLogo;
