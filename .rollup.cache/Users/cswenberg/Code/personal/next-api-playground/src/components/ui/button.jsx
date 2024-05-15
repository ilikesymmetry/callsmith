import { __rest } from "tslib";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300", {
    variants: {
        variant: {
            default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
            destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
            outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
            secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
            ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
            link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        },
        size: {
            sm: "rounded-sm text-sm px-3",
            default: "rounded-md px-4 py-2 font-semibold",
            lg: "rounded-lg text-lg px-8 py-3 font-bold",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
var Button = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, props = __rest(_a, ["className", "variant", "size", "asChild", "loading"]);
    var Comp = asChild ? Slot : "button";
    return (<Comp className={cn(buttonVariants({ variant: variant, size: size, className: className }), loading && "cursor-wait")} ref={ref} disabled={props.disabled || loading} {...props}/>);
});
Button.displayName = "Button";
export { Button, buttonVariants };
//# sourceMappingURL=button.jsx.map