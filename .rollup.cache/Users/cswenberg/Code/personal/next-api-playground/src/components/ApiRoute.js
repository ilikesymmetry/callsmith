import { __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-horizontal";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "./ui/resizable";
import { Button } from "./ui/button";
import { KeyValueForm } from "./KeyValueForm";
import { JsonEditor } from "./JsonEditor";
import { PlaygroundActionType, } from "../lib/types";
import { extractPath } from "../lib/utils";
import { HttpStatusBadge } from "./HttpStatusBadge";
import { HttpMethodBadge } from "./HttpMethodBadge";
import { ApiRoutePathNode } from "./ApiRoutePathNode";
import { ScrollArea } from "./ui/scroll-area";
import { ContentBox } from "./ContentBox";
export function ApiRoute(_a) {
    var _this = this;
    var state = _a.state, dispatch = _a.dispatch;
    var route = state.routes[state.selectedRoute];
    var onBodyChange = useCallback(function (v) {
        dispatch({ type: PlaygroundActionType.EditBody, data: v });
    }, []);
    var onQueryChange = useCallback(function (v) {
        dispatch({ type: PlaygroundActionType.EditQuery, data: v });
    }, []);
    var onHeadersChange = useCallback(function (v) {
        dispatch({ type: PlaygroundActionType.EditHeaders, data: v });
    }, []);
    var onRouteParamsChange = useCallback(function (v) {
        dispatch({ type: PlaygroundActionType.EditRouteParams, data: v });
    }, []);
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var submitRequest = function (route) { return __awaiter(_this, void 0, void 0, function () {
        var path, query, res, data, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    path = route.path
                        .split("/")
                        .every(function (name) { return !extractPath(name).isDynamic; })
                        ? route.path
                        : route.path
                            .split("/")
                            .map(function (name) {
                            var _a;
                            var _b = extractPath(name), isDynamic = _b.isDynamic, value = _b.value;
                            if (isDynamic) {
                                return (_a = route.params.find(function (kv) { return kv.key === value; })) === null || _a === void 0 ? void 0 : _a.value;
                            }
                            else {
                                return value;
                            }
                        })
                            .join("/");
                    query = route.query.filter(function (kv) { return kv.key !== ""; }).length === 0
                        ? ""
                        : route.query.map(function (_a) {
                            var key = _a.key, value = _a.value;
                            return "".concat(key, "=").concat(value);
                        }).join("&");
                    return [4 /*yield*/, fetch("/".concat(path).concat(query ? "?" + query : ""), {
                            method: route.method,
                            body: route.method !== "GET" ? route.body : null,
                        })];
                case 2:
                    res = _b.sent();
                    data = void 0;
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, res.json()];
                case 4:
                    data = _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _a = _b.sent();
                    data = "Unknown error. Could not parse JSON.";
                    return [3 /*break*/, 6];
                case 6:
                    // console.log(data);
                    dispatch({
                        type: PlaygroundActionType.HttpResponse,
                        data: { status: res.status, data: data },
                    });
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [3 /*break*/, 8];
                case 8:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var pathItems = route.path.split("/");
    return (_jsxs(ResizablePanelGroup, { direction: "vertical", className: "", children: [_jsxs(ResizablePanel, { defaultSize: 50, minSize: 8, className: "px-8 py-4", children: [_jsx("div", { className: "pb-4 text-neutral-400", children: "Request" }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "space-x-2 flex items-center", children: [_jsx(HttpMethodBadge, { method: route.method, children: route.method }), _jsx("div", { className: "text-lg flex items-center", children: pathItems.map(function (name, i) { return (_jsx(ApiRoutePathNode, { name: name }, "".concat(name, "-").concat(i))); }) })] }), _jsx(Button, { loading: loading, onClick: function () { return submitRequest(route); }, children: "Send" })] }), _jsxs(Tabs, { className: "mt-4 h-full", defaultValue: "headers", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "headers", children: "Headers" }), _jsx(TabsTrigger, { value: "query", children: "Query" }), _jsx(TabsTrigger, { value: "body", children: "Body" }), _jsx(TabsTrigger, { value: "params", className: route.path
                                            .split("/")
                                            .some(function (name) { return extractPath(name).isDynamic; })
                                            ? ""
                                            : "hidden", alert: !route.params.every(function (kv) { return !!kv.value; }), children: "Params" })] }), _jsxs("div", { className: "pb-36 h-full", children: [_jsx(TabsContent, { value: "headers", className: "h-full", children: _jsx(ScrollArea, { className: "h-full", children: _jsx(KeyValueForm, { keyValues: route.headers, setKeyValues: onHeadersChange }) }) }), _jsx(TabsContent, { value: "query", className: "h-full", children: _jsx(ScrollArea, { className: "h-full", children: _jsx(KeyValueForm, { keyValues: route.query, setKeyValues: onQueryChange }) }) }), _jsx(TabsContent, { value: "body", className: "h-full", children: _jsx(ContentBox, { children: _jsx(ScrollArea, { className: "h-full", children: _jsx(JsonEditor, { value: route.body, onChange: onBodyChange }) }) }) }), _jsx(TabsContent, { value: "params", className: "h-full", children: _jsx(ScrollArea, { className: "h-full", children: _jsx(KeyValueForm, { keyValues: route.params, setKeyValues: onRouteParamsChange, lockKeys: true }) }) })] })] })] }), _jsx(ResizableHandle, {}), _jsxs(ResizablePanel, { defaultSize: 50, minSize: 3, className: "py-4 px-8", children: [_jsx("div", { className: "text-neutral-400 pb-4", children: "Response" }), !!route.lastResponse ? (_jsxs("div", { className: "pb-14 w-full h-full", children: [_jsx("div", { className: "mb-4", children: _jsx(HttpStatusBadge, { code: route.lastResponse.status }) }), _jsx("div", { className: "pb-6 w-full h-full", children: _jsx(ContentBox, { children: _jsx(ScrollArea, { className: "h-full", children: _jsx(JsonEditor, { value: JSON.stringify(route.lastResponse.data) }) }) }) })] })) : (_jsx("div", { className: "pb-10 w-full h-full", children: _jsx(ContentBox, { children: _jsx("div", { className: "p-2 w-full h-full flex flex-col justify-center text-center text-neutral-600 dark:text-neutral-400", children: loading
                                    ? "Awaiting response..."
                                    : "Press Send to get a response" }) }) }))] })] }));
}
//# sourceMappingURL=ApiRoute.js.map