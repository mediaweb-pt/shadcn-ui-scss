import { Toggle } from "@/shadcn-scss/components/Toggle"
import { Italic } from "lucide-react"

export default function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}