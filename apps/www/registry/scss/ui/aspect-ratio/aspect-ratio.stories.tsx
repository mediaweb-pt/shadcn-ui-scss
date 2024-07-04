import type { Meta, StoryObj } from "@storybook/react"

import { AspectRatio } from "."
import LOGO from "../../assets/images/bg_login_new.jpg"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/aspect-ratio
 * # or
 * $ npm install @shadcn-ui-sass/aspect-ratio
 * ```
 *
 */

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  args: {
    ratio: 16 / 9,
  },
}

type Story = StoryObj<typeof AspectRatio>

const template = (args: any) => (
  <div style={{ width: 450 }}>
    <AspectRatio ratio={args.ratio}>
      <img src={LOGO.src} alt="Image" />
    </AspectRatio>
  </div>
)

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
