import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs"

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
    args: {
        defaultValue: "account",
        orientation: "horizontal",
    },
    argTypes: {
        defaultValue: {
            options: ["account", "documents", "settings"],
            control: { type: "select" },
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "select" },
        },
    },
}

type Story = StoryObj<typeof Tabs>

const template = (args: any) => (
    <Tabs {...args}>
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
            <p>Make changes to your account.</p>
        </TabsContent>

        <TabsContent value="documents">
            <p>Access and update your documents.</p>
        </TabsContent>
    </Tabs>
)

export const Default: Story = {
    render: (args) => template(args),
}

// export const Vertical: Story = {
//     args: {
//         orientation: "vertical",
//     },
//     render: (args) => template(args),
// }

export default meta
