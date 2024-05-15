"use client"

import { Button } from "@/registry/scss/ui/button"
import { ToastAction } from "@/registry/scss/ui/toast"
import { useToast } from "@/registry/scss/ui/use-toast"

export default function ToastDestructive() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
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
