import MenuSectionWrapper from "@/components/common/aside/menu/MenuSectionWrapper";

import type { MenuSectionProps } from "@/types/menu";

const BarTablesMenu = ({ items }: MenuSectionProps) => (
  <MenuSectionWrapper items={items} label={"Bar Tables"} />
);

export default BarTablesMenu;
