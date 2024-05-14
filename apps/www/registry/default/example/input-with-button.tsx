import { Button } from "@/shadcn-scss/components/Button"
import { Input } from "@/shadcn-scss/components/Input"

export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
