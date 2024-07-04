import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn-scss/card"
import { Label } from "@/shadcn-scss/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-scss/select"

export default function Component() {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger id="status" aria-label="Select status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
