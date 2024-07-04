"use client"

import { Button, buttonVariants } from "@/shadcn-scss/button"
import { useToast } from "@/shadcn-scss/toast/use-toast"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      className={buttonVariants({ variant: "outline" })}
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
