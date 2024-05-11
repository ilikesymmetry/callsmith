"use client";

import {
  ApiPathNode,
  PlaygroundActionType,
  PlaygroundState,
  RouteState,
} from "@/lib/types";
import { useReducer } from "react";
import { ApiTab, stitchRoute } from "./ApiTab";
import { Tabs, TabsList } from "./ui/tabs-vertical";
import { ApiRoute } from "./ApiRoute";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Accordion } from "./ui/accordion";

function reducer(
  state: PlaygroundState,
  action: { type: PlaygroundActionType; data: any }
) {
  console.log("new action", action.type);
  switch (action.type) {
    case PlaygroundActionType.SelectRoute:
      return {
        ...state,
        selectedRoute: action.data,
      };
    case PlaygroundActionType.EditMethod:
      return {
        ...state,
        routes: {
          ...state.routes,
          [state.selectedRoute]: {
            ...state.routes[state.selectedRoute],
            method: action.data,
          },
        },
      };
    case PlaygroundActionType.EditBody:
      return {
        ...state,
        routes: {
          ...state.routes,
          [state.selectedRoute]: {
            ...state.routes[state.selectedRoute],
            body: action.data,
          },
        },
      };
    case PlaygroundActionType.EditQuery:
      return {
        ...state,
        routes: {
          ...state.routes,
          [state.selectedRoute]: {
            ...state.routes[state.selectedRoute],
            query: action.data,
          },
        },
      };
    case PlaygroundActionType.EditHeaders:
      return {
        ...state,
        routes: {
          ...state.routes,
          [state.selectedRoute]: {
            ...state.routes[state.selectedRoute],
            headers: action.data,
          },
        },
      };
    case PlaygroundActionType.HttpResponse:
      return {
        ...state,
        routes: {
          ...state.routes,
          [state.selectedRoute]: {
            ...state.routes[state.selectedRoute],
            lastResponse: action.data,
          },
        },
      };
  }
}

const emptyState: RouteState = {
  method: "GET",
  headers: [{ key: "", value: "" }],
  query: [{ key: "", value: "" }],
  body: "",
};

function constructRoutes(nodes: ApiPathNode[]) {
  const routes: string[] = [];
  function traverse(path: string, node: ApiPathNode) {
    if (node.children.length === 0) {
      routes.push(`${path}/${node.value}`);
    } else {
      node.children.forEach((n) => traverse(`${path}/${node.value}`, n));
    }
  }
  nodes.forEach((node) => traverse("", node));

  return routes.map((file) => file.substring(1)); // trim leading "/"
}

export function Playtest({ nodes }: { nodes: ApiPathNode[] }) {
  // console.log("nodes", nodes);
  // console.log(constructRoutes(nodes));
  const [state, dispatch] = useReducer(
    reducer,
    constructRoutes(nodes).reduce(
      (acc: PlaygroundState, route) => {
        acc.routes[route] = emptyState;
        return acc;
      },
      { selectedRoute: constructRoutes(nodes)[0], routes: {} }
    )
  );
  console.log("state", state);

  return (
    <main className="dark:bg-black dark:text-white">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[100vh] min-w-[100vw]"
      >
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40} className="">
          <div className="py-4 px-6 font-bold text-neutral-800 dark:text-neutral-400">
            Routes
          </div>
          <Tabs
            value={state.selectedRoute}
            onValueChange={(route) =>
              dispatch({ type: PlaygroundActionType.SelectRoute, data: route })
            }
          >
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={nodes.map((n) => n.value)}
            >
              <TabsList>
                {nodes.map((node) => (
                  <ApiTab
                    key={stitchRoute("", node.value)}
                    prefix=""
                    node={node}
                  />
                ))}
              </TabsList>
            </Accordion>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} className="">
          <ApiRoute state={state} dispatch={dispatch} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
