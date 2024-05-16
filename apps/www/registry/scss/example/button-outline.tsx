import { Button, buttonVariants } from "@/shadcn-scss/components/Button"

export default function ButtonOutline() {
  return (
    <Button className={buttonVariants({ variant: "outline" })}>Outline</Button>
  )
}
