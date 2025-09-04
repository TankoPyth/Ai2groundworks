import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, variant = "primary", onClick, ...props }, ref) => {
  const baseStyles = "group relative cursor-pointer overflow-hidden rounded-lg p-3 text-center font-semibold transition-all duration-300";
  
  const variantStyles = {
    primary: "bg-white text-dark-primary border border-white hover:shadow-xl",
    secondary: "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20"
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <span className="inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-500 delay-75 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] -z-10",
        variant === "primary" ? "bg-cyan-primary group-hover:bg-cyan-primary" : "bg-white/20 group-hover:bg-white/30"
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };