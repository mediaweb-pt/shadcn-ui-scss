import { Button, buttonVariants } from "@/shadcn-scss/components/Button"

export default function ButtonGhost() {
  return <Button className={buttonVariants({variant: "ghost"})}>Ghost</Button>
}
