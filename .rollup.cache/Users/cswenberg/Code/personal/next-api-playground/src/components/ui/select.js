"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Trigger, __assign({ ref: ref, className: cn("flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300", className) }, props, { children: [children, _jsx(SelectPrimitive.Icon, { asChild: true, children: _jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })] })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.ScrollUpButton, __assign({ ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: _jsx(ChevronUp, { className: "h-4 w-4" }) })));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.ScrollDownButton, __assign({ ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: _jsx(ChevronDown, { className: "h-4 w-4" }) })));
});
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.position, position = _b === void 0 ? "popper" : _b, props = __rest(_a, ["className", "children", "position"]);
    return (_jsx(SelectPrimitive.Portal, { children: _jsxs(SelectPrimitive.Content, __assign({ ref: ref, className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props, { children: [_jsx(SelectScrollUpButton, {}), _jsx(SelectPrimitive.Viewport, { className: cn("p-1", position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), _jsx(SelectScrollDownButton, {})] })) }));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Label, __assign({ ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className) }, props)));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Item, __assign({ ref: ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50", className) }, props, { children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(Check, { className: "h-4 w-4" }) }) }), _jsx(SelectPrimitive.ItemText, { children: children })] })));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Separator, __assign({ ref: ref, className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className) }, props)));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };
//# sourceMappingURL=select.js.map