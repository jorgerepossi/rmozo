import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface MenuItemProps {
  id: string;
  label: string;
  link?: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  additionalClasses?: string;
}

export interface MenuSectionProps {
  items: MenuItemProps[];
}
