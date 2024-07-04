"use client"

import * as React from "react"
import { Button, buttonVariants } from "@/shadcn-scss/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-scss/card"
import { Input } from "@/shadcn-scss/input"
import { Label } from "@/shadcn-scss/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-scss/select"
import { Textarea } from "@/shadcn-scss/textarea"

export function CardsReportIssue() {
  const id = React.useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-l grid">
        <div className="gap-base sm_grid-cols-2 grid">
          <div className="gap-s grid">
            <Label htmlFor={`area-${id}`}>Area</Label>
            <Select defaultValue="billing">
              <SelectTrigger id={`area-${id}`} aria-label="Area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="gap-s grid">
            <Label htmlFor={`security-level-${id}`}>Security Level</Label>
            <Select defaultValue="2">
              <SelectTrigger
                id={`security-level-${id}`}
                className="line-clamp-1 w-full truncate"
                aria-label="Security Level"
              >
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                <SelectItem value="2">Severity 2</SelectItem>
                <SelectItem value="3">Severity 3</SelectItem>
                <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="gap-s grid">
          <Label htmlFor={`subject-${id}`}>Subject</Label>
          <Input id={`subject-${id}`} placeholder="I need help with..." />
        </div>
        <div className="gap-s grid">
          <Label htmlFor={`description-${id}`}>Description</Label>
          <Textarea
            id={`description-${id}`}
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button className={buttonVariants({ variant: "ghost" })}>Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
