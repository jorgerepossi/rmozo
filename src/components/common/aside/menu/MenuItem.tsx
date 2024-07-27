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
        className={`flex items-center gap-2 ${additionalClasses} ${isAsideOpen ? "justify-center" : ""}`}
      >
        {Icon && (
          <span>
            <Icon size={20} />
          </span>
        )}
        <p
          className={`text-sm font-normal text-neutral-n60 ${isAsideOpen ? "delay-250 hidden transition-all" : "delay-400 block transition-all"}`}
        >
          {label}
        </p>
      </li>
    </Link>
  );
};

export default MenuItem;
