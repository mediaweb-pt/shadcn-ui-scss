import type { Meta, StoryObj } from "@storybook/react"
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup"
import { Bold, Italic, Underline } from "lucide-react"

const meta: Meta<typeof ToggleGroup> = {
    title: "Components/ToggleGroup",
    component: ToggleGroup,
    tags: ["autodocs"],
    args: {
        type: "multiple",
        disabled: false,
    },
    argTypes: {
        type: {
            options: ["single", "multiple"],
            control: { type: "select" },
        },
    },
}

type Story = StoryObj<typeof ToggleGroup>

const template = (args: any) => (
    <ToggleGroup type="multiple" variant={"default"} {...args}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
        </ToggleGroupItem>
    </ToggleGroup>
)

export const Default: Story = {
    render: (args) => template(args),
}

export const SingleSelection: Story = {
    args: {
        type: "single",
    },
    render: (args) => template(args),
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => template(args),
}

export default meta
