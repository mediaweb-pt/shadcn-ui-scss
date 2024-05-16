import { Toggle } from "@/shadcn-scss/components/Toggle"
import { Bold } from "lucide-react"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
