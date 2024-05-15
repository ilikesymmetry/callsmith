import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from "./ui/badge";
export function HttpMethodBadge(_a) {
    var method = _a.method, children = _a.children, size = _a.size, rest = __rest(_a, ["method", "children", "size"]);
    switch (method) {
        case "GET":
            return (_jsx(Badge, __assign({ variant: "blue", size: size }, rest, { children: children })));
        case "POST":
            return (_jsx(Badge, __assign({ variant: "green", size: size }, rest, { children: children })));
        case "PUT":
            return (_jsx(Badge, __assign({ variant: "orange", size: size }, rest, { children: children })));
        case "PATCH":
            return (_jsx(Badge, __assign({ variant: "yellow", size: size }, rest, { children: children })));
        case "DELETE":
            return (_jsx(Badge, __assign({ variant: "red", size: size }, rest, { children: children })));
        case "HEAD":
            return (_jsx(Badge, __assign({ variant: "secondary", size: size }, rest, { children: children })));
        case "OPTIONS":
            return (_jsx(Badge, __assign({ variant: "secondary", size: size }, rest, { children: children })));
    }
}
//# sourceMappingURL=HttpMethodBadge.js.map