"use client"

import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { ToastAction } from "@/shadcn-scss/components/Toast"
import { useToast } from "@/registry/default/ui/use-toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      className={buttonVariants({variant: "outline"})}
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}
