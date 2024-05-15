"use client"

import { cn } from "@/lib/utils"

import "./skeleton.scss"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("skeleton", className)} {...props} />
}

export { Skeleton }
