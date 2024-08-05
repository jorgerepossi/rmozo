import type { ForwardRefExoticComponent, RefAttributes } from "react";

import type { LucideProps } from "lucide-react";

export interface MenuItemProps {
  id: string;
  label: string;
  link?: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  additionalClasses?: string;
  pathname?: string;
  isActive?: boolean;
}

export interface MenuSectionProps {
  items: MenuItemProps[];
}
