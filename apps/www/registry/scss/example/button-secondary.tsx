import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonSecondary() {
  return (
    <Button className={buttonVariants({ variant: "secondary" })}>
      Secondary
    </Button>
  )
}
