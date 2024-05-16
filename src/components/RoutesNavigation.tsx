import {
  ApiPathNode,
  PlaygroundActionType,
  PlaygroundState,
} from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsList } from "./ui/tabs-vertical";
import { Accordion } from "./ui/accordion";
import { ApiTab } from "./ApiTab";
import { joinPaths } from "@/lib/utils";
import { ContentBox } from "./ContentBox";

export function RoutesNavigation({
  nodes,
  state,
  dispatch,
}: {
  nodes: ApiPathNode[];
  state: PlaygroundState;
  dispatch: (o: any) => void;
}) {
  return (
    <>
      <div className="py-4 px-8 text-neutral-400">Routes</div>
      {nodes.length === 0 ? (
        <div className="px-8 h-full pb-20">
          <ContentBox>
            <div className="h-full flex flex-col justify-center text-neutral-600 dark:text-neutral-400 text-center">
              Routes will appear here as you add them
            </div>
          </ContentBox>
        </div>
      ) : (
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
      )}
      {/* <div className="absolute bottom-0 px-8 pb-2 w-full overflow-hidden">
        <div className="text-sm text-neutral-400 dark:text-neutral-600">
          Made by{" "}
          <a
            href="https://twitter.com/ilikesymmetry"
            target="_blank"
            className="hover:underline hover:text-neutral-500"
          >
            @ilikesymmetry
          </a>
        </div>
      </div> */}
    </>
  );
}
