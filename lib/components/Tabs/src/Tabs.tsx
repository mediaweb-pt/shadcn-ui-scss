import React from "react"
import {
  Content,
  List,
  Root,
  TabsProps as TabsRadixProps,
  Trigger,
} from "@radix-ui/react-tabs"

import { cn } from "../../../utils/utils"

//import "./Tabs.scss"

interface TabsProps extends TabsRadixProps {
  className?: string
}

const Tabs = ({ className, ...props }: TabsProps) => {
  return <Root className={cn("tabs", className)} {...props} />
}

Tabs.displayName = Root.displayName

const TabsList = React.forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List ref={ref} className={cn("tabs__list", className)} {...props} />
))
TabsList.displayName = List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger ref={ref} className={cn("tabs__trigger", className)} {...props} />
))
TabsTrigger.displayName = Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content ref={ref} className={cn("tabs__content", className)} {...props} />
))
TabsContent.displayName = Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
