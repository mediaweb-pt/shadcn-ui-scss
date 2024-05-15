import type { Meta, StoryObj } from "@storybook/react"

import { Popover, PopoverContent, PopoverTrigger } from "."
import { Row } from "../../structure/Grid"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/popover
 * # or
 * $ npm install @shadcn-ui-sass/popover
 * ```
 *
 */

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Popover>

const template = (args: any) => (
  <Popover {...args}>
    <PopoverTrigger asChild>
      <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="display-grid gap-base">
        <div>
          <h4 className="font-medium" style={{ lineHeight: 1 }}>
            Dimensions
          </h4>
          <p className="font-size-s text-neutral-7 margin-top-s">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="display-grid gap-s margin-top-s">
          <Row columns={3} className="align-items-center">
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              defaultValue="100%"
              className="col-span-2"
              style={{ height: "2rem" }}
            />
          </Row>
          <Row columns={3} className="align-items-center">
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className="col-span-2"
              style={{ height: "2rem" }}
            />
          </Row>
          <Row columns={3} className="align-items-center">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              defaultValue="25px"
              className="col-span-2"
              style={{ height: "2rem" }}
            />
          </Row>
          <Row columns={3} className="align-items-center">
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className="col-span-2"
              style={{ height: "2rem" }}
            />
          </Row>
        </div>
      </div>
    </PopoverContent>
  </Popover>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
