"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.List, __assign({ ref: ref, className: cn("flex flex-row w-full space-x-8 text-neutral-500 dark:text-neutral-400", className) }, props)));
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, alert = _a.alert, props = __rest(_a, ["className", "children", "alert"]);
    return (_jsxs(TabsPrimitive.Trigger, __assign({ ref: ref, className: cn("relative inline-flex whitespace-nowrap hover:text-black border-b-2 border-transparent py-2 font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-black data-[state=active]:text-neutral-950 data-[state=active]:shadow-sm dark:data-[state=active]:border-white dark:hover:text-white dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:text-neutral-50", className) }, props, { children: [alert && (_jsx("div", { className: "absolute bg-red-500 rounded-full h-1.5 w-1.5 top-3 -right-1.5" })), children] })));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.Content, __assign({ ref: ref, className: cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300", className) }, props)));
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs-horizontal.js.map