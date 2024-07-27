import type { ReactNode } from "react";

import { Card as InCard } from "@/components/ui/card";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <InCard className={`p-6 ${className}`}>{children}</InCard>;
};

export default Card;
