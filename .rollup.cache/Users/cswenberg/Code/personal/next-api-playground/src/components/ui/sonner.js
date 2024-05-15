"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
var Toaster = function (_a) {
    var props = __rest(_a, []);
    var _b = useTheme().theme, theme = _b === void 0 ? "system" : _b;
    return (_jsx(Sonner, __assign({ theme: theme, className: "toaster group", toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-950 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-neutral-950 dark:group-[.toaster]:text-neutral-50 dark:group-[.toaster]:border-neutral-800",
                description: "group-[.toast]:text-neutral-500 dark:group-[.toast]:text-neutral-400",
                actionButton: "group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900",
                cancelButton: "group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400",
            },
        } }, props)));
};
export { Toaster };
//# sourceMappingURL=sonner.js.map