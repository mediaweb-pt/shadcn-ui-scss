import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn-scss/components/Avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
