import MenuItem from "@/components/common/aside/menu/MenuItem";

import type { MenuSectionProps } from "@/types/menu";

const UtilitiesMenu = ({ items }: MenuSectionProps) => (
  <section>
    <h2>Utilities</h2>
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  </section>
);

export default UtilitiesMenu;
