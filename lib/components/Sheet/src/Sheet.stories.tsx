import type { Meta, StoryObj } from "@storybook/react"
import {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "./Sheet"
import { Button } from "../../Button/src"
import { Label } from "../../Label/src"
import { Input } from "../../Input/src"

const meta: Meta<typeof Sheet> = {
    title: "Components/Sheet",
    component: Sheet,
    tags: ["autodocs"],
}

/* ----- SAMPLE DATA ----- */
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]
/* ---------- */

type Story = StoryObj<typeof Sheet>

export const Default: Story = {
    args: {
        defaultOpen: false,
    },
    render: (args) => (
        <Sheet {...args}>
            <SheetTrigger asChild>
                <Button variant="secondary">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="primary" type="submit">
                            Save changes
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
}

export const Directions: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button variant="primary" type="submit">
                                    Save changes
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    ),
}

export default meta
