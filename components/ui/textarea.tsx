import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-none border-2 border-white bg-black px-4 py-3 text-base font-mono text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] placeholder:text-zinc-500 focus-visible:outline-none focus-visible:shadow-[2px_2px_0px_0px_rgba(255,102,0,1)] focus-visible:border-[rgb(255,102,0)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
