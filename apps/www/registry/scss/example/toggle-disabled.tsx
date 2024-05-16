import { Toggle } from "@/shadcn-scss/components/Toggle"
import { Underline } from "lucide-react"

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle underline" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
