import { Button, buttonVariants } from "@/shadcn-scss/components/Button"

export default function ButtonDestructive() {
  return <Button className={buttonVariants({variant: "destructive"})}>Destructive</Button>
}
