import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "."
import { useMediaQuery } from "../../utils/use-media-query"
import { Button } from "../button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog"
import { Input } from "../input"
import { Label } from "../label"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/drawer
 * # or
 * $ npm install @shadcn-ui-sass/drawer
 * ```
 *
 */

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Drawer>

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]
const template = (args: any) => {
  const [goal, setGoal] = useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div
          className="full-width margin-auto"
          style={{
            maxWidth: "24rem",
          }}
        >
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="padding-x-base padding-top-base">
            <div className="display-flex align-items-center justify-content-center gap-s">
              <Button
                variant="outline"
                size="icon"
                className="border-radius-circle"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
                style={{
                  height: 32,
                  width: 32,
                }}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex1 text-align-center">
                <div
                  className="font-bold"
                  style={{ fontSize: 72, lineHeight: 1 }}
                >
                  {goal}
                </div>
                <div className="font-size-xs text-uppercase text-neutral-7">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-radius-circle"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
                style={{
                  height: 32,
                  width: 32,
                }}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="margin-top-base" style={{ height: 120 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const Default: Story = {
  render: (args) => template(args),
}

export const ResponsiveDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent style={{ maxWidth: 425 }}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form className="display-grid align-items-flex-start gap-base">
              <div className="display-grid gap-s">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  defaultValue="shadcn@example.com"
                />
              </div>
              <div className="display-grid gap-s">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@shadcn" />
              </div>
              <Button type="submit">Save changes</Button>
            </form>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <Drawer {...args} open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <form className="display-grid align-items-start gap-base padding-x-base">
            <div className="display-grid gap-s">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                defaultValue="shadcn@example.com"
              />
            </div>
            <div className="display-grid gap-s">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@shadcn" />
            </div>
            <Button type="submit">Save changes</Button>
          </form>
          <DrawerFooter className="padding-top-s">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export default meta
