import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./"

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/command
 * # or
 * $ npm install @shadcn-ui-sass/command
 * ```
 *
 */

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Command>

const template = (args: any) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="font-size-s text-neutral-7">
        Press{" "}
        <kbd
          className="display-inline-flex align-items-center gap-xs border-radius-soft padding-x-xs font-size-xxs font-medium text-neutral-7"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            opacity: 1,
            backgroundColor: "hsl(var(--muted))",
            height: "1.25rem",
            border: "var(--border-size-s) solid hsl(var(--border))",
          }}
        >
          <span className="font-size-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="margin-right-base" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="margin-right-base" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="margin-right-base" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="margin-right-base" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="margin-right-base" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="margin-right-base" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export const Default: Story = {
  render: (args) => template(args),
}

export default meta
