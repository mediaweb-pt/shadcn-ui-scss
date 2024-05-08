import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "./"
import { Label } from "../../Label/src"

const meta: Meta<typeof RadioGroup> = {
    title: "Components/Radio Group",
    component: RadioGroup,
    tags: ["autodocs"],
    args: {
        disabled: false,
        defaultValue: "2",
    },
}

type Story = StoryObj<typeof RadioGroup>

const template = (args: any) => (
    <RadioGroup {...args}>
        <div className="display-flex align-items-center">
            <RadioGroupItem className="margin-right-xs" value="1" id="1" />
            <Label htmlFor="1">
                Option 1
            </Label>
        </div>
        <div className="display-flex align-items-center">
            <RadioGroupItem className="margin-right-xs" value="2" id="2" />
            <Label htmlFor="2">
                Option 2
            </Label>
        </div>
        <div className="display-flex align-items-center">
            <RadioGroupItem className="margin-right-xs" value="3" id="3" />
            <Label htmlFor="3">
                Option 3
            </Label>
        </div>
        <div className="display-flex align-items-center">
            <RadioGroupItem className="margin-right-xs" value="4" id="4" />
            <Label htmlFor="4">
                Option 4
            </Label>
        </div>
    </RadioGroup>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
