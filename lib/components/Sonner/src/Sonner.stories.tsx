"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Toaster } from "./"
import { SonnerDemo } from "./demo/sonner-demo"

const meta: Meta<typeof SonnerDemo> = {
    title: "Components/Sonner",
    component: SonnerDemo,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof SonnerDemo>

const template = (args: any) => (
    <>
        <SonnerDemo {...args} />
        <Toaster />
    </>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
