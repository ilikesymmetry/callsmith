import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
var Form = FormProvider;
var FormFieldContext = React.createContext({});
var FormField = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(FormFieldContext.Provider, { value: { name: props.name }, children: _jsx(Controller, __assign({}, props)) }));
};
var useFormField = function () {
    var fieldContext = React.useContext(FormFieldContext);
    var itemContext = React.useContext(FormItemContext);
    var _a = useFormContext(), getFieldState = _a.getFieldState, formState = _a.formState;
    var fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    var id = itemContext.id;
    return __assign({ id: id, name: fieldContext.name, formItemId: "".concat(id, "-form-item"), formDescriptionId: "".concat(id, "-form-item-description"), formMessageId: "".concat(id, "-form-item-message") }, fieldState);
};
var FormItemContext = React.createContext({});
var FormItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var id = React.useId();
    return (_jsx(FormItemContext.Provider, { value: { id: id }, children: _jsx("div", __assign({ ref: ref, className: cn("space-y-2", className) }, props)) }));
});
FormItem.displayName = "FormItem";
var FormLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormField(), error = _b.error, formItemId = _b.formItemId;
    return (_jsx(Label, __assign({ ref: ref, className: cn(error && "text-red-500 dark:text-red-900", className), htmlFor: formItemId }, props)));
});
FormLabel.displayName = "FormLabel";
var FormControl = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var _b = useFormField(), error = _b.error, formItemId = _b.formItemId, formDescriptionId = _b.formDescriptionId, formMessageId = _b.formMessageId;
    return (_jsx(Slot, __assign({ ref: ref, id: formItemId, "aria-describedby": !error
            ? "".concat(formDescriptionId)
            : "".concat(formDescriptionId, " ").concat(formMessageId), "aria-invalid": !!error }, props)));
});
FormControl.displayName = "FormControl";
var FormDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var formDescriptionId = useFormField().formDescriptionId;
    return (_jsx("p", __assign({ ref: ref, id: formDescriptionId, className: cn("text-sm text-neutral-500 dark:text-neutral-400", className) }, props)));
});
FormDescription.displayName = "FormDescription";
var FormMessage = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var _b = useFormField(), error = _b.error, formMessageId = _b.formMessageId;
    var body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
    if (!body) {
        return null;
    }
    return (_jsx("p", __assign({ ref: ref, id: formMessageId, className: cn("text-sm font-medium text-red-500 dark:text-red-900", className) }, props, { children: body })));
});
FormMessage.displayName = "FormMessage";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
//# sourceMappingURL=form.js.map