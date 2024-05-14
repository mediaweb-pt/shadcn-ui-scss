import { Button, buttonVariants } from "@/shadcn-scss/components/Button"

export default function ButtonSecondary() {
  return <Button className={buttonVariants({variant: "secondary"})}>Secondary</Button>
}
