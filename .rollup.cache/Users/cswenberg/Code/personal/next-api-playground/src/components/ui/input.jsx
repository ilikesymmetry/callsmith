import { __rest } from "tslib";
import * as React from "react";
import { cn } from "@/lib/utils";
var Input = React.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
    return (<input type={type} className={cn("flex w-full px-3 py-2 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 ring-offset-white file:border-0 file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-600 dark:focus-visible:ring-neutral-300", className)} ref={ref} {...props}/>);
});
Input.displayName = "Input";
export { Input };
//# sourceMappingURL=input.jsx.map