import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import Box from "@/components/common/box";

interface TitleProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
  props?: ComponentPropsWithoutRef<T>;
  className?: string;
}
const Title = <T extends ElementType = "h1">({
  as,
  children,
  props,
  className,
}: TitleProps<T>) => {
  const Component = as ?? "h1";
  return (
    <Component {...props} className={`text-2xl font-semibold ${className}`}>
      <Box className={"flex items-center gap-4"}>
        <span className={"border-full h-[24px] w-[6px] bg-rm"} />
        {children}
      </Box>
    </Component>
  );
};
export default Title;
