import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

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
      {children}
    </Component>
  );
};
export default Title;
