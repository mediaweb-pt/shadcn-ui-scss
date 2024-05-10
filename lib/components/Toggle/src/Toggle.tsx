import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../utils/utils"

//import "./Toggle.scss";

const toggleVariants = cva("toggle", {
  variants: {
    variant: {
      default: "",
      outline: "toggle--outline",
    },
    size: {
      default: "",
      sm: "toggle--small",
      lg: "toggle--large",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
