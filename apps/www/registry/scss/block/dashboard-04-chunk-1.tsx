import { Button } from "@/registry/scss/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/scss/ui/card"
import { Input } from "@/registry/scss/ui/input"

export default function Component() {
  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>Store Name</CardTitle>
        <CardDescription>
          Used to identify your store in the marketplace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input placeholder="Store Name" />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
