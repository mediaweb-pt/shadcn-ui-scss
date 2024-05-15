import type { Meta, StoryObj } from "@storybook/react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "."
import { Button } from "../button"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/alert-dialog
 * # or
 * $ npm install @shadcn-ui-sass/alert-dialog
 * ```
 *
 */

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof AlertDialog>

const template = (args: any) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
