import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonDestructive() {
  return (
    <Button className={buttonVariants({ variant: "destructive" })}>
      Destructive
    </Button>
  )
}
