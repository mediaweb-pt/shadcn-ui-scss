import type { Meta, StoryObj } from "@storybook/react"

import { Toaster } from "."
import ToastDemo from "../../example/toast-demo"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/toast
 * # or
 * $ npm install @shadcn-ui-sass/toast
 * ```
 *
 */

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof ToastDemo>

const template = (args: any) => (
  <>
    <ToastDemo {...args} />
    <Toaster />
  </>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
