import { Input } from "@/shadcn-scss/components/Input"
import { Label } from "@/shadcn-scss/components/Label"

export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
