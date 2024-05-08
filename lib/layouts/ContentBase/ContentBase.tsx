import { ReactNode } from "react"
import { cn } from "../../utils/utils"

import "./ContentBase.scss"

export function ContentBase({
    useInvertedBreadcrumbs,
    extendedClass,
    children,
    breadcrumbs,
    title,
    actions,
}: {
    useInvertedBreadcrumbs?: boolean
    extendedClass?: string
    children?: ReactNode
    breadcrumbs?: ReactNode
    title?: ReactNode
    actions?: ReactNode
}) {
    return (
        <div
            className={cn(
                "rkt-main-content main-content ThemeGrid_Container",
                {
                    "rkt-content--inverted-breadcrumbs": useInvertedBreadcrumbs,
                },
                extendedClass
            )}
        >
            <div className="rkt-content__top">
                <div className="rkt-content__breadcrumbs ph">{breadcrumbs}</div>
                <div className="rkt-content__title-section">
                    <div className="rkt-content__title heading1 ph">{title}</div>
                    <div className="rkt-content__actions ph">{actions}</div>
                </div>
            </div>
            <div className="rkt-content__middle">{children}</div>
        </div>
    )
}
