import type { Meta, StoryObj } from "@storybook/react"
import { CalendarDays } from "lucide-react"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "."
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Button } from "../button"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/hover-card
 * # or
 * $ npm install @shadcn-ui-sass/hover-card
 * ```
 *
 */

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof HoverCard>

const template = (args: any) => (
  <HoverCard {...args}>
    <HoverCardTrigger asChild>
      <Button variant="link">@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="display-flex justify-content-space-between gap-base">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="margin-top-xs font-size-s font-semi-bold">@nextjs</h4>
          <p className="margin-top-xs font-size-s">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="margin-top-xs display-flex align-items-center padding-top-s">
            <CalendarDays
              className="margin-right-s"
              style={{
                opacity: 0.7,
                height: "var(--font-size-base)",
                width: "var(--font-size-base)",
              }}
            />
            <span className="font-size-xs text-neutral-7">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
