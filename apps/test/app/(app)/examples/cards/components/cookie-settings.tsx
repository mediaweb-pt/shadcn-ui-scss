"use client"

import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-scss/components/Card"
import { Label } from "@/shadcn-scss/components/Label"
import { Switch } from "@/shadcn-scss/components/Switch"

export function DemoCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Strictly Necessary</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Functional Cookies</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Performance Cookies</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className={buttonVariants({variant: "outline"}) + " w-full"}>
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
