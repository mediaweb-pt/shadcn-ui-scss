import { ReactNode } from "react"
import { cn } from "../../utils/utils"

import "./Header.scss"

export function Header({
    topNav,
    logoLeft,
    logoRight,
    menu,
    leftActions,
    rightActions,
    bottomNav,
    className,
}: {
    topNav?: ReactNode
    leftActions?: ReactNode
    logoLeft?: ReactNode
    menu?: ReactNode
    logoRight?: ReactNode
    rightActions?: ReactNode
    bottomNav?: ReactNode
    className?: string
}) {
    return (
        <>
            <div className={cn("rkt-topmenu", className)}>
                <div className="rkt-topmenu__aside">
                    <div>{topNav}</div>
                </div>
                <div className="rkt-topmenu__main">
                    <nav className="rkt-topmenu__content">
                        <div className="rkt-topmenu__actions ph">{leftActions}</div>
                        <div className="rkt-topmenu__logo ph">{logoLeft}</div>
                        <div className="rkt-topmenu__menu ph">{menu}</div>
                        <div className="rkt-topmenu__logo ph">{logoRight}</div>
                        <div className="rkt-topmenu__actions ph">{rightActions}</div>
                    </nav>
                </div>
                <div className="rkt-topmenu__nav">
                    <div>{bottomNav}</div>
                </div>
            </div>
            <div className="rkt-sidemenu__overlay" />
        </>
    )
}
