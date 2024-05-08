import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof Checkbox>

const template = (args: any) => (
    <div className="display-flex align-items-center gap-s">
        <Checkbox {...args} id="terms" />
        <label
            htmlFor="terms"
            className="font-size-s font-medium"
            style={{
                lineHeight: 1,
            }}
        >
            Accept terms and conditions
        </label>
    </div>
)

export const Default: Story = {
    render: (args) => template(args),
}

export const WithText: Story = {
    render: (args) => (
        <div className="display-flex gap-s">
            <Checkbox {...args} id="terms1" />
            <div className="display-grid gap-s" style={{ lineHeight: 1 }}>
                <label htmlFor="terms1" className="font-size-s font-medium" style={{ lineHeight: 1 }}>
                    Accept terms and conditions
                </label>
                <p className="font-size-s text-neutral-7">You agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    ),
}

export const Disabled: Story = {
    render: (args) => (
        <div className="display-flex align-items-center gap-s">
            <Checkbox {...args} id="terms2" disabled />
            <label htmlFor="terms2" className="font-size-s font-medium" style={{ lineHeight: 1 }}>
                Accept terms and conditions
            </label>
        </div>
    ),
}

export default meta
