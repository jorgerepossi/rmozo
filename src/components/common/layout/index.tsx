"use client";
import { type ReactNode, useState, useEffect } from "react";

import Aside from "@/components/common/aside";
import Box from "@/components/common/box";
import Header from "@/components/common/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <>... loading</>;

  return (
    <main className="flex h-[100%] min-h-screen flex-col bg-neutral">
      <Box className={"flex h-full min-h-[100dvh]"}>
        <Aside />
        <Box className={"flex w-full flex-col gap-4"}>
          <Header />
          <Box
            className={
              "grid grid-flow-col grid-cols-12 grid-rows-12 gap-[16px] px-4"
            }
          >
            {children}
          </Box>
        </Box>
      </Box>
    </main>
  );
};
export default Layout;
