"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";
var ResizablePanelGroup = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(ResizablePrimitive.PanelGroup, __assign({ className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className) }, props)));
};
var ResizablePanel = ResizablePrimitive.Panel;
var ResizableHandle = function (_a) {
    var withHandle = _a.withHandle, className = _a.className, props = __rest(_a, ["withHandle", "className"]);
    return (_jsx(ResizablePrimitive.PanelResizeHandle, __assign({ className: cn("relative flex w-px items-center justify-center bg-neutral-200 hover:bg-neutral-400 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:hover:bg-neutral-600 dark:bg-neutral-800 dark:focus-visible:ring-neutral-300", className) }, props, { children: withHandle && (_jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800", children: _jsx(GripVertical, { className: "h-2.5 w-2.5" }) })) })));
};
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
//# sourceMappingURL=resizable.js.map