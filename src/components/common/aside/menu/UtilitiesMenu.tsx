import MenuSectionWrapper from "@/components/common/aside/menu/MenuSectionWrapper";

import type { MenuSectionProps } from "@/types/menu";

const UtilitiesMenu = ({ items }: MenuSectionProps) => (
  <MenuSectionWrapper items={items} label={"Utilities"} />
);

export default UtilitiesMenu;
