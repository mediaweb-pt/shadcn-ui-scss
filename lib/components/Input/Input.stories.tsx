import type { Meta, StoryObj } from "@storybook/react"
import { useForm } from "react-hook-form"

import { Button } from "../Button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form"
import { Label } from "../Label"
import { Input } from "./"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/input
 * # or
 * $ npm install @shadcn-ui-sass/input
 * ```
 *
 */

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Input>

const template = (args: any) => (
  <Input {...args} type="email" placeholder="Email" />
)

export const Default: Story = {
  render: (args) => template(args),
}

export const File: Story = {
  render: (args) => (
    <div
      className="display-grid full-width align-items-center gap-s"
      style={{
        maxWidth: "24rem",
      }}
    >
      <Label htmlFor="picture">Picture</Label>
      <Input {...args} id="picture" type="file" style={{ maxWidth: "20rem" }} />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => template(args),
}

export const WithLabel: Story = {
  render: (args) => (
    <div
      className="display-grid full-width align-items-center gap-s"
      style={{
        maxWidth: "24rem",
      }}
    >
      <Label htmlFor="email">Email</Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <div
      className="display-flex full-width align-items-center gap-s"
      style={{ maxWidth: "24rem" }}
    >
      <Input {...args} type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
}

export const FormExample: Story = {
  render: (args) => {
    const form = useForm()

    return (
      <Form {...form}>
        <form className="gap-s" style={{ width: "66.7%" }}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...args} placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="margin-top-m">
            Submit
          </Button>
        </form>
      </Form>
    )
  },
}

export default meta
