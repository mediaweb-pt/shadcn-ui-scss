"use client"

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
import { RadioGroup, RadioGroupItem } from "@/shadcn-scss/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-scss/select"

import { Icons } from "@/components/icons"

export function CardsPaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-m grid">
        <RadioGroup defaultValue="card" className="gap-base flex">
          <div className="flex-1">
            <RadioGroupItem
              value="card"
              id="card"
              className="peer sr-only"
              aria-label="Card"
            />
            <Label
              htmlFor="card"
              className="border-radius-soft border-size-m padding-base flex flex-col items-center justify-between bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="margin-bottom-s height-m width-m"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
          </div>

          <div className="flex-1">
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
              aria-label="Paypal"
            />
            <Label
              htmlFor="paypal"
              className="border-radius-soft border-size-m padding-base flex flex-col items-center justify-between bg-transparent"
            >
              <Icons.paypal className="margin-bottom-s height-m width-m" />
              Paypal
            </Label>
          </div>

          <div className="flex-1">
            <RadioGroupItem
              value="apple"
              id="apple"
              className="peer sr-only"
              aria-label="Apple"
            />
            <Label
              htmlFor="apple"
              className="border-radius-soft border-size-m padding-base flex flex-col items-center justify-between bg-transparent"
            >
              <Icons.apple className="margin-bottom-s height-m width-m" />
              Apple
            </Label>
          </div>
        </RadioGroup>
        <div className="gap-s grid">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="First Last" />
        </div>
        <div className="gap-s grid">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="" />
        </div>
        <div className="gap-s grid">
          <Label htmlFor="number">Card number</Label>
          <Input id="number" placeholder="" />
        </div>
        <div className="gap-base flex">
          <div className="gap-s grid flex-1">
            <Label htmlFor="month">Expires</Label>
            <Select>
              <SelectTrigger id="month" aria-label="Month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="gap-s grid">
            <Label htmlFor="year">Year</Label>
            <Select>
              <SelectTrigger id="year" aria-label="Year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="gap-s grid">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="width-100">Continue</Button>
      </CardFooter>
    </Card>
  )
}
