import MenuItem from "@/components/common/aside/menu/MenuItem";

import type { MenuSectionProps } from "@/types/menu";

const SupportMenu: React.FC<MenuSectionProps> = ({ items }) => (
  <section>
    <h2>Support</h2>
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  </section>
);

export default SupportMenu;
