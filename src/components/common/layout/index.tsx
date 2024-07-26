import type { ReactNode } from "react";

import { Settings } from "lucide-react";

import Aside from "@/components/common/aside";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className={"flex h-full min-h-[100dvh]"}>
        <Aside />
        <div className={"flex w-full flex-col"}>
          <header className={"flex h-[50px] items-center justify-between px-4"}>
            <nav> nav </nav>

            <div className={"flex gap-2"}>
              {" "}
              <p> user </p>{" "}
              <span>
                <Settings />
              </span>
            </div>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
};
export default Layout;
