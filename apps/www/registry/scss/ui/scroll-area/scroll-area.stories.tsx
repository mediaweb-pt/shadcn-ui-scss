import type { Meta, StoryObj } from "@storybook/react"

import { ScrollArea, ScrollBar } from "."
import { Separator } from "../separator"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/scroll-area
 * # or
 * $ npm install @shadcn-ui-sass/scroll-area
 * ```
 *
 */

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof ScrollArea>

/*  ------- SAMPLE DATA ---------  */
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

/*  -----------------------------  */

export const Default: Story = {
  render: (args) => (
    <ScrollArea
      className="border-size-s border-radius-soft"
      style={{ height: "18rem", width: "12rem" }}
      {...args}
    >
      <div className="padding-base">
        <h4 className="margin-bottom-base font-size-s font-semi-bold">Tag</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="font-size-s">{tag}</div>
            <Separator className="margin-y-s" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea className="border-size-s border-radius-soft" {...args}>
      <div className="display-flex gap-base padding-base">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="border-radius-soft overflow-hidden">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-ratio-3-4 h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="padding-top-s font-size-xs text-neutral-7">
              Photo by{" "}
              <span className="text-neutral-10 font-bold">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export default meta
