import MenuItem from "@/components/common/aside/menu/MenuItem";
import type { MenuItemProps, MenuSectionProps } from "@/types/menu";
import { usePathname } from "next/navigation";

interface MenuSectionWrapperProps {
  items: MenuSectionProps["items"];
  label: string;
}

const MenuSectionWrapper = ({ items, label }: MenuSectionWrapperProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <section className={"flex flex-col gap-2 py-2.5"}>
      <p className={"text-sm text-[--surface-n10]"}>{label}</p>
      <ul className={"flex flex-col px-0"}>
        {items.map((item: MenuItemProps) => (
          <MenuItem
            key={item.id}
            {...item}
            isActive={item.pathname === pathname}
          />
        ))}
      </ul>
    </section>
  );
};

export default MenuSectionWrapper;
