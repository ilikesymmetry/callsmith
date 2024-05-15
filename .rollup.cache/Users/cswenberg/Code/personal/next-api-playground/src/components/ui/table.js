import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
var Table = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("div", { className: "relative w-full overflow-auto", children: _jsx("table", __assign({ ref: ref, className: cn("w-full caption-bottom text-sm border border-neutral-200 dark:border-neutral-800", className) }, props)) }));
});
Table.displayName = "Table";
var TableHeader = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx("thead", __assign({ ref: ref, className: cn("border-b border-neutral-200 dark:border-neutral-800", className) }, props, { children: _jsx("tr", { children: children }) })));
});
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("tbody", __assign({ ref: ref, className: cn("[&_tr:last-child]:border-0", className) }, props)));
});
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("tfoot", __assign({ ref: ref, className: cn("border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50", className) }, props)));
});
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("tr", __assign({ ref: ref, className: cn("border-b transition-colors border-neutral-200 data-[state=selected]:bg-neutral-100 dark:border-neutral-800 dark:data-[state=selected]:bg-neutral-800", className) }, props)));
});
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("th", __assign({ ref: ref, className: cn("px-4 py-2 text-left align-middle font-semibold text-neutral-500 [&:has([role=checkbox])]:pr-0 dark:text-neutral-400", className) }, props)));
});
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("td", __assign({ ref: ref, className: cn("align-middle [&:has([role=checkbox])]:pr-0", className) }, props)));
});
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("caption", __assign({ ref: ref, className: cn("mt-4 text-sm text-neutral-500 dark:text-neutral-400", className) }, props)));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, };
//# sourceMappingURL=table.js.map