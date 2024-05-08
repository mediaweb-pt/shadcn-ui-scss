import type { Meta, StoryObj } from "@storybook/react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./Form"
import { Button } from "../../Button/src"
import { Input } from "../../Input/src"

const meta: Meta<typeof Form> = {
    title: "Components/Form",
    component: Form,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof Form>

const template = (args: any) => {
    const form = useForm()

    return (
        <Form {...args} {...form}>
            <form>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="margin-top-m">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
