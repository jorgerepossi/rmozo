import Box from "@/components/common/box";
import Config from "@/components/common/header/Config";

const Header = () => {
  return (
    <header
      className={
        "flex h-[90px] items-center justify-between bg-white px-4 shadow-sm"
      }
    >
      <nav> nav</nav>
      <Box className={"flex items-center gap-2"}>
        <p> user </p>
        <Config />
      </Box>
    </header>
  );
};
export default Header;
