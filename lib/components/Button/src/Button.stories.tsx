import type { Meta, StoryObj } from "@storybook/react"
import { Button, buttonVariants } from "./Button"
import { ChevronRight, Loader2, Mail } from "lucide-react"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof Button>

const template = (args: any) => <Button {...args}>Button</Button>

export const Default: Story = {
    render: (args) => template(args),
}

export const LinkUsage: Story = {
    render: (args) => (
        <div className="display-flex gap-base">
            <a href="!#" className={buttonVariants({ variant: "outline" })}>
                Click here
            </a>
            <Button asChild {...args}>
                <a href="!#">Login</a>
            </Button>
        </div>
    ),
}

export const Secondary: Story = {
    args: { variant: "secondary" },
    render: (args) => <Button {...args}>Secondary</Button>,
}

export const Destructive: Story = {
    args: { variant: "destructive" },
    render: (args) => <Button {...args}>Destructive</Button>,
}

export const Outline: Story = {
    args: { variant: "outline" },
    render: (args) => <Button {...args}>Outline</Button>,
}

export const Ghost: Story = {
    args: { variant: "ghost" },
    render: (args) => <Button {...args}>Ghost</Button>,
}

export const Link: Story = {
    args: { variant: "link" },
    render: (args) => <Button {...args}>Link</Button>,
}

export const Icon: Story = {
    args: { variant: "outline", size: "icon" },
    render: (args) => (
        <Button {...args}>
            <ChevronRight />
        </Button>
    ),
}

export const ButtonWithIcon: Story = {
    render: (args) => (
        <Button {...args}>
            <Mail /> Login with Email
        </Button>
    ),
}

export const Sizes: Story = {
    argTypes: {
        size: { options: ["default", "sm", "lg"], control: { type: "select" } },
    },
    render: (args) => <Button {...args}>Button</Button>,
}

export const Loading: Story = {
    render: (args) => (
        <Button disabled {...args}>
            <Loader2 className="animate-spin" /> Please wait
        </Button>
    ),
}

export const AsChild: Story = {
    render: (args) => (
        <Button asChild {...args}>
            <a href="!#">Login</a>
        </Button>
    ),
}

export default meta
