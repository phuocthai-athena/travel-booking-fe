import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-6 leading-[140%] rounded text-lg font-bold transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-burnt-sienna-500 text-dove-gray-0 hover:bg-burnt-sienna-600 disabled:bg-burnt-sienna-300",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-burnt-sienna-500 bg-burnt-sienna-50 text-burnt-sienna-500 hover:bg-burnt-sienna-500 hover:text-dove-gray-0",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "bg-transparent text-burnt-sienna-500 hover:bg-burnt-sienna-50 hover:text-burnt-sienna-600",
        link: "text-burnt-sienna-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "text-base",
        lg: "text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
