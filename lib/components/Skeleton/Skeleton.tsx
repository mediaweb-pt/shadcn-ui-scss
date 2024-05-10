import { cn } from "../../utils/utils"

//import "./Skeleton.scss"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("skeleton", className)} {...props} />
}

export { Skeleton }
