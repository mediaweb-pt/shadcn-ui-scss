import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./Collapsible"
import { Button } from "../../Button/src"

const meta: Meta<typeof Collapsible> = {
    title: "Components/Collapsible",
    component: Collapsible,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof Collapsible>
const template = (args: any) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Collapsible {...args} open={isOpen} onOpenChange={setIsOpen} style={{ width: 350 }}>
            <div className="display-flex align-items-center justify-content-space-between gap-base padding-x-base">
                <h4 className="font-size-s font-semi-bold">@peduarte starred 3 repositories</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="margin-top-s border-size-s border-radius-soft padding-x-base padding-y-s font-size-s">
                @radix-ui/primitives
            </div>
            <CollapsibleContent className="margin-top-s">
                <div className="border-radius-soft border-size-s padding-x-base padding-y-s font-size-s">
                    @radix-ui/colors
                </div>
                <div className="margin-top-s border-radius-soft border-size-s padding-x-base padding-y-s font-size-s">
                    @stitches/react
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
