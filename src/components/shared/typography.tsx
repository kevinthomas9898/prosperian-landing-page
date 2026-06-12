import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: React.ElementType;
}

type Variant = "84px" | "64px" | "36px" | "22px" | "20px" | "14px" | "20px-regular" | "54px" | "42px";

const styles: Record<Variant, string> = {
  "84px":
    "font-['Helvetica_Neue'] font-bold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[84px] leading-[0.85] tracking-normal text-center",

  "64px":
    "font-['Helvetica'] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[100%] tracking-normal text-center",

  "54px":
    "font-['Helvetica_Neue'] font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[54px] leading-[42px] md:leading-[56px] xl:leading-[70px] tracking-normal text-center",

  "42px":
    "font-['Helvetica'] font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px] leading-[100%] tracking-normal text-center",

  "36px":
    "font-['Helvetica'] font-bold text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] leading-[100%] tracking-normal",

  "22px":
    "font-inter font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-[100%] tracking-normal text-center",

  "20px":
    "font-inter font-semibold text-[18px] lg:text-[20px] leading-[100%] tracking-normal",

  "20px-regular":
    "font-['Helvetica'] font-normal text-[18px] lg:text-[20px] leading-[28px] text-justify",

  "14px":
    "font-['Helvetica'] font-normal text-[14px] leading-[100%] tracking-normal text-center",
};

export function Typography({
  variant = "64px",
  as: Component = "div",
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "relative z-10 text-black",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}