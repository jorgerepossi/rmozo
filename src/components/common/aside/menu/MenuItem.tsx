import type { MenuItemProps } from "@/types/menu";

const MenuItem = ({
  label,
  icon: Icon,
  additionalClasses = "",
}: MenuItemProps) => (
  <li className={`flex items-center gap-2 ${additionalClasses}`}>
    {Icon && (
      <span>
        <Icon />
      </span>
    )}
    <p>{label}</p>
  </li>
);

export default MenuItem;
