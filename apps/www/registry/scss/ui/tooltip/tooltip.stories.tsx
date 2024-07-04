import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "."
import { Button } from "../button"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/tooltip
 * # or
 * $ npm install @shadcn-ui-sass/tooltip
 * ```
 *
 */

type Props = ComponentProps<typeof Tooltip> &
  ComponentProps<typeof TooltipContent>
const meta: Meta<Props> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    side: "top",
  },
  argTypes: {
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Tooltip>

const template = (args: any) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Open Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent side={args.side}>Tooltip</TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
