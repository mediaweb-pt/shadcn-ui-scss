import { Checkbox } from "@/shadcn-scss/components/Checkbox"
import { Label } from "@/shadcn-scss/components/Label"

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
