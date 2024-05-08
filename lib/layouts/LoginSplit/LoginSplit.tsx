import { ReactNode } from "react"
import { cn } from "../../utils/utils"

import "./LoginSplit.scss"

export interface LayoutProps {
    enableAccessibilityFeatures?: boolean
    className?: string
    backgroundImage?: ReactNode
    form?: ReactNode
    children?: ReactNode
}

export function LoginSplit({
    enableAccessibilityFeatures = true,
    className,
    backgroundImage,
    form,
    children,
}: LayoutProps) {
    return (
        <div
            className={cn(
                "layout login-split",
                {
                    "has-accessible-features": enableAccessibilityFeatures,
                },
                className
            )}
        >
            <div className="login-background-image background-primary">{backgroundImage}</div>
            <div className="content">
                <div className="login-column-left">
                    <div className="login-form-content">{form}</div>
                </div>
                <div className="login-column-right ">
                    <div className="login-main-content">{children}</div>
                </div>
            </div>
        </div>
    )
}
