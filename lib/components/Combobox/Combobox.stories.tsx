import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ArrowUpCircle,
  Calendar,
  Check,
  CheckCircle2,
  ChevronsUpDown,
  Circle,
  HelpCircle,
  LucideIcon,
  MoreHorizontal,
  Tags,
  Trash,
  User,
  XCircle,
} from "lucide-react"

import { Button } from "../Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../Command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../DropdownMenu"
import { Popover, PopoverContent, PopoverTrigger } from "../Popover"

const meta: Meta = {
  title: "Components/Combobox",
  tags: ["autodocs"],
}

type Story = StoryObj
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const template = (args: any) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-content-space-between"
          style={{ width: 200 }}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown
            className="margin-left-s flex-shrink-0"
            style={{
              opacity: 0.5,
            }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="padding-none" style={{ width: 200 }}>
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className="margin-right-s"
                  style={{
                    ...(value === framework.value
                      ? { opacity: 1 }
                      : { opacity: 0 }),
                  }}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export const Default: Story = {
  render: (args) => template(args),
}

type Status = {
  value: string
  label: string
  icon: LucideIcon
}
const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
]
export const PopoverExample: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)

    return (
      <div className="display-flex align-items-center gap-base">
        <p className="font-size-s text-neutral-7">Status</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="justify-content-flex-start"
              style={{ width: 150, lineHeight: 1 }}
            >
              {selectedStatus ? (
                <>
                  <selectedStatus.icon
                    className="flex-shrink-0"
                    style={{
                      width: "var(--font-size-base)",
                      height: "var(--font-size-base)",
                    }}
                  />
                  {selectedStatus.label}
                </>
              ) : (
                <>+ Set status</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="padding-none" side="right" align="start">
            <Command>
              <CommandInput placeholder="Change status..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.value === value
                          ) || null
                        )
                        setOpen(false)
                      }}
                    >
                      <status.icon
                        className="margin-right-s"
                        style={{
                          ...(status.value === selectedStatus?.value
                            ? { opacity: 1 }
                            : { opacity: 0.4 }),
                          width: "var(--font-size-base)",
                          height: "var(--font-size-base)",
                        }}
                      />
                      <span>{status.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]
export const DropdownMenuExample: Story = {
  render: (args) => {
    const [label, setLabel] = useState("feature")
    const [open, setOpen] = useState(false)

    return (
      <div
        className="display-flex full-width flex-direction-row align-items-center justify-content-space-between border-radius-soft padding-s"
        style={{
          border: "var(--border-size-s) solid hsl(var(--border))",
        }}
      >
        <p
          className="font-size-s font-medium"
          style={{
            lineHeight: 1,
          }}
        >
          <span className="margin-right-s border-radius-soft background-primary padding-x-s padding-y-xs font-size-xs text-neutral-0">
            {label}
          </span>
          <span className="text-neutral-7">Create a new project</span>
        </p>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" style={{ width: 200 }}>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="margin-right-s" />
                Assign to...
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="margin-right-s" />
                Set due date...
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Tags className="margin-right-s" />
                  Apply label
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="padding-none">
                  <Command>
                    <CommandInput
                      placeholder="Filter label..."
                      autoFocus={true}
                    />
                    <CommandList>
                      <CommandEmpty>No label found.</CommandEmpty>
                      <CommandGroup>
                        {labels.map((label) => (
                          <CommandItem
                            key={label}
                            value={label}
                            onSelect={(value) => {
                              setLabel(value)
                              setOpen(false)
                            }}
                          >
                            {label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red">
                <Trash className="margin-right-s" />
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export default meta
