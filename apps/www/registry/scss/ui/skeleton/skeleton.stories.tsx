import type { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/skeleton
 * # or
 * $ npm install @shadcn-ui-sass/skeleton
 * ```
 *
 */

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Skeleton>

const template = (args: any) => (
  <div>
    <Skeleton
      {...args}
      style={{ width: "600px", height: "24px", marginBottom: "16px" }}
    />
    <Skeleton {...args} style={{ width: "500px", height: "48px" }} />
  </div>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
