// Components
import Box from "@/components/common/box";
import ButtonResizePanel from "@/components/common/buttons/ButtonResizePanel";
import ChangeThemeButton from "@/components/common/buttons/ChangeTheme";
import Config from "@/components/common/header/Config";
import UserProfileHeader from "@/components/common/user-profile-header";

// Store
import useToggleAside from "@/store/toggle-aside";

const Header = () => {
  const { toggleAside } = useToggleAside();

  return (
    <header
      className={"flex h-[90px] items-center justify-between px-4 shadow-sm"}
    >
      <Box className={"flex items-center gap-[24px]"}>
        <ButtonResizePanel onClick={toggleAside} />
        <Box>
          <p className={"text-headline-small"}> Dashboard</p>
          <p className={"text-body-small text-[--neutral-n40]"}>
            12 Agosto 2024
          </p>
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
