import { useState } from "react"
import { useMediaQuery } from "@/scripts/utils/use-media-query"
import type { Meta, StoryObj } from "@storybook/react"
import { ChevronDownIcon, Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "."
import { Button } from "../button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/breadcrumbs
 * # or
 * $ npm install @shadcn-ui-sass/breadcrumbs
 * ```
 *
 */

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Breadcrumb>

const template = (args: any) => (
  <Breadcrumb {...args}>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BreadcrumbEllipsis />
            <span className="sr-only">Toggle menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)

export const Default: Story = {
  render: (args) => template(args),
}

export const CustomSeparator: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Dropdown: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              Components
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const LinkComponent: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/">Home</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/components">Components</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Building Your Application" },
  { href: "#", label: "Data Fetching" },
  { label: "Caching and Revalidating" },
]

const ITEMS_TO_DISPLAY = 3
export const Responsive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={items[0].href}>
              {items[0].label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {items.length > ITEMS_TO_DISPLAY ? (
            <>
              <BreadcrumbItem>
                {isDesktop ? (
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1"
                      aria-label="Toggle menu"
                    >
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {items.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <a href={item.href ? item.href : "#"}>{item.label}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger aria-label="Toggle Menu">
                      <BreadcrumbEllipsis />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-align-left">
                        <DrawerTitle>Navigate to</DrawerTitle>
                        <DrawerDescription>
                          Select a page to navigate to.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="display-grid gap-xs padding-x-base">
                        {items.slice(1, -2).map((item, index) => (
                          <a
                            key={index}
                            href={item.href ? item.href : "#"}
                            className="padding-y-xs font-size-s"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                      <DrawerFooter className="padding-top-base">
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ) : null}
          {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink
                    asChild
                    className="text-ellipsis"
                    style={{ maxWidth: 20 }}
                  >
                    <a href={item.href}>{item.label}</a>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage
                  className="text-ellipsis"
                  style={{ maxWidth: 20 }}
                >
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}

export default meta
