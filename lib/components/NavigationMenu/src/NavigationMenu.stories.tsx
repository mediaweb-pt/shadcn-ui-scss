import type { Meta, StoryObj } from "@storybook/react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Home } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./NavigationMenu"
import { cn } from "../../../utils/utils"

const meta: Meta<typeof NavigationMenu> = {
    title: "Components/NavigationMenu",
    component: NavigationMenu,
    tags: ["autodocs"],
}

type Story = StoryObj<typeof NavigationMenu>

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]
const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a ref={ref} className={cn("navigation-menu-link", className)} {...props}>
                        <div className="font-size-s font-medium" style={{ lineHeight: 1 }}>
                            {title}
                        </div>
                        <p
                            className="margin-top-xs font-size-s text-neutral-7"
                            style={{ WebkitLineClamp: 2, lineHeight: 1.375 }}
                        >
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }
)
const template = (args: any) => (
    <NavigationMenu {...args}>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul
                        className="display-grid gap-s padding-m"
                        style={{ width: 400, gridTemplateColumns: ".75fr 1fr" }}
                    >
                        <li style={{ gridRow: "span 3 / span 3" }}>
                            <NavigationMenuLink asChild>
                                <a
                                    className="display-flex full-height full-width flex-direction-column justify-content-flex-end border-radius-soft padding-m"
                                    href="/"
                                    style={{
                                        userSelect: "none",
                                        backgroundImage:
                                            "linear-gradient(to bottom, hsl(var(--muted)/0.5), hsl(var(--muted)))",
                                        textDecorationLine: "none",
                                        outline: "2px solid transparent",
                                        outlineOffset: 2,
                                    }}
                                >
                                    <Home />
                                    <div className="margin-bottom-s margin-top-base font-size-l font-medium">
                                        shadcn/ui
                                    </div>
                                    <p className="font-size-s text-neutral-7">
                                        Beautifully designed components that you can copy and paste into your apps.
                                        Accessible. Customizable. Open Source.
                                    </p>
                                </a>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                            Re-usable components built using Radix UI and Tailwind CSS.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                            How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                            Styles for headings, paragraphs, lists...etc
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul
                        className="display-grid gap-s padding-base"
                        style={{ width: 400, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
                    >
                        {components.map((component) => (
                            <ListItem key={component.title} title={component.title} href={component.href}>
                                {component.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <a href="/docs">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
                </a>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
)

export const Default: Story = {
    render: (args) => template(args),
}

export default meta
