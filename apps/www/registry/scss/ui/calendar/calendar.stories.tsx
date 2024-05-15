import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { Calendar } from "."
import { cn } from "../../utils/utils"
import { Button } from "../button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/Calendar
 * # or
 * $ npm install @shadcn-ui-sass/Calendar
 * ```
 *
 */

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Calendar>

const template = (args: any) => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return <Calendar {...args} mode="single" selected={date} onSelect={setDate} />
}

export const Default: Story = {
  render: (args) => <div className="display-flex">{template(args)}</div>,
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
                          "padding-left-base text-align-left font-regular",
                          !field.value && "text-neutral-7"
                        )}
                        style={{ width: 240 }}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="margin-left-auto" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="padding-none"
                    align="start"
                    style={{ width: "auto" }}
                  >
                    <Calendar
                      {...args}
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
