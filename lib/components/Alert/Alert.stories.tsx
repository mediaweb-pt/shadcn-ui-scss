import type { Meta, StoryObj } from "@storybook/react"
import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/alert
 * # or
 * $ npm install @shadcn-ui-sass/alert
 * ```
 *
 */
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Alert>

const template = (args: any) => (
  <Alert {...args}>
    <Terminal />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
)

export const Default: Story = {
  render: (args) => template(args),
}

export const Distructive: Story = {
  args: { variant: "destructive" },
  render: (args) => template(args),
}

export default meta