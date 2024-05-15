import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/separator
 * # or
 * $ npm install @shadcn-ui-sass/separator
 * ```
 *
 */

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Separator>

const template = (args: any) => <Separator {...args} />

export const Default: Story = {
  render: (args) => template(args),
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => template(args),
}

export default meta
