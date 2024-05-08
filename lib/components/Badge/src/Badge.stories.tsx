import type { Meta, StoryObj } from "@storybook/react"
import { Badge, badgeVariants } from "./Badge"

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof Badge>

const template = (args: any) => <Badge {...args}>Badge</Badge>

export const Default: Story = {
    render: (args) => template(args),
}

export const Link: Story = {
    render: (args) => (
        <a href="!#" className={badgeVariants({ variant: "outline" })} {...args}>
            Badge
        </a>
    ),
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
    render: (args) => template(args),
}

export const Outline: Story = {
    args: {
        variant: "outline",
    },
    render: (args) => template(args),
}

export const Destructive: Story = {
    args: {
        variant: "destructive",
    },
    render: (args) => template(args),
}

export default meta
