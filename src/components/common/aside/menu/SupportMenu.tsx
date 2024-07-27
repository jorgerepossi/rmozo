import MenuSectionWrapper from "@/components/common/aside/menu/MenuSectionWrapper";

import type { MenuSectionProps } from "@/types/menu";

const SupportMenu: React.FC<MenuSectionProps> = ({ items }) => (
  <MenuSectionWrapper label={"Support"} items={items} />
);

export default SupportMenu;
