import { Row } from "@/scripts/structure/Grid"
import type { Meta, StoryObj } from "@storybook/react"
import { Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "."
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/dialog
 * # or
 * $ npm install @shadcn-ui-sass/dialog
 * ```
 *
 */

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Dialog>

const template = (args: any) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="display-grid gap-base padding-y-base">
        <Row columns={4} className="align-items-center">
          <Label htmlFor="name" className="text-align-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </Row>
        <Row columns={4} className="align-items-center">
          <Label htmlFor="username" className="text-align-right">
            Username
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </Row>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const Default: Story = {
  render: (args) => template(args),
}

export const CustomCloseButton: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent
        style={{
          maxWidth: "28rem",
        }}
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="display-flex align-items-center gap-s">
          <div className="display-grid flex1 gap-s">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="icon">
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
        <DialogFooter className="justify-content-flex-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export default meta
