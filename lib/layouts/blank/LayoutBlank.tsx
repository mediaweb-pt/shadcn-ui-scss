import { ReactNode } from "react"
import { cn } from "../../utils/utils"

import "./LayoutBlank.scss"

export interface LayoutProps {
    children?: ReactNode
    className?: string
}

export function LayoutBlank({ children, className }: LayoutProps) {
    return (
        <div className={cn("layout rkt-layout rkt-layout-blank", className)}>
            <div className="rkt-main main">
                <div className="rkt-content content">{children}</div>
            </div>
        </div>
    )
}
