"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn-scss/avatar"
import { Button, buttonVariants } from "@/shadcn-scss/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from "@/shadcn-scss/separator"

export function CardsShare() {
  return (
    <Card>
      <CardHeader className="padding-bottom-base">
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-x-s flex">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            value="http://example.com/link/to/document"
            readOnly
          />
          <Button
            className={buttonVariants({ variant: "secondary" }) + " shrink-0"}
          >
            Copy Link
          </Button>
        </div>
        <Separator className="margin-y-base" />
        <div className="space-y-base">
          <h4 className="font-size-s font-medium">People with access</h4>
          <div className="gap-m grid">
            <div className="space-x-base flex items-center justify-between">
              <div className="space-x-base flex items-center">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" alt="Image" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-size-s font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="font-size-s text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </div>
              <Select defaultValue="edit">
                <SelectTrigger
                  className="margin-left-auto width-25"
                  aria-label="Edit"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-x-base flex items-center justify-between">
              <div className="space-x-base flex items-center">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" alt="Image" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-size-s font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="font-size-s text-muted-foreground">
                    b@example.com
                  </p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger
                  className="margin-left-auto width-25"
                  aria-label="Edit"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-x-base flex items-center justify-between">
              <div className="space-x-base flex items-center">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Image" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-size-s font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="font-size-s text-muted-foreground">
                    p@example.com
                  </p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger
                  className="margin-left-auto width-25"
                  aria-label="Edit"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
