"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import "./button.scss"

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      destructive: "btn-destructive ",
      outline: "btn-outline ",
      secondary: "btn-secondary ",
      ghost: "btn-ghost ",
      link: "btn-link ",
    },
    size: {
      sm: "btn-sm ",
      lg: "btn-lg ",
      icon: "btn-icon ",
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
