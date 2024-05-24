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
import { Input } from "@/shadcn-scss/components/Input"
import { Label } from "@/shadcn-scss/components/Label"

import { Icons } from "@/components/icons"

export function CardsCreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-xs">
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-base grid">
        <div className="gap-m flex">
          <Button className={buttonVariants({ variant: "outline" }) + " flex-1"}>
            <Icons.gitHub className="margin-right-s height-base width-base" />
            Github
          </Button>
          <Button className={buttonVariants({ variant: "outline" }) + " flex-1"}>
            <Icons.google className="margin-right-s height-base width-base" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="width-100 border-top-s " />
          </div>
          <div className="font-size-xs text-uppercase relative flex justify-center">
            <span className="padding-x-s bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-s">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-s">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="width-100">Create account</Button>
      </CardFooter>
    </Card>
  )
}
