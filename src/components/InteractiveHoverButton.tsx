const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, variant = "primary", onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('InteractiveHoverButton clicked:', text);
    if (onClick) {
      onClick();
    }
  };

  const baseStyles = "group relative cursor-pointer overflow-hidden rounded-lg p-3 text-center font-semibold transition-all duration-300 touch-manipulation active:scale-95";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 shadow-md hover:shadow-lg",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl"
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 block transform transition-transform duration-200 group-hover:scale-105">
        {text}
      </span>
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";