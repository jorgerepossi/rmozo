import type { MenuSectionProps } from "@/types/menu";

import MenuItem from "@/components/common/aside/menu/MenuItem";

const MainMenu = ({ items }: MenuSectionProps) => (
  <section>
    <h2>Main Menu</h2>
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  </section>
);

export default MainMenu;
