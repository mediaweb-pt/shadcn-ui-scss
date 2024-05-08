import type { Meta, StoryObj } from "@storybook/react"
import { Toaster } from "./Toaster"
import { ToastDemo } from "./demo/toast-demo"

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
