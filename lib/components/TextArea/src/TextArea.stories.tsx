import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./TextArea"

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
