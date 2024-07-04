import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn-scss/avatar"
import { Button, buttonVariants } from "@/shadcn-scss/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/shadcn-scss/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn-scss/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn-scss/dialog"
import { Input } from "@/shadcn-scss/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn-scss/tooltip"
import { Check, Plus, Send } from "lucide-react"

import { cn } from "@/lib/utils"

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const

type User = (typeof users)[number]

export function CardsChat({ props }: { props?: any }) {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])
  const theme = props?.theme
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="space-x-base flex flex-1 items-center">
            <Avatar>
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
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={
                    buttonVariants({ variant: "outline", size: "icon" }) +
                    "margin-left-auto border-radius-circle"
                  }
                  onClick={() => setOpen(true)}
                >
                  <Plus className="height-base width-base" />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent>
          <div className="space-y-base">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "width-75 gap-s border-radius-soft padding-s font-size-s flex flex-col",
                  message.role === "user"
                    ? "margin-left-auto text-primary-foreground bg-[--primary]"
                    : "bg-muted",
                  (message.role === "user" && theme === "theme-zinc") ||
                    (message.role === "user" && theme === "theme-yellow") ||
                    (message.role === "user" && theme === "theme-green")
                    ? "text-primary-foreground"
                    : "text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (inputLength === 0) return
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ])
              setInput("")
            }}
            className="width-100 space-x-s flex items-center"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              className={buttonVariants({ size: "icon" })}
              disabled={inputLength === 0}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="padding-none gap-0 outline-none">
          <DialogHeader className="padding-base">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group
              message.
            </DialogDescription>
          </DialogHeader>
          <Command className="border-radius-top-none border-top-s text-muted overflow-hidden">
            <CommandInput
              className="text-muted-foreground"
              placeholder="Search user..."
            />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup className="padding-s">
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    className="flex items-center px-2"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter(
                            (selectedUser) => selectedUser !== user
                          )
                        )
                      }

                      return setSelectedUsers(
                        [...users].filter((u) =>
                          [...selectedUsers, user].includes(u)
                        )
                      )
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="margin-left-s">
                      <p className="font-size-s font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="font-size-s text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <Check className="margin-left-auto height-base width-base text-primary flex" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="border-top-s padding-base flex items-center sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="-space-x-s flex overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar
                    key={user.email}
                    className="border-size-m border-background inline-block"
                  >
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="font-size-s text-muted-foreground">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                setOpen(false)
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
