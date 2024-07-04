import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/textarea
 * # or
 * $ npm install @shadcn-ui-sass/textarea
 * ```
 *
 */

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
}

type Story = StoryObj<typeof Textarea>

const template = (args: any) => <Textarea {...args} />

export const Default: Story = {
  render: (args) => template(args),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => template(args),
}

export default meta
