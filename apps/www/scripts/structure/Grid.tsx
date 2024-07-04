import { cn } from "@/lib/utils"
import { ColProps, RowProps } from "./Grid.type"
import "./Grid.scss"

export function Row({
  columns = 1,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap = "base",
  className,
  children,
}: RowProps) {
  return (
    <div
      className={cn(
        `display-grid gap-${gap}`,
        {
          [`grid-cols-${columns}`]: columns,
          [`sm:grid-cols-${sm}`]: sm,
          [`md:grid-cols-${md}`]: md,
          [`lg:grid-cols-${lg}`]: lg,
          [`xl:grid-cols-${xl}`]: xl,
          [`xxl:grid-cols-${xxl}`]: xxl,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export function Col({
  span,
  sm,
  md,
  lg,
  xl,
  xxl,
  children,
  className,
  style,
}: ColProps) {
  return (
    <div
      className={cn(
        {
          [`col-span-${span}`]: span,
          [`sm:col-span-${sm}`]: sm,
          [`md:col-span-${md}`]: md,
          [`lg:col-span-${lg}`]: lg,
          [`xl:col-span-${xl}`]: xl,
          [`xxl:col-span-${xxl}`]: xxl,
        },
        className
      )}
      style={{ ...style }}
    >
      {children}
    </div>
  )
}
