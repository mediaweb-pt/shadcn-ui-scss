"use client"

import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { useToast } from "@/registry/default/ui/use-toast"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      className={buttonVariants({variant: "outline"})}
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
