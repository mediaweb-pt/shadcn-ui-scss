import { Label } from "@/shadcn-scss/components/Label"
import { Textarea } from "@/shadcn-scss/components/TextArea"

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}