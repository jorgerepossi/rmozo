import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Lock from "@/components/pages/SignIn/_components/Lock";

type LoginStatus = "idle" | "loading" | "success" | "error";
interface Status {
  loginStatus: LoginStatus;
}

const LoginStatusIndicator = ({ loginStatus }: Status) => {
  // ~! loginStatus: string
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (loginStatus === "success" || loginStatus === "error") {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loginStatus]);

  return (
    <div className="absolute left-[48.5%] top-[45%] flex size-[55px] items-center justify-center rounded-full border">
      <motion.div
        className={`absolute inset-0 rounded-full border ${animationComplete ? (loginStatus === "success" ? "bg-white" : loginStatus === "error" ? "bg-red-500" : "") : "bg-white"}`}
        initial={{ borderColor: "transparent", borderWidth: 0 }}
        animate={
          loginStatus === "success" || loginStatus === "error"
            ? {
                borderColor: loginStatus === "success" ? "#16a34a" : "#dc2626",
                borderWidth: 2,
                transition: { duration: 0.5, ease: "easeInOut" },
              }
            : {}
        }
        style={{
          borderTopColor:
            loginStatus === "success"
              ? "#16a34a"
              : loginStatus === "error"
                ? "#dc2626"
                : "transparent",
          borderRightColor:
            loginStatus === "success"
              ? "#16a34a"
              : loginStatus === "error"
                ? "#dc2626"
                : "transparent",
          borderBottomColor:
            loginStatus === "success"
              ? "#16a34a"
              : loginStatus === "error"
                ? "#dc2626"
                : "transparent",
          borderLeftColor:
            loginStatus === "success"
              ? "#16a34a"
              : loginStatus === "error"
                ? "#dc2626"
                : "transparent",
        }}
      />
      <div className="relative z-10">
        <Lock
          color={
            animationComplete
              ? loginStatus === "success"
                ? "green"
                : "white"
              : "black"
          }
          stroke={
            animationComplete
              ? loginStatus === "success"
                ? "green"
                : "white"
              : "black"
          }
        />
      </div>
    </div>
  );
};

export default LoginStatusIndicator;
