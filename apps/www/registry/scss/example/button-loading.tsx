import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { Loader2 } from "lucide-react"

export default function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}