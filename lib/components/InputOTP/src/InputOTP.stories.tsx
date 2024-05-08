import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./InputOTP"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../Form/src"
import { Button } from "../../Button/src"

const meta: Meta<typeof InputOTP> = {
    title: "Components/InputOTP",
    component: InputOTP,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof InputOTP>

const template = (args: any) => (
    <InputOTP {...args} maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
        </InputOTPGroup>
    </InputOTP>
)

export const Pattern: Story = {
    render: (args) => template(args),
}

export const Separator: Story = {
    render: (args) => (
        <InputOTP {...args} maxLength={6}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    ),
}

export const Controlled: Story = {
    render: (args) => {
        const [value, setValue] = useState("")

        return (
            <div className="display-flex flex-direction-column align-items-center">
                <InputOTP {...args} maxLength={6} value={value} onChange={(value) => setValue(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <div className="margin-top-s text-align-center font-size-s">
                    {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
                </div>
            </div>
        )
    },
}

export const FormExample: Story = {
    render: (args) => {
        const form = useForm()

        return (
            <Form {...form}>
                <form style={{ width: "66.7%" }}>
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>One-Time Password</FormLabel>
                                <FormControl>
                                    <InputOTP {...args} maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Please enter the one-time password sent to your phone.
                                </FormDescription>
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
    },
}

export default meta
