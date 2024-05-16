"use client";

import {
  ApiPathNode,
  Method,
  PlaygroundActionType,
  PlaygroundState,
  RouteState,
} from "@/lib/types";
import { ApiRoute } from "./ApiRoute";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { extractPath } from "@/lib/utils";
import { useImmerReducer } from "use-immer";
import { useEffect } from "react";
import { RoutesNavigation } from "./RoutesNavigation";

function reducer(
  draft: PlaygroundState,
  action: { type: PlaygroundActionType; data: any }
) {
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

export function extractRoutes(
  fileTree: ApiPathNode[],
  basePath: string = ""
): RouteState[] {
  const routes: RouteState[] = [];
  const emptyState = {
    headers: [{ key: "", value: "" }],
    query: [{ key: "", value: "" }],
    body: "",
  };

  fileTree.forEach((node) => {
    const currentPath =
      basePath === "" ? node.value : [basePath, node.value].join("/");

    if (node.type === "file" && node.data && node.data.method) {
      routes.push({
        path: currentPath,
        method: node.data.method as Method,
        ...emptyState,
        params: currentPath
          .split("/")
          .map((name) => extractPath(name))
          .filter((route) => route.isDynamic)
          .map((route) => ({ key: route.value, value: "" })),
      });
    }

    if (node.children.length > 0) {
      routes.push(...extractRoutes(node.children, currentPath));
    }
  });

  return routes;
}

export function Callsmith({ nodes }: { nodes: ApiPathNode[] }) {
  const extracted = extractRoutes(nodes);

  const initialState = extracted.reduce(
    (acc: PlaygroundState, route) => {
      acc.routes[`${route.method}:${route.path}`] = route;
      return acc;
    },
    {
      selectedRoute:
        extracted.length > 0
          ? `${extracted[0].method}:${extracted[0].path}`
          : "null",
      routes: {},
    }
  );
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <main className="dark:bg-black dark:text-white overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[100vh] min-w-[100vw]"
      >
        <ResizablePanel
          defaultSize={25}
          minSize={10}
          maxSize={40}
          className="relative"
        >
          <RoutesNavigation nodes={nodes} state={state} dispatch={dispatch} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} className="">
          <ApiRoute state={state} dispatch={dispatch} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
