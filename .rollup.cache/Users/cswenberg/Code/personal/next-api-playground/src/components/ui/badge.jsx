import { __rest } from "tslib";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
var badgeVariants = cva("inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:focus:ring-neutral-300", {
    variants: {
        variant: {
            default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
            secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
            destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
            outline: "border border-neutral-200 text-neutral-950 dark:text-neutral-50",
            red: 
            // "bg-red-600 text-red-50 dark:bg-red-950 dark:text-red-400",
            "bg-red-500/20 text-red-500",
            green: 
            // "bg-green-600 text-green-50 dark:bg-green-950 dark:text-green-400",
            "bg-green-500/20 text-green-500",
            blue: 
            // "bg-blue-600 text-blue-50 dark:bg-blue-950 dark:text-blue-400",
            "bg-blue-500/20 text-blue-500",
            purple: 
            // "bg-purple-600 text-purple-50 dark:bg-purple-950 dark:text-purple-400",
            "bg-purple-500/20 text-purple-500",
            yellow: 
            // "bg-yellow-500 text-yellow-50 dark:bg-yellow-900 dark:text-yellow-400",
            "bg-yellow-400/20 text-yellow-500",
            orange: 
            // "bg-orange-500 text-orange-50 dark:bg-orange-900 dark:text-orange-400",
            "bg-orange-500/20 text-orange-500",
        },
        size: {
            sm: "text-xs bg-transparent font-semibold",
            default: "rounded-md text-sm font-semibold px-2.5 py-0.5",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Badge(_a) {
    var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
    return (<div className={cn(badgeVariants({ variant: variant, size: size }), className)} {...props}/>);
}
export { Badge, badgeVariants };
//# sourceMappingURL=badge.jsx.map