import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { joinPaths } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "./ui/accordion";
import { TabsTrigger } from "./ui/tabs-vertical";
import { HttpMethodBadge } from "./HttpMethodBadge";
export function stitchRoute(prefix, node) {
    return "".concat(prefix, "/").concat(node).replace(/^\/|\/$/g, "");
}
export function ApiTab(_a) {
    var _b, _c, _d;
    var prefix = _a.prefix, node = _a.node;
    var offset = prefix.split("/").length + Number(prefix !== "");
    // const value = `${node.data?.method}:${joinPaths([prefix, node.value])}`;
    // console.log("tab value", value);
    // console.log("node", node.value, node.children);
    return node.children.length === 0 ? (_jsx(TabsTrigger, { style: { paddingLeft: offset * 24 }, className: "w-full relative", value: "".concat((_b = node.data) === null || _b === void 0 ? void 0 : _b.method, ":").concat(joinPaths([prefix, node.value])), children: _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx("div", { className: "flex w-12 items-center justify-end", children: _jsx(HttpMethodBadge, { method: (_c = node.data) === null || _c === void 0 ? void 0 : _c.method, size: "sm", children: (_d = node.data) === null || _d === void 0 ? void 0 : _d.method }) }), _jsx("p", { children: node.value })] }) })) : (_jsxs(AccordionItem, { value: node.value, className: "w-full", children: [_jsxs(AccordionTrigger, { style: { paddingLeft: offset * 24 }, className: "w-full", children: [_jsx("div", { className: "flex w-[28px] items-center justify-end" }), node.value] }), _jsx(AccordionContent, { className: "w-full", children: _jsx(Accordion, { type: "multiple", className: "w-full", defaultValue: node.children.map(function (n) { return n.value; }), children: node.children.map(function (child, i) {
                        var _a;
                        return (_jsx(ApiTab, { prefix: stitchRoute(prefix, node.value), node: child }, "".concat((_a = node.data) === null || _a === void 0 ? void 0 : _a.method, ":").concat(joinPaths([
                            prefix,
                            node.value,
                        ]), "-").concat(i)));
                    }) }) })] }));
}
//# sourceMappingURL=ApiTab.js.map