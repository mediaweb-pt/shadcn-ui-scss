import type { Meta, StoryObj } from "@storybook/react"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "."

/**
 * ## Installation
 *
 * ```sh
 * $ yarn add @shadcn-ui-sass/resizable
 * # or
 * $ npm install @shadcn-ui-sass/resizable
 * ```
 *
 */

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
}

type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="border-radius-soft border-size-s"
    >
      <ResizablePanel defaultSize={50}>
        <div className="display-flex align-items-center justify-content-center padding-m">
          <span className="font-semi-bold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="display-flex full-height align-items-center justify-content-center padding-m">
              <span className="font-semi-bold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="display-flex full-height align-items-center justify-content-center padding-m">
              <span className="font-semi-bold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="border-radius-soft border-size-s"
    >
      <ResizablePanel defaultSize={25}>
        <div className="display-flex full-height align-items-center justify-content-center padding-m">
          <span className="font-semi-bold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="display-flex full-height align-items-center justify-content-center padding-m">
          <span className="font-semi-bold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="border-radius-soft border-size-s"
    >
      <ResizablePanel defaultSize={25}>
        <div className="display-flex full-height align-items-center justify-content-center padding-m">
          <span className="font-semi-bold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="display-flex full-height align-items-center justify-content-center padding-m">
          <span className="font-semi-bold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export default meta
