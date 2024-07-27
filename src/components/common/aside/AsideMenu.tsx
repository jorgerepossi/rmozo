"use client";
// Components
import BarTablesMenu from "@/components/common/aside/menu/BarTablesMenu";
import SupportMenu from "@/components/common/aside/menu/SupportMenu";
// eslint-disable-next-line import/order
import UtilitiesMenu from "@/components/common/aside/menu/UtilitiesMenu";

// Constants
import ButtonResizePanel from "@/components/common/buttons/ButtonResizePanel";

import useToggleAside from "@/store/toggle-aside";

import { ASIDE_MENU } from "@/constants/aside-menu.constant";

//! TODO integrate Zustand to open close menu
const AsideMenu = () => {
  const { toggleAside } = useToggleAside();
  return (
    <div className={"relative"}>
      <ButtonResizePanel onClick={toggleAside} />
      <BarTablesMenu items={ASIDE_MENU.BAR_TABLES} />
      <UtilitiesMenu items={ASIDE_MENU.UTILITIES} />
      <SupportMenu items={ASIDE_MENU.SUPPORT} />
    </div>
  );
};

export default AsideMenu;
