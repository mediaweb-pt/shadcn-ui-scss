import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./AspectRatio"
import LOGO from "../../../assets/images/bg_login_new.jpg"

const meta: Meta<typeof AspectRatio & { from: number; to: number }> = {
    title: "Components/AspectRatio",
    component: AspectRatio,
    tags: ["autodocs"],
    args: {
        from: 16,
        to: 9,
    },
}

type Story = StoryObj<typeof AspectRatio>

const template = (args: any) => (
    <div style={{ width: 450 }}>
        <AspectRatio ratio={args.from / args.to}>
            <img src={LOGO} alt="Image" />
        </AspectRatio>
    </div>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
