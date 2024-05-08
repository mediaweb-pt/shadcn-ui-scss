import { Button } from "../../../Button/src/Button";
import { ToastAction } from "../Toast"
import { useToast } from "../useToast"

export function ToastDemo() {
    const { toast } = useToast()

    return (
        <Button
            variant="secondary"
            onClick={() => {
                toast({
                    title: "Title of the Toast",
                    description: "And this is the description...",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }}
        >
            Open Toast
        </Button>
    )
}
