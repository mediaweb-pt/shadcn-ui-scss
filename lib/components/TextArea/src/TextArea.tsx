import * as React from "react"

import { cn } from "../../../utils/utils"

//import "./TextArea.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cn("text-area", className)} ref={ref} {...props} />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
