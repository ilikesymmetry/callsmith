"use client";

import {
  ApiPathNode,
  Method,
  PlaygroundActionType,
  PlaygroundState,
  RouteState,
} from "@/lib/types";
import { ApiTab } from "./ApiTab";
import { Tabs, TabsList } from "./ui/tabs-vertical";
import { ApiRoute } from "./ApiRoute";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Accordion } from "./ui/accordion";
import { extractPath, joinPaths } from "@/lib/utils";
import { useImmerReducer } from "use-immer";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { ContentBox } from "./ContentBox";

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
  // console.log("nodes", nodes);
  const extracted = extractRoutes(nodes);
  // console.log("extracted", extracted);

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
  const [state, dispatch] = useImmerReducer(
    reducer,
    initialState
    //   , () => {
    //   const localData = localStorage.getItem("appState");
    //   return localData ? JSON.parse(localData) : initialState;
    // }
  );

  // Save state to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("appState", JSON.stringify(state));
  // }, [state]);

  // console.log("state", state);

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
          <div className="py-4 px-6 text-neutral-400">Routes</div>
          <ScrollArea className="h-[calc(100vh-120px)]">
            <Tabs
              value={state.selectedRoute}
              onValueChange={(route) =>
                dispatch({
                  type: PlaygroundActionType.SelectRoute,
                  data: route,
                })
              }
            >
              <Accordion
                type="multiple"
                className="w-full"
                defaultValue={nodes.map((n) => n.value)}
              >
                <TabsList>
                  {nodes.map((node, i) => (
                    <ApiTab
                      key={`${node.data?.method}:${joinPaths([
                        "",
                        node.value,
                      ])}-${i}`}
                      prefix=""
                      node={node}
                    />
                  ))}
                </TabsList>
              </Accordion>
            </Tabs>
          </ScrollArea>
          <div className="absolute bottom-0 px-8 py-4 w-full">
            <ContentBox>
              <div className="py-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                Made by{" "}
                <Link
                  href="https://twitter.com/ilikesymmetry"
                  target="_blank"
                  className="hover:underline"
                >
                  @ilikesymmetry
                </Link>
              </div>
            </ContentBox>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} className="">
          <ApiRoute state={state} dispatch={dispatch} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
