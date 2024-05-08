import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "../../../utils/utils"
import "./AspectRatio.scss"

const AspectRatio = React.forwardRef<
    React.ElementRef<typeof AspectRatioPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AspectRatioPrimitive.Root className={cn("aspect-ratio", className)} {...props} ref={ref} />
))
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio }
