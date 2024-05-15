"use client";
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlaygroundActionType, } from "@/lib/types";
import { ApiTab } from "./ApiTab";
import { Tabs, TabsList } from "./ui/tabs-vertical";
import { ApiRoute } from "./ApiRoute";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "./ui/resizable";
import { Accordion } from "./ui/accordion";
import { extractPath, joinPaths } from "@/lib/utils";
import { useImmerReducer } from "use-immer";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { ContentBox } from "./ContentBox";
function reducer(draft, action) {
    console.log("new action", action.type);
    switch (action.type) {
        case PlaygroundActionType.SelectRoute:
            draft.selectedRoute = action.data;
            return;
        case PlaygroundActionType.EditMethod:
            draft.routes[draft.selectedRoute].method = action.data;
            return;
        case PlaygroundActionType.EditBody:
            draft.routes[draft.selectedRoute].body = action.data;
            return;
        case PlaygroundActionType.EditQuery:
            draft.routes[draft.selectedRoute].query = action.data;
            return;
        case PlaygroundActionType.EditHeaders:
            draft.routes[draft.selectedRoute].headers = action.data;
            return;
        case PlaygroundActionType.EditRouteParams:
            draft.routes[draft.selectedRoute].params = action.data;
            return;
        case PlaygroundActionType.HttpResponse:
            draft.routes[draft.selectedRoute].lastResponse = action.data;
            return;
    }
}
export function extractRoutes(fileTree, basePath) {
    if (basePath === void 0) { basePath = ""; }
    var routes = [];
    var emptyState = {
        headers: [{ key: "", value: "" }],
        query: [{ key: "", value: "" }],
        body: "",
    };
    fileTree.forEach(function (node) {
        var currentPath = basePath === "" ? node.value : [basePath, node.value].join("/");
        if (node.type === "file" && node.data && node.data.method) {
            routes.push(__assign(__assign({ path: currentPath, method: node.data.method }, emptyState), { params: currentPath
                    .split("/")
                    .map(function (name) { return extractPath(name); })
                    .filter(function (route) { return route.isDynamic; })
                    .map(function (route) { return ({ key: route.value, value: "" }); }) }));
        }
        if (node.children.length > 0) {
            routes.push.apply(routes, extractRoutes(node.children, currentPath));
        }
    });
    return routes;
}
export function Callsmith(_a) {
    var nodes = _a.nodes;
    // console.log("nodes", nodes);
    var extracted = extractRoutes(nodes);
    // console.log("extracted", extracted);
    var initialState = extracted.reduce(function (acc, route) {
        acc.routes["".concat(route.method, ":").concat(route.path)] = route;
        return acc;
    }, {
        selectedRoute: extracted.length > 0
            ? "".concat(extracted[0].method, ":").concat(extracted[0].path)
            : "null",
        routes: {},
    });
    var _b = useImmerReducer(reducer, initialState
    //   , () => {
    //   const localData = localStorage.getItem("appState");
    //   return localData ? JSON.parse(localData) : initialState;
    // }
    ), state = _b[0], dispatch = _b[1];
    // Save state to localStorage whenever it changes
    // useEffect(() => {
    //   localStorage.setItem("appState", JSON.stringify(state));
    // }, [state]);
    // console.log("state", state);
    return (_jsx("main", { className: "dark:bg-black dark:text-white overflow-hidden", children: _jsxs(ResizablePanelGroup, { direction: "horizontal", className: "min-h-[100vh] min-w-[100vw]", children: [_jsxs(ResizablePanel, { defaultSize: 25, minSize: 10, maxSize: 40, className: "relative", children: [_jsx("div", { className: "py-4 px-6 text-neutral-400", children: "Routes" }), _jsx(ScrollArea, { className: "h-[calc(100vh-120px)]", children: _jsx(Tabs, { value: state.selectedRoute, onValueChange: function (route) {
                                    return dispatch({
                                        type: PlaygroundActionType.SelectRoute,
                                        data: route,
                                    });
                                }, children: _jsx(Accordion, { type: "multiple", className: "w-full", defaultValue: nodes.map(function (n) { return n.value; }), children: _jsx(TabsList, { children: nodes.map(function (node, i) {
                                            var _a;
                                            return (_jsx(ApiTab, { prefix: "", node: node }, "".concat((_a = node.data) === null || _a === void 0 ? void 0 : _a.method, ":").concat(joinPaths([
                                                "",
                                                node.value,
                                            ]), "-").concat(i)));
                                        }) }) }) }) }), _jsx("div", { className: "absolute bottom-0 px-8 py-4 w-full", children: _jsx(ContentBox, { children: _jsxs("div", { className: "py-2 text-center text-sm text-neutral-600 dark:text-neutral-400", children: ["Made by", " ", _jsx(Link, { href: "https://twitter.com/ilikesymmetry", target: "_blank", className: "hover:underline", children: "@ilikesymmetry" })] }) }) })] }), _jsx(ResizableHandle, {}), _jsx(ResizablePanel, { defaultSize: 75, className: "", children: _jsx(ApiRoute, { state: state, dispatch: dispatch }) })] }) }));
}
//# sourceMappingURL=Callsmith.js.map