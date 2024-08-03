import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

import Box from "@/components/common/box";
import ButtonResizePanel from "@/components/common/buttons/ButtonResizePanel";
import Config from "@/components/common/header/Config";
import UserProfileHeader from "@/components/common/user-profile-header";

import useToggleAside from "@/store/toggle-aside";
import ChangeThemeButton from "@/components/common/buttons/ChangeTheme";

const Header = () => {
  const { toggleAside } = useToggleAside();

  return (
    <header
      className={
        "flex h-[90px] items-center justify-between bg-[--neutral-white] px-4 shadow-sm"
      }
    >
      <Box className={"flex items-center gap-[24px]"}>
        <ButtonResizePanel onClick={toggleAside} />
        <Box>
          <p> Dashboard</p>
          <p className={"text-body-small"}> 12 Agosto 2024</p>
        </Box>
      </Box>
      <Box className={"flex items-center gap-4"}>
        <Config />
        <ChangeThemeButton />
        <UserProfileHeader />
      </Box>
    </header>
  );
};
export default Header;
