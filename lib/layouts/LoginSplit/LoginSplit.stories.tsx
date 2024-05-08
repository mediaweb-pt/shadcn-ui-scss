import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { LoginSplit } from "./LoginSplit"

import { Button } from "../../components/Button/src/Button"
import { Col, Row } from "../../structure/Grid"
import { Input } from "../../components/Input/src/Input"
import { Label } from "../../components/Label/src/Label"

import LOGO from "../../assets/images/logo_horizontal.png"
import IMG from "../../assets/images/bg_login_new.jpg"

type Props = ComponentProps<typeof LoginSplit>

const meta: Meta<Props> = {
    title: "Layouts/LoginSplit",
    component: LoginSplit,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        enableAccessibilityFeatures: true,
        className: "extra class names",
    },
    argTypes: {
        backgroundImage: { control: false },
        form: { control: false },
        children: { control: false },
    },
}

type Story = StoryObj<Props>

const template = (args: any) => (
    <LoginSplit
        {...args}
        backgroundImage={<img src={IMG.toString()} alt="right image" />}
        form={
            <div className="login-form">
                <div className="login-logo">
                    <div className="application-name display-flex align-items-center full-height">
                        <img src={LOGO} alt="logo" />
                    </div>
                </div>
                <div className="login-title">Log in to your account</div>
                <div className="login-inputs">
                    <Input type="text" placeholder="Username" iconName="user" className="margin-bottom-m" />
                    <Input type="password" placeholder="Password" className="margin-bottom-m" />
                    <Row columns={2} className="margin-top-l align-items-center">
                        <Col>
                            <div className="display-flex align-items-center">
                                <Input id="remember" type="checkbox" />
                                <Label htmlFor="remember" className="font-size-s margin-left-s">
                                    Remember me
                                </Label>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-align-right">
                                <a href="#" className="font-size-s">
                                    Forgot password?
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="login-button">
                    <Button variant="primary" size="large" className="full-width">
                        Login
                    </Button>
                </div>
            </div>
        }
    >
        <div className="background-neutral-0 padding-xxl text-neutral-10">Children</div>
    </LoginSplit>
)
export const Default: Story = {
    render: (args) => template(args),
}

export default meta
