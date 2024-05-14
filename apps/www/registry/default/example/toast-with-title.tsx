"use client"

import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { useToast } from "@/registry/default/ui/use-toast"

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      className={buttonVariants({variant: "outline"})}
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
