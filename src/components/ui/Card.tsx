import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "copper" | "teal" | "none";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = "none", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass rounded-2xl p-6 transition-all duration-500 hover:translate-y-[-4px]",
          glow === "copper" && "hover:glow-copper",
          glow === "teal" && "hover:glow-teal",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
