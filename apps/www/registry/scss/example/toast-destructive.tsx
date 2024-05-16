"use client"

import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { ToastAction } from "@/shadcn-scss/components/Toast"

import { useToast } from "@/registry/default/ui/use-toast"

export default function ToastDestructive() {
  const { toast } = useToast()

  return (
    <Button
      className={buttonVariants({ variant: "outline" })}
      onClick={() => {
        toast({
          variant: "destructive",
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
