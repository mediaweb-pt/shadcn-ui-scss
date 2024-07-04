import { Checkbox } from "@/shadcn-scss/checkbox"
import { Label } from "@/shadcn-scss/label"

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
