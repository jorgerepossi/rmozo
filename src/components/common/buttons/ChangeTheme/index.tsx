"use client";
import { useState, useEffect } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ChangeThemeButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ButtonLoading = () => {
    return <div className="h-10 w-10 rounded-full bg-[--neutral-n10]"></div>;
  };
  if (!isMounted) return <ButtonLoading />;

  return (
    <button
      className={"flex h-10 w-10 items-center justify-center"}
      onClick={() => setTheme(`${theme === "light" ? "dark" : "light"}`)}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ChangeThemeButton;
