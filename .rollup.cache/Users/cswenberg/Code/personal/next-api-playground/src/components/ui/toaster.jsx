"use client";
import { __rest } from "tslib";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
export function Toaster() {
    var toasts = useToast().toasts;
    return (<ToastProvider>
      {toasts.map(function (_a) {
            var id = _a.id, title = _a.title, description = _a.description, action = _a.action, props = __rest(_a, ["id", "title", "description", "action"]);
            return (<Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (<ToastDescription>{description}</ToastDescription>)}
            </div>
            {action}
            <ToastClose />
          </Toast>);
        })}
      <ToastViewport />
    </ToastProvider>);
}
//# sourceMappingURL=toaster.jsx.map