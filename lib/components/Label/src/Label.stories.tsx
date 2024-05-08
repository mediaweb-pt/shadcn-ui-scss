import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./Label"
import { Checkbox } from "../../Checkbox/src"

const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
    tags: ["autodocs"],
    args: {
        children: "Label text",
    },
}

type Story = StoryObj<typeof Label>

const template = (args: any) => (
    <div>
        <div className="display-flex align-items-center gap-s">
            <Checkbox id="terms" />
            <Label {...args} htmlFor="terms">
                Accept terms and conditions
            </Label>
        </div>
    </div>
)

export const Default: Story = {
    render: (args) => template(args),
}

export const Disabled: Story = {
    render: (args) => (
        <div>
            <div className="display-flex align-items-center gap-s">
                <Checkbox id="terms" disabled />
                <Label {...args} htmlFor="terms">
                    Accept terms and conditions
                </Label>
            </div>
        </div>
    ),
}

export default meta
