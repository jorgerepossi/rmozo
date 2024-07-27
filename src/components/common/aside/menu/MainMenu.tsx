import MenuSectionWrapper from "@/components/common/aside/menu/MenuSectionWrapper";

import type { MenuSectionProps } from "@/types/menu";

const MainMenu = ({ items }: MenuSectionProps) => (
  <MenuSectionWrapper items={items} label={"Main Mane"} />
);

export default MainMenu;
