@@ .. @@
 const InteractiveHoverButton = React.forwardRef<
   HTMLButtonElement,
   InteractiveHoverButtonProps
 >(({ text = "Button", className, variant = "primary", onClick, ...props }, ref) => {
+  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
+    e.preventDefault();
+    e.stopPropagation();
+    console.log('InteractiveHoverButton clicked:', text);
+    if (onClick) {
+      onClick();
+    }
+  };
+
   const baseStyles = "group relative cursor-pointer overflow-hidden rounded-lg p-3 text-center font-semibold transition-all duration-300 touch-manipulation active:scale-95";
   
   const variantStyles = {
@@ .. @@
       className={cn(
         baseStyles,
         variantStyles[variant],
         className,
       )}
-      onClick={onClick}
+      onClick={handleClick}
       {...props}
     >