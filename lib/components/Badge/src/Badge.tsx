import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../utils/utils"
import "./Badge.scss"

const badgeVariants = cva("badge", {
    variants: {
        variant: {
            secondary: "badge-secondary",
            destructive: "badge-destructive",
            outline: "badge-outline",
        },
    },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
