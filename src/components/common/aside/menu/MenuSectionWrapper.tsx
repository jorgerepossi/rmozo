import MenuItem from "@/components/common/aside/menu/MenuItem";

import type { MenuSectionProps } from "@/types/menu";

interface MenuSectionWrapperProps {
  items: MenuSectionProps["items"];
  label: string;
}

const MenuSectionWrapper = ({ items, label }: MenuSectionWrapperProps) => {
  return (
    <section className={"flex flex-col gap-2 py-2.5"}>
      <p className={"text-sm text-neutral-n60"}>{label}</p>
      <ul className={"flex flex-col px-2"}>
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default MenuSectionWrapper;
