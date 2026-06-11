import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: React.ElementType;
}

const styles: Record<Variant, string> = {
  h1: "font-roboto font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-normal",

  h2: "font-roboto font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-normal uppercase",

  h3: "font-roboto font-semibold text-3xl md:text-4xl leading-relaxed tracking-normal",

  h4: "font-open-sans font-bold text-xl md:text-2xl leading-snug tracking-normal",

  h5: "font-roboto font-medium text-lg lg:text-xl leading-relaxed tracking-normal",

  p: "font-roboto text-base lg:text-lg leading-relaxed tracking-normal",
};

export function Typography({
  variant = "p",
  as,
  className,
  ...props
}: TypographyProps) {
  const Component = as || variant;

  return (
    <Component
      className={cn("text-white z-10 relative", styles[variant], className)}
      {...props}
    />
  );
}
