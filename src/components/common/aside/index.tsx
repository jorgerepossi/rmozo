"use client";
import AsideMenu from "@/components/common/aside/AsideMenu";
import LogOutButton from "@/components/common/aside/LogOutButton";
import Logo from "@/components/common/aside/Logo";

import useToggleAside from "@/store/toggle-aside";

const Aside = () => {
  const { isAsideOpen } = useToggleAside();
  return (
    <aside
      className={`grid ${isAsideOpen ? "w-[90px]" : "w-[200px]"} w-full flex-shrink-0 grid-rows-[auto_1fr_auto] border-r-[1px] border-neutral-n10 bg-white px-2 py-4 transition-all`}
    >
      <Logo />
      <AsideMenu />
      <LogOutButton />
    </aside>
  );
};
export default Aside;
