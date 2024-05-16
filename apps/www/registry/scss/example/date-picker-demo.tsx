"use client"

import * as React from "react"
import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import { Calendar } from "@/shadcn-scss/components/Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-scss/components/Popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={
            buttonVariants({ variant: "outline" }) +
            cn(
              " w-[280px] justify-start text-left font-normal",
              !date && " text-muted-foreground"
            )
          }
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
