import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { LayoutBlank } from "./LayoutBlank"

type Props = ComponentProps<typeof LayoutBlank>

const meta: Meta<Props> = {
    title: "Layouts/Blank",
    component: LayoutBlank,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        className: "extra class names",
    },
    argTypes: {
        children: { control: false },
    },
}

type Story = StoryObj<Props>

const template = (args: any) => <LayoutBlank {...args}>Children</LayoutBlank>

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
