import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonOutline() {
  return (
    <Button className={buttonVariants({ variant: "outline" })}>Outline</Button>
  )
}
