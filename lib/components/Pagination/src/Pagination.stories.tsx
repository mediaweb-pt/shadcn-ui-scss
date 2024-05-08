import type { Meta, StoryObj } from "@storybook/react"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./"

const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
}

type Story = StoryObj<typeof Pagination>

const template = (args: any) => (
    <Pagination {...args}>
        <PaginationContent>
            <PaginationPrevious href="#" />
            <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <div>
                <PaginationEllipsis />
            </div>
            <PaginationNext href="#" />
        </PaginationContent>
    </Pagination>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
