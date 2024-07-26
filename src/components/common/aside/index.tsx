import AsideMenu from "@/components/common/aside/AsideMenu";
import Logo from "@/components/common/aside/Logo";
import LogOutButton from "@/components/common/aside/LogOutButton";

const Aside = () => {
  return (
    <aside
      className={
        "grid min-w-[200px] grid-rows-[auto_1fr_auto] border-r-[1px] border-neutral-n10 px-2 py-4"
      }
    >
      <Logo />
      <AsideMenu />
      <LogOutButton />
    </aside>
  );
};
export default Aside;
