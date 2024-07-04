"use client"

import { Button, buttonVariants } from "@/shadcn-scss/button"
import { ToastAction } from "@/shadcn-scss/toast"
import { useToast } from "@/shadcn-scss/toast/use-toast"

export default function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      className={buttonVariants({ variant: "outline" })}
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
