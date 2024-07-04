import type { Meta, StoryObj } from "@storybook/react"

import { Progress } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/progress
 * # or
 * $ npm install @shadcn-ui-sass/progress
 * ```
 *
 */

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 30,
  },
  argTypes: {
    value: {
      control: { type: "number" },
    },
  },
}

type Story = StoryObj<typeof Progress>

const template = (args: any) => (
  <div style={{ width: `300px`, height: `50px` }}>
    <Progress value={args.value} />
  </div>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
