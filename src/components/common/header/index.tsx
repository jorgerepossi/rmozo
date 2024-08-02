import Box from "@/components/common/box";
import Config from "@/components/common/header/Config";
import UserProfileHeader from "@/components/common/user-profile-header";

const Header = () => {
  return (
    <header
      className={
        "flex h-[90px] items-center justify-between bg-white px-4 shadow-sm"
      }
    >
      <nav> </nav>
      <Box className={"flex items-center gap-4"}>
        <Config />
        <UserProfileHeader />
      </Box>
    </header>
  );
};
export default Header;
