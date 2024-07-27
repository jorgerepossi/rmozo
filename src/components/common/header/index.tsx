import Config from "@/components/common/header/Config";

const Header = () => {
  return (
    <header
      className={
        "flex h-[90px] items-center justify-between bg-white px-4 shadow-sm"
      }
    >
      <nav> nav</nav>
      <div className={"flex items-center gap-2"}>
        <p> user </p>
        <Config />
      </div>
    </header>
  );
};
export default Header;
