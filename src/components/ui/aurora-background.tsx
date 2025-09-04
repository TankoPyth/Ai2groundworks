"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col w-screen min-h-screen items-center justify-center text-slate-950 transition-bg overflow-x-hidden",
          "bg-gray-800",
          className
        )}
        {...props}
      >
        
        {/* Content layer */}
        <div className="relative z-50 w-full">
          {children}
        </div>
      </div>
    </main>
  );
};