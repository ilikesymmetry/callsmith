import { __rest } from "tslib";
import * as React from "react";
import { cn } from "@/lib/utils";
var Table = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm border border-neutral-200 dark:border-neutral-800", className)} {...props}/>
  </div>);
});
Table.displayName = "Table";
var TableHeader = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<thead ref={ref} className={cn("border-b border-neutral-200 dark:border-neutral-800", className)} {...props}>
    <tr>{children}</tr>
  </thead>);
});
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props}/>);
});
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<tfoot ref={ref} className={cn("border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50", className)} {...props}/>);
});
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<tr ref={ref} className={cn("border-b transition-colors border-neutral-200 data-[state=selected]:bg-neutral-100 dark:border-neutral-800 dark:data-[state=selected]:bg-neutral-800", className)} {...props}/>);
});
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<th ref={ref} className={cn("px-4 py-2 text-left align-middle font-semibold text-neutral-500 [&:has([role=checkbox])]:pr-0 dark:text-neutral-400", className)} {...props}/>);
});
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<td ref={ref} className={cn("align-middle [&:has([role=checkbox])]:pr-0", className)} {...props}/>);
});
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<caption ref={ref} className={cn("mt-4 text-sm text-neutral-500 dark:text-neutral-400", className)} {...props}/>);
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, };
//# sourceMappingURL=table.jsx.map