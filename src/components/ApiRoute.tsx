import { Dispatch, useCallback, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-horizontal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { KeyValueForm } from "./KeyValueForm";
import { JsonEditor } from "./JsonEditor";
import {
  KeyValue,
  Method,
  PlaygroundActionType,
  PlaygroundState,
} from "../lib/types";
import { cn } from "../lib/utils";

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
  const onMethodChange = useCallback((v: Method) => {
    dispatch({ type: PlaygroundActionType.EditMethod, data: v });
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ResizablePanelGroup direction="vertical" className="">
      <ResizablePanel defaultSize={50} minSize={10} className="p-8">
        <div className="flex justify-between items-center">
          <div className="space-x-4 flex items-center">
            <Select onValueChange={onMethodChange} value={route.method}>
              <SelectTrigger>
                <SelectValue placeholder="Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-lg">
              <span className="text-neutral-600 dark:text-neutral-400">
                /api/
              </span>
              {state.selectedRoute}
            </div>
          </div>
          <Button
            loading={loading}
            onClick={async () => {
              setLoading(true);
              try {
                const res = await fetch(
                  `/api/${state.selectedRoute}?${route.query
                    .map(({ key, value }) => `${key}=${value}`)
                    .join("&")}`,
                  {
                    method: route.method,
                    body: route.method !== "GET" ? route.body : null,
                  }
                );
                let data;
                try {
                  data = await res.json();
                } catch {
                  data = "Unknown error. Could not parse JSON.";
                }
                console.log(data);
                dispatch({
                  type: PlaygroundActionType.HttpResponse,
                  data: { status: res.status, data },
                });
              } catch (e) {
                console.log(e);
              }
              setLoading(false);
            }}
          >
            Send
          </Button>
        </div>
        <Tabs className="mt-4" defaultValue="headers">
          <TabsList>
            <TabsTrigger value="headers">Headers</TabsTrigger>
            <TabsTrigger value="query">Query</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
          </TabsList>
          <TabsContent value="headers">
            <div className="mt-4">
              <KeyValueForm
                keyValues={route.headers}
                setKeyValues={onHeadersChange}
              />
            </div>
          </TabsContent>
          <TabsContent value="query">
            <div className="mt-4">
              <KeyValueForm
                keyValues={route.query}
                setKeyValues={onQueryChange}
              />
            </div>
          </TabsContent>
          <TabsContent value="body" className="h-100%">
            <div className="mt-4">
              <JsonEditor value={route.body} onChange={onBodyChange} />
            </div>
          </TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={5} className="py-2 px-8">
        <div className="text-neutral-400">Response</div>
        {!!route.lastResponse && (
          <div className="pt-12">
            <div className="mb-4">
              Status:{" "}
              <span
                className={cn(
                  route.lastResponse!.status / 100 === 2
                    ? "text-green"
                    : "text-red"
                )}
              >
                {route.lastResponse!.status}
              </span>
            </div>
            <JsonEditor
              value={JSON.stringify(route.lastResponse!.data)}
              disabled
            />
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
