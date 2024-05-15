import { Dispatch, useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-horizontal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Button } from "./ui/button";
import { KeyValueForm } from "./KeyValueForm";
import { JsonEditor } from "./JsonEditor";
import {
  KeyValue,
  PlaygroundActionType,
  PlaygroundState,
  RouteState,
} from "../lib/types";
import { extractPath } from "../lib/utils";
import { HttpStatusBadge } from "./HttpStatusBadge";
import { HttpMethodBadge } from "./HttpMethodBadge";
import { ApiRoutePathNode } from "./ApiRoutePathNode";
import { ScrollArea } from "./ui/scroll-area";
import { ContentBox } from "./ContentBox";

export function ApiRoute({
  state,
  dispatch,
}: {
  state: PlaygroundState;
  dispatch: Dispatch<{ type: PlaygroundActionType; data: any }>;
}) {
  const route = state.routes[state.selectedRoute];

  const onBodyChange = useCallback((v: string) => {
    dispatch({ type: PlaygroundActionType.EditBody, data: v });
  }, []);
  const onQueryChange = useCallback((v: KeyValue[]) => {
    dispatch({ type: PlaygroundActionType.EditQuery, data: v });
  }, []);
  const onHeadersChange = useCallback((v: KeyValue[]) => {
    dispatch({ type: PlaygroundActionType.EditHeaders, data: v });
  }, []);
  const onRouteParamsChange = useCallback((v: KeyValue[]) => {
    dispatch({ type: PlaygroundActionType.EditRouteParams, data: v });
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

  const submitRequest = async (route: RouteState) => {
    setLoading(true);
    try {
      const path = route.path
        .split("/")
        .every((name) => !extractPath(name).isDynamic)
        ? route.path
        : route.path
            .split("/")
            .map((name) => {
              const { isDynamic, value } = extractPath(name);
              if (isDynamic) {
                return route.params.find((kv) => kv.key === value)?.value;
              } else {
                return value;
              }
            })
            .join("/");
      const query =
        route.query.filter((kv) => kv.key !== "").length === 0
          ? ""
          : route.query.map(({ key, value }) => `${key}=${value}`).join("&");
      const res = await fetch(`/${path}${query ? "?" + query : ""}`, {
        method: route.method,
        body: route.method !== "GET" ? route.body : null,
      });
      let data;
      try {
        data = await res.json();
      } catch {
        data = "Unknown error. Could not parse JSON.";
      }
      // console.log(data);
      dispatch({
        type: PlaygroundActionType.HttpResponse,
        data: { status: res.status, data },
      });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const pathItems = route.path.split("/");

  return (
    <ResizablePanelGroup direction="vertical" className="">
      <ResizablePanel defaultSize={50} minSize={8} className="px-8 py-4">
        <div className="pb-4 text-neutral-400">Request</div>
        <div className="flex justify-between items-center">
          <div className="space-x-2 flex items-center">
            <HttpMethodBadge method={route.method}>
              {route.method}
            </HttpMethodBadge>
            <div className="text-lg flex items-center">
              {pathItems.map((name, i) => (
                <ApiRoutePathNode key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
          <Button loading={loading} onClick={() => submitRequest(route)}>
            Send
          </Button>
        </div>
        <Tabs className="mt-4 h-full" defaultValue="headers">
          <TabsList>
            <TabsTrigger value="headers">Headers</TabsTrigger>
            <TabsTrigger value="query">Query</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger
              value="params"
              className={
                route.path
                  .split("/")
                  .some((name) => extractPath(name).isDynamic)
                  ? ""
                  : "hidden"
              }
              alert={!route.params.every((kv) => !!kv.value)}
            >
              Params
            </TabsTrigger>
          </TabsList>
          <div className="pb-36 h-full">
            <TabsContent value="headers" className="h-full">
              <ScrollArea className="h-full">
                <KeyValueForm
                  keyValues={route.headers}
                  setKeyValues={onHeadersChange}
                />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="query" className="h-full">
              <ScrollArea className="h-full">
                <KeyValueForm
                  keyValues={route.query}
                  setKeyValues={onQueryChange}
                />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="body" className="h-full">
              <ContentBox>
                <ScrollArea className="h-full">
                  <JsonEditor value={route.body} onChange={onBodyChange} />
                </ScrollArea>
              </ContentBox>
            </TabsContent>
            <TabsContent value="params" className="h-full">
              <ScrollArea className="h-full">
                <KeyValueForm
                  keyValues={route.params}
                  setKeyValues={onRouteParamsChange}
                  lockKeys
                />
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={3} className="py-4 px-8">
        <div className="text-neutral-400 pb-4">Response</div>
        {!!route.lastResponse ? (
          <div className="pb-14 w-full h-full">
            <div className="mb-4">
              <HttpStatusBadge code={route.lastResponse!.status} />
            </div>
            <div className="pb-6 w-full h-full">
              <ContentBox>
                <ScrollArea className="h-full">
                  <JsonEditor
                    value={JSON.stringify(route.lastResponse!.data)}
                    // disabled
                  />
                </ScrollArea>
              </ContentBox>
            </div>
          </div>
        ) : (
          <div className="pb-10 w-full h-full">
            <ContentBox>
              <div className="p-2 w-full h-full flex flex-col justify-center text-center text-neutral-600 dark:text-neutral-400">
                {loading
                  ? "Awaiting response..."
                  : "Press Send to get a response"}
              </div>
            </ContentBox>
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
