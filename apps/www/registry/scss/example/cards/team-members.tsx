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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn-scss/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn-scss/popover"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export function CardsTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-m grid">
        <div className="space-x-base flex items-center justify-between">
          <div className="space-x-base flex items-center">
            <Avatar className="height-l width-l">
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-size-s font-medium leading-none">
                Sofia Davis
              </p>
              <p className="font-size-s text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={
                  buttonVariants({ variant: "outline", size: "sm" }) +
                  " ml-auto"
                }
              >
                Owner{" "}
                <ChevronDownIcon className="margin-left-s height-base width-base text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="padding-none" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Viewer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Developer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and edit.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Billing</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and manage billing.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Owner</p>
                      <p className="font-size-s text-muted-foreground">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-between space-x-base">
          <div className="flex items-center space-x-base">
            <Avatar className="height-l width-l">
              <AvatarImage src="/avatars/02.png" alt="Image" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-size-s font-medium leading-none">
                Jackson Lee
              </p>
              <p className="font-size-s text-muted-foreground">p@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={
                  buttonVariants({ variant: "outline", size: "sm" }) +
                  " ml-auto"
                }
              >
                Member{" "}
                <ChevronDownIcon className="ml-2 height-base w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="padding-none" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className="p-1.5">
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Viewer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Developer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and edit.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Billing</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and manage billing.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Owner</p>
                      <p className="font-size-s text-muted-foreground">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-between space-x-base">
          <div className="flex items-center space-x-base">
            <Avatar className="height-l width-l">
              <AvatarImage src="/avatars/03.png" alt="Image" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-size-s font-medium leading-none">
                Isabella Nguyen
              </p>
              <p className="font-size-s text-muted-foreground">i@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={
                  buttonVariants({ variant: "outline", size: "sm" }) +
                  " ml-auto"
                }
              >
                Member{" "}
                <ChevronDownIcon className="ml-2 height-base w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="padding-none" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className="p-1.5">
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Viewer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Developer</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and edit.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Billing</p>
                      <p className="font-size-s text-muted-foreground">
                        Can view, comment and manage billing.
                      </p>
                    </CommandItem>
                    <CommandItem className="space-y-xs flex flex-col items-start padding-x-base padding-y-s">
                      <p>Owner</p>
                      <p className="font-size-s text-muted-foreground">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}
