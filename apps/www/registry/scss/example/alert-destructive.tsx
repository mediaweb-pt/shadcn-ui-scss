import { Alert, AlertDescription, AlertTitle } from "@/shadcn-scss/alert"
import { AlertCircle } from "lucide-react"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
