import { Input } from "@/shadcn-scss/components/Input"
import { Label } from "@/shadcn-scss/components/Label"

export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
