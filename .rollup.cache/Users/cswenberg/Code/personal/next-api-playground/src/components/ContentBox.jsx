import { cn } from "@/lib/utils";
export function ContentBox(_a) {
    var children = _a.children, className = _a.className;
    return (<div className={cn("h-full bg-neutral-50 dark:bg-neutral-950 rounded-md border border-neutral-200 dark:border-neutral-800", className)}>
      {children}
    </div>);
}
//# sourceMappingURL=ContentBox.jsx.map