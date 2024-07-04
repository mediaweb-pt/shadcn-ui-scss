import Link from "next/link"
import { Button, buttonVariants } from "@/shadcn-scss/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
