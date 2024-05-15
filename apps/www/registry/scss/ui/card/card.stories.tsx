import type { Meta, StoryObj } from "@storybook/react"
import { BellRing, Check } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "."
import { cn } from "../../utils/utils"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"
import { Switch } from "../switch"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/card
 * # or
 * $ npm install @shadcn-ui-sass/card
 * ```
 *
 */

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Card>

const template = (args: any) => (
  <Card {...args} style={{ width: 350 }}>
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="display-grid align-items-center gap-base">
          <div className="display-flex flex-direction-column gap-xs">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="display-flex flex-direction-column">
            <Label htmlFor="framework" className="margin-bottom-xs">
              Framework
            </Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="display-flex justify-content-space-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
)

export const Default: Story = {
  render: (args) => template(args),
}

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]
export const Example: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 380 }}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="display-grid gap-base">
        <div className="display-flex align-items-center gap-base border-size-s border-radius-soft padding-base">
          <BellRing />
          <div className="flex1">
            <p className="font-size-s font-medium" style={{ lineHeight: 1 }}>
              Push Notifications
            </p>
            <p className="margin-top-xs font-size-s text-neutral-7">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={cn("display-flex gap-base", {
                "margin-bottom-base padding-bottom-base":
                  index < notifications.length - 1,
              })}
            >
              <span
                className="display-flex border-radius-circle background-info margin-top-xs"
                style={{ width: "0.5rem", height: "0.5rem" }}
              />
              <div>
                <p
                  className="font-size-s font-medium"
                  style={{ lineHeight: 1 }}
                >
                  {notification.title}
                </p>
                <p className="margin-top-xs font-size-s text-neutral-7">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="full-width">
          <Check className="margin-right-s" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  ),
}

export default meta
