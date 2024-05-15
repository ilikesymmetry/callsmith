"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
export function Toaster() {
    var toasts = useToast().toasts;
    return (_jsxs(ToastProvider, { children: [toasts.map(function (_a) {
                var id = _a.id, title = _a.title, description = _a.description, action = _a.action, props = __rest(_a, ["id", "title", "description", "action"]);
                return (_jsxs(Toast, __assign({}, props, { children: [_jsxs("div", { className: "grid gap-1", children: [title && _jsx(ToastTitle, { children: title }), description && (_jsx(ToastDescription, { children: description }))] }), action, _jsx(ToastClose, {})] }), id));
            }), _jsx(ToastViewport, {})] }));
}
//# sourceMappingURL=toaster.js.map