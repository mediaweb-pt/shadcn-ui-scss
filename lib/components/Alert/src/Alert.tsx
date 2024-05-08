import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../utils/utils"
import "./Alert.scss"

const alertVariants = cva("alert", {
    variants: {
        variant: {
            destructive: "destructive",
        },
    },
})

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => <h5 ref={ref} className={cn("alert-title", className)} {...props} />
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn("alert-description", className)} {...props} />
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
