import { Button, buttonVariants } from "@/shadcn-scss/button"
import { ChevronRight } from "lucide-react"

export default function ButtonIcon() {
  return (
    <Button className={buttonVariants({ variant: "outline", size: "icon" })}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}
