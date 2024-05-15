"use client";
import { __rest } from "tslib";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
var Progress = React.forwardRef(function (_a, ref) {
    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
    return (<ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800", className)} {...props}>
    <ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-50" style={{ transform: "translateX(-".concat(100 - (value || 0), "%)") }}/>
  </ProgressPrimitive.Root>);
});
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
//# sourceMappingURL=progress.jsx.map