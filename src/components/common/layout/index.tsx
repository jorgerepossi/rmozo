"use client";
import type { ReactNode } from "react";

import Aside from "@/components/common/aside";
import Box from "@/components/common/box";
import Header from "@/components/common/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-[100%] min-h-screen flex-col bg-[--neutral-n10]">
      <Box className={"flex h-full min-h-[100dvh]"}>
        <Aside />
        <Box className={"flex w-full flex-col gap-4"}>
          <Header />
          <Box className={"grid grid-flow-col grid-cols-12 gap-[16px]"}>
            {children}
          </Box>
        </Box>
      </Box>
    </main>
  );
};
export default Layout;
