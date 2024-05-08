import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { ContentBase } from "./ContentBase"

type Props = ComponentProps<typeof ContentBase>

const meta: Meta<Props> = {
    title: "Layouts/ContentBase",
    component: ContentBase,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        useInvertedBreadcrumbs: false,
        extendedClass: "extended class",
    },
    argTypes: {
        title: { control: false },
        breadcrumbs: { control: false },
        children: { control: false },
        actions: { control: false },
    },
}

type Story = StoryObj<Props>

const template = (args: any) => (
    <ContentBase {...args} title={<>title</>} breadcrumbs={<>Breadcrumbs Content</>} actions={<>Actions Content</>}>
        Children
    </ContentBase>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
