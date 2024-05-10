import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { useForm } from "react-hook-form"

import { cn } from "../../utils/utils"
import { Button } from "../Button"
import { Calendar } from "../Calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form"
import { Popover, PopoverContent, PopoverTrigger } from "../Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select"

const meta: Meta = {
  title: "Components/DatePicker",
  tags: ["autodocs"],
}

type Story = StoryObj

const template = (args: any) => {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-content-flex-start text-align-left font-regular",
            !date && "text-neutral-7"
          )}
          style={{
            width: 280,
          }}
        >
          <CalendarIcon className="margin-right-s" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="auto-width padding-none">
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

export const Default: Story = {
  render: (args) => template(args),
}

export const Range: Story = {
  render: (args) => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    })

    return (
      <div className="display-grid gap-s">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-content-flex-start text-align-left font-regular",
                !date && "text-neutral-7"
              )}
              style={{
                width: 300,
              }}
            >
              <CalendarIcon className="margin-right-s" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="auto-width padding-none" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}

export const WidthPresets: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date>()

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-content-flex-start text-align-left font-regular",
              !date && "text-neutral-7"
            )}
            style={{
              width: 280,
            }}
          >
            <CalendarIcon className="margin-right-s" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="display-flex auto-width flex-direction-column gap-s padding-s">
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    )
  },
}

export const FormExample: Story = {
  render: (args) => {
    const form = useForm()

    return (
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="display-flex flex-direction-column">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "padding-left-s text-align-left font-regular",
                          !field.value && "text-neutral-7"
                        )}
                        style={{ width: 240 }}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon
                          className="margin-left-auto"
                          style={{
                            opacity: 0.5,
                          }}
                        />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="auto-width padding-none"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="margin-top-l">
            Submit
          </Button>
        </form>
      </Form>
    )
  },
}

export default meta
