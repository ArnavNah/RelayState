import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-copper-500 text-white hover:bg-copper-600 glow-copper transition-all duration-300",
      outline: "border border-copper-500 text-copper-500 hover:bg-copper-500/10 transition-all duration-300",
      ghost: "text-white hover:bg-white/10 transition-all duration-300",
      accent: "bg-teal-500 text-white hover:bg-teal-600 glow-teal transition-all duration-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-full font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
