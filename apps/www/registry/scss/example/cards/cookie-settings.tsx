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

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="gap-m grid">
        <div className="gap-base flex items-center justify-between">
          <Label htmlFor="necessary" className="space-y-xs flex flex-col">
            <span>Strictly Necessary</span>
            <span className="font-size-xs font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="gap-base flex items-center justify-between">
          <Label htmlFor="functional" className="space-y-xs flex flex-col">
            <span>Functional Cookies</span>
            <span className="font-size-xs font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional" />
        </div>
        <div className="gap-base flex items-center justify-between">
          <Label htmlFor="performance" className="space-y-xs flex flex-col">
            <span>Performance Cookies</span>
            <span className="font-size-xs font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className={buttonVariants({ variant: "outline" }) + " flex-1"}>
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
