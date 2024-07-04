import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonLink() {
  return <Button className={buttonVariants({ variant: "link" })}>Link</Button>
}
