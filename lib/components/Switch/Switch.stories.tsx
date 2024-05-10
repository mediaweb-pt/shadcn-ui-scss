import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../Label"
import { Switch } from "./"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/switch
 * # or
 * $ npm install @shadcn-ui-sass/switch
 * ```
 *
 */

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Switch>

const template = (args: any) => (
  <div className="display-flex align-items-center gap-s">
    <Switch {...args} id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
