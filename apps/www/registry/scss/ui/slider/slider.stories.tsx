import type { Meta, StoryObj } from "@storybook/react"

import { Slider } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/slider
 * # or
 * $ npm install @shadcn-ui-sass/slider
 * ```
 *
 */

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    defaultValue: [30],
    max: 100,
    step: 1,
    disabled: false,
  },
}

type Story = StoryObj<typeof Slider>

const template = (args: any) => <Slider {...args} />

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
