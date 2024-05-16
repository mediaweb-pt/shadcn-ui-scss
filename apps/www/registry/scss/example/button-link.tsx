import { Button, buttonVariants } from "@/shadcn-scss/components/Button"

export default function ButtonLink() {
  return <Button className={buttonVariants({ variant: "link" })}>Link</Button>
}
