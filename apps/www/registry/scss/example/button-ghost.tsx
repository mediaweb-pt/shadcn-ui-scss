import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonGhost() {
  return <Button className={buttonVariants({ variant: "ghost" })}>Ghost</Button>
}
