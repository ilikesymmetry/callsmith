import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { extractPath } from "@/lib/utils";
import { ContentBox } from "./ContentBox";
export function ApiRoutePathNode(_a) {
    var name = _a.name;
    var _b = extractPath(name), isDynamic = _b.isDynamic, value = _b.value;
    return (_jsxs("div", { className: "flex items-center", children: ["/", !isDynamic ? (value) : (_jsx(ContentBox, { children: _jsx("div", { className: "text-neutral-600 dark:text-neutral-400 px-1", children: name }) }))] }));
}
//# sourceMappingURL=ApiRoutePathNode.js.map