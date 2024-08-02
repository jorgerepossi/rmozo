"use client";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#272E3E",
          color: "#fff",
          width: "100%",
        },
      }}
    />
  );
};
export default ToastProvider;
