import { Card, CardContent } from "@/shadcn-scss/components/Card"
import { Label } from "@/shadcn-scss/components/Label"

import DatePickerWithRange from "@/registry/scss/example/date-picker-with-range"

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  )
}
