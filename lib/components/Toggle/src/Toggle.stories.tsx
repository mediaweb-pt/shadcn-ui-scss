import type { Meta, StoryFn } from "@storybook/react"
import { Toggle } from "./Toggle"
import { Bold } from "lucide-react"


const meta: Meta<typeof Toggle> = {
    title: "Components/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["default", "outline"],
            control: { type: "radio" },
        },
        size: {
            options: ["default", "sm", "lg"],
            control: { type: "select" },
        },
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
}

const Template: StoryFn = (props) => <Toggle {...props}><Bold /></Toggle>

export const Default = Template.bind({})
Default.args = {
    variant: "default",
    size: "default",
}

export const Small = Template.bind({})
Small.args = {
    variant: "default",
    size: "sm",
}

export const Large = Template.bind({})
Large.args = {
    variant: "default",
    size: "lg",
}

export const Outline = Template.bind({})
Outline.args = {
    variant: "outline",
    size: "default",
}

export default meta
