import { Button } from "@/shadcn-scss/components/Button"
import { Textarea } from "@/shadcn-scss/components/TextArea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
