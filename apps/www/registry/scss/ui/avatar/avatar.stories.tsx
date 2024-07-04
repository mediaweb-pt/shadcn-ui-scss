import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarFallback, AvatarImage } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/avatar
 * # or
 * $ npm install @shadcn-ui-sass/avatar
 * ```
 *
 */

const meta: Meta<ComponentProps<typeof Avatar>> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Avatar>

const template = (args: any) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
)

export const Default: Story = {
  render: (args) => template(args),
}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export default meta
