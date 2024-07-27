import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

interface BoxProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  props?: ComponentPropsWithoutRef<T>;
  className?: string;
}

const Box = <T extends ElementType = "div">({
  as,
  children,
  ...props
}: BoxProps<T>) => {
  const Component = as ?? "div";
  return <Component {...props}>{children}</Component>;
};

export default Box;
