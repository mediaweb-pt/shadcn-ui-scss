import type { Meta, StoryObj } from "@storybook/react"

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./Tooltip"
import { Button } from "../../Button/src"

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    args: {
        side: "top",
    },
    argTypes: {
        side: { options: ["top", "right", "bottom", "left"], control: { type: "select" } },
    },
}

type Story = StoryObj<typeof Tooltip>

const template = (args: any) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button>Open Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent side={args.side}>
                Tooltip
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
