import type { Meta, StoryObj } from "@storybook/react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "."
import { Card, CardContent } from "../card"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/carousel
 * # or
 * $ npm install @shadcn-ui-sass/carousel
 * ```
 *
 */

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    opts: {
      num: 1,
      space: "base",
    },
  },
  argTypes: {
    opts: {
      space: {
        options: ["xs", "s", "base", "m", "l", "xl", "xxl"],
        control: { type: "select" },
      },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Carousel>

const template = (args: any) => (
  <div className="display-flex justify-content-center margin-top-xxl">
    <Carousel
      className="full-width"
      style={{ maxWidth: "20rem" }}
      opts={{ space: args.opts.space, num: args.opts.num }}
      orientation={args.orientation}
    >
      <CarouselContent
        style={{
          height:
            args.orientation === "vertical"
              ? args.opts.space === "xs" || args.opts.space === "s"
                ? 200
                : args.opts.space === "base"
                ? 210
                : args.opts.space === "m"
                ? 220
                : args.opts.space === "l"
                ? 240
                : args.opts.space === "xl"
                ? 260
                : args.opts.space === "xxl"
                ? 270
                : ""
              : "",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="padding-xs full-height">
              <Card className="full-height">
                <CardContent
                  className="display-flex align-items-center justify-content-center padding-m"
                  style={{
                    ...(args.orientation === "horizontal" && {
                      aspectRatio: "1 / 1",
                    }),
                  }}
                >
                  <span
                    className="font-size-h2 font-semi-bold"
                    style={{ lineHeight: 1 }}
                  >
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export const Default: Story = {
  render: (args) => template(args),
}

export const Sizes: Story = {
  args: { opts: { num: 2 } },
  render: (args) => template(args),
}

export const Spacing: Story = {
  args: { opts: { num: 2, space: "xl" } },
  render: (args) => template(args),
}

export const Oriention: Story = {
  args: { opts: { num: 2 }, orientation: "vertical" },
  render: (args) => template(args),
}

export default meta
