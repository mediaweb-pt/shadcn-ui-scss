import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import AccordionDemo from "@/registry/scss/example/accordion-demo"
import AlertDialogDemo from "@/registry/scss/example/alert-dialog-demo"
import AspectRatioDemo from "@/registry/scss/example/aspect-ratio-demo"
import AvatarDemo from "@/registry/scss/example/avatar-demo"
import BadgeDemo from "@/registry/scss/example/badge-demo"
import BadgeDestructive from "@/registry/scss/example/badge-destructive"
import BadgeOutline from "@/registry/scss/example/badge-outline"
import BadgeSecondary from "@/registry/scss/example/badge-secondary"
import ButtonDemo from "@/registry/scss/example/button-demo"
import ButtonDestructive from "@/registry/scss/example/button-destructive"
import ButtonGhost from "@/registry/scss/example/button-ghost"
import ButtonLink from "@/registry/scss/example/button-link"
import ButtonLoading from "@/registry/scss/example/button-loading"
import ButtonOutline from "@/registry/scss/example/button-outline"
import ButtonSecondary from "@/registry/scss/example/button-secondary"
import ButtonWithIcon from "@/registry/scss/example/button-with-icon"
import CardDemo from "@/registry/scss/example/card-demo"
import CheckboxDemo from "@/registry/scss/example/checkbox-demo"
import CollapsibleDemo from "@/registry/scss/example/collapsible-demo"
import CommandDemo from "@/registry/scss/example/command-demo"
import ContextMenuDemo from "@/registry/scss/example/context-menu-demo"
import DatePickerDemo from "@/registry/scss/example/date-picker-demo"
import DialogDemo from "@/registry/scss/example/dialog-demo"
import DropdownMenuDemo from "@/registry/scss/example/dropdown-menu-demo"
import HoverCardDemo from "@/registry/scss/example/hover-card-demo"
import MenubarDemo from "@/registry/scss/example/menubar-demo"
import NavigationMenuDemo from "@/registry/scss/example/navigation-menu-demo"
import PopoverDemo from "@/registry/scss/example/popover-demo"
import ProgressDemo from "@/registry/scss/example/progress-demo"
import RadioGroupDemo from "@/registry/scss/example/radio-group-demo"
import ScrollAreaDemo from "@/registry/scss/example/scroll-area-demo"
import SelectDemo from "@/registry/scss/example/select-demo"
import SeparatorDemo from "@/registry/scss/example/separator-demo"
import SheetDemo from "@/registry/scss/example/sheet-demo"
import SkeletonDemo from "@/registry/scss/example/skeleton-demo"
import SliderDemo from "@/registry/scss/example/slider-demo"
import SwitchDemo from "@/registry/scss/example/switch-demo"
import TabsDemo from "@/registry/scss/example/tabs-demo"
import ToastDemo from "@/registry/scss/example/toast-demo"
import ToggleDemo from "@/registry/scss/example/toggle-demo"
import ToggleDisabled from "@/registry/scss/example/toggle-disabled"
import ToggleGroupDemo from "@/registry/scss/example/toggle-group-demo"
import ToggleOutline from "@/registry/scss/example/toggle-outline"
import ToggleWithText from "@/registry/scss/example/toggle-with-text"
import TooltipDemo from "@/registry/scss/example/tooltip-demo"
import { Button } from "@/registry/scss/ui/button"

export default function KitchenSinkPage() {
  return (
    <div className="container">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="grid gap-4">
            <ComponentWrapper>
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper>
              <SliderDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper
              className="spa flex-col items-start space-x-0
				space-y-2"
            >
              <p className="text-sm text-muted-foreground">Documentation</p>
              <p className="text-sm font-medium leading-none">
                You can customize the theme using{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                  CSS variables
                </code>
                .{" "}
                <Link
                  href="#"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Click here
                </Link>{" "}
                to learn more.
              </p>
            </ComponentWrapper>
            <ComponentWrapper>
              <CheckboxDemo />
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <TabsDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <MenubarDemo />
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
              <div className="flex space-x-2">
                <ButtonDemo />
                <ButtonSecondary />
                <ButtonDestructive />
              </div>
              <div className="flex space-x-2">
                <ButtonOutline />
                <ButtonLink />
                <ButtonGhost />
              </div>
              <div className="flex space-x-2">
                <ButtonWithIcon />
                <ButtonLoading />
              </div>
              <div className="flex space-x-2">
                <Button size="lg">Large</Button>
                <Button size="sm">Small</Button>
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <DatePickerDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&_ul>li:last-child]:hidden">
              <NavigationMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper className="justify-between">
              <SwitchDemo />
              <SelectDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <ToggleGroupDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <SeparatorDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <PopoverDemo />
              <ToastDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <TooltipDemo />
              <SheetDemo />
              <ProgressDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <CommandDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
              <RadioGroupDemo />
              <ContextMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <DropdownMenuDemo />
                <AlertDialogDemo />
                <DialogDemo />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <BadgeDemo />
                <BadgeSecondary />
                <BadgeDestructive />
                <BadgeOutline />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <SkeletonDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <CollapsibleDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <ToggleDemo />
                <ToggleOutline />
                <ToggleDisabled />
                <ToggleWithText />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <ScrollAreaDemo />
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentWrapper({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between space-x-4 rounded-md p-4",
        className
      )}
    >
      {children}
    </div>
  )
}
