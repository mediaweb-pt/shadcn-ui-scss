import { ToggleGroup } from "@/shadcn-scss/toggle-group"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { Toggle } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/toggle
 * # or
 * $ npm install @shadcn-ui-sass/toggle
 * ```
 *
 */

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "outline"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof ToggleGroup>

const template = (args: any) => (
  <Toggle {...args}>
    <Bold />
  </Toggle>
)

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => template(args),
}

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
  },
  render: (args) => template(args),
}

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
  render: (args) => template(args),
}

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
  render: (args) => template(args),
}

export default meta
