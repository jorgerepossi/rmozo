import Link from "next/link";

import useToggleAside from "@/store/toggle-aside";

import type { MenuItemProps } from "@/types/menu";

const MenuItem = ({
  label,
  icon: Icon,
  link,
  additionalClasses = "hover:bg-neutral py-3 transition-colors duration-200 cursor-pointer",
}: MenuItemProps) => {
  const { isAsideOpen } = useToggleAside();
  return (
    <Link href={link ?? ""}>
      <li
        className={`flex origin-left items-center gap-2 transition-all ${additionalClasses} ${isAsideOpen ? "justify-center" : "justify-start"} `}
      >
        {Icon && (
          <span
            className={`flex items-center justify-center rounded-full ${label === "Activas" ? "size-[20px] border-green-700 bg-green-700" : ""}`}
          >
            <Icon
              className={`${label === "Activas" ? "stroke-alert-n10" : ""}`}
              size={`${label === "Activas" ? 16 : 20}`}
            />
          </span>
        )}
        <span
          className={`origin-left text-sm font-normal text-neutral-n50 duration-200 ${isAsideOpen && "hidden"}`}
        >
          {label}
        </span>
      </li>
    </Link>
  );
};

export default MenuItem;
