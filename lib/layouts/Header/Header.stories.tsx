import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Header } from "./Header"

type Props = ComponentProps<typeof Header>

const meta: Meta<Props> = {
    title: "Layouts/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        className:'extra class name'
    },
    argTypes: {
        topNav: { control: false },
        bottomNav: { control: false },
        leftActions: { control: false },
        logoLeft: { control: false },
        menu: { control: false },
        logoRight: { control: false },
        rightActions: { control: false },
    },
}

type Story = StoryObj<Props>

const template = (args: any) => (
    <Header
        {...args}
        topNav={<>Top Nav Content</>}
        bottomNav={<>Bottom Nav Content</>}
        leftActions={<>Left Actions Content</>}
        logoLeft={<>Logo Left</>}
        menu={<>Menu Content</>}
        logoRight={<>Logo Right</>}
        rightActions={<>Right Actions Content</>}
    />
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
