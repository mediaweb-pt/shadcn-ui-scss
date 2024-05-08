import type { Meta, StoryObj } from "@storybook/react"
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "./ContextMenu"

const meta: Meta<typeof ContextMenu> = {
    title: "Components/ContextMenu",
    component: ContextMenu,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof ContextMenu>

const template = (args: any) => (
    <ContextMenu {...args}>
        <ContextMenuTrigger
            className="display-flex align-items-center justify-content-center border-radius-soft font-size-s"
            style={{
                height: 150,
                width: 300,
                border: "var(--border-size-s) dashed hsl(var(--border))",
            }}
        >
            Right click here
        </ContextMenuTrigger>
        <ContextMenuContent style={{ width: "16rem" }}>
            <ContextMenuItem inset>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
                <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent style={{ width: "12rem" }}>
                    <ContextMenuItem>
                        Save Page As...
                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
                Show Bookmarks Bar
                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
                <ContextMenuLabel inset>People</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
        </ContextMenuContent>
    </ContextMenu>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
