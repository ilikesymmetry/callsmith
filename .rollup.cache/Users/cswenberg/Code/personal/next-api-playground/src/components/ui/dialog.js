"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Overlay, __assign({ ref: ref, className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props)));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsxs(DialogPortal, { children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Content, __assign({ ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950", className) }, props, { children: [children, _jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] })] }))] }));
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("div", __assign({ className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props)));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("div", __assign({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Title, __assign({ ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className) }, props)));
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Description, __assign({ ref: ref, className: cn("text-sm text-neutral-500 dark:text-neutral-400", className) }, props)));
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
//# sourceMappingURL=dialog.js.map