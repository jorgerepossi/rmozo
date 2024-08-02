import * as React from "react";

import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExternalProps = { label?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps & ExternalProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        {label && (
          <Label htmlFor={props.name} className="text-neutral-n40">
            {" "}
            {label}{" "}
          </Label>
        )}
        <input
          id={props.name}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
Input.displayName = "Input";

export { Input };
