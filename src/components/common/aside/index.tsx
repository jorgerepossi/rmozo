"use client";
import { useState, useEffect } from "react";

import AsideMenu from "@/components/common/aside/AsideMenu";
import Logo from "@/components/common/aside/Logo";
import LogOutButton from "@/components/common/aside/LogOutButton";
import SmallSpinner from "@/components/common/spinner/SmallSpinner";

import useToggleAside from "@/store/toggle-aside";

const Aside = () => {
  const { isAsideOpen } = useToggleAside();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <SmallSpinner />;

  return (
    <aside
      className={`grid ${isAsideOpen ? "w-[90px]" : "w-[200px]"} ease-[cubic-bezier(.17,.67,.83,.67)] relative flex-shrink-0 grid-rows-[auto_1fr_auto] border-r-[1px] border-[--neutral-n20] bg-[--neutral-white] px-2 py-4 transition-all`}
    >
      <Logo />
      <AsideMenu />
      <LogOutButton />
    </aside>
  );
};
export default Aside;
