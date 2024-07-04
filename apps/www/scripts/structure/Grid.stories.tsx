import { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Row, Col } from "./Grid"

type Props = ComponentProps<typeof Row>

const meta: Meta<Props> = {
    title: "Structure/Grid",
    component: Row,
    tags: ["autodocs"],
    args: {
        columns: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        xxl: 6,
        gap: "base",
    },
    parameters: { layout: "fullscreen" },
}

type Story = StoryObj<Props>

export const Grid: Story = {
    render: (args) => (
        <Row {...args}>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col1
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col2
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col3
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col4
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col5
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col6
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col7
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col8
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col9
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col10
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col11
            </Col>
            <Col className="background-neutral-4" style={{ height: 100 }}>
                Col12
            </Col>
        </Row>
    ),
}

export const Cols: Story = {
    args: {
        columns: 2,
    },
    argTypes: {
        sm: { control: false },
        md: { control: false },
        lg: { control: false },
        xl: { control: false },
        xxl: { control: false },
    },
    render: (args) => (
        <Row {...args} sm={args.columns} md={args.columns} lg={args.columns} xl={args.columns} xxl={args.columns}>
            {Array.from({ length: args.columns || 1 }, (v, i) => i).map((col) => (
                <Col className="background-neutral-4" style={{ height: 100 }}>{`Col${col + 1}`}</Col>
            ))}
        </Row>
    ),
}

export const Col3: Story = {
    args: {
        columns: 1,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
    },
    argTypes: {
        columns: { control: false },
        sm: { control: false },
        md: { control: false },
        lg: { control: false },
        xl: { control: false },
        xxl: { control: false },
    },
    render: (args) => (
        <>
            <Row {...args}>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col3
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col sm={2} className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col sm={2} className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
            </Row>
        </>
    ),
}

export const Col4: Story = {
    args: {
        columns: 1,
        sm: 4,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
    },
    argTypes: {
        columns: { control: false },
        sm: { control: false },
        md: { control: false },
        lg: { control: false },
        xl: { control: false },
        xxl: { control: false },
    },
    render: (args) => (
        <>
            <Row {...args}>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col3
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col4
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col sm={2} className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col3
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col4
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col sm={3} className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col4
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col sm={2} className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col4
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col sm={3} className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
            </Row>
            <Row {...args} className="margin-top-base">
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col1
                </Col>
                <Col className="background-neutral-4" style={{ height: 100 }}>
                    Col2
                </Col>
                <Col sm={2} className="background-neutral-4" style={{ height: 100 }}>
                    Col3
                </Col>
            </Row>
        </>
    ),
}

export default meta
