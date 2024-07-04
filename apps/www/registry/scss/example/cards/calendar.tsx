"use client"

import { Calendar } from "@/shadcn-scss/calendar"
import { Card, CardContent } from "@/shadcn-scss/card"
import { addDays } from "date-fns"

const start = new Date(2023, 5, 5)

export function CardsCalendar() {
  return (
    <Card>
      <CardContent className="padding-none">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: addDays(start, 8),
          }}
        />
      </CardContent>
    </Card>
  )
}
