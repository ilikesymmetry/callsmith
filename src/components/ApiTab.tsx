import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TabsTrigger } from "./ui/tabs-vertical";
import { ApiPathNode as Node } from "@/lib/types";

export function stitchRoute(prefix: string, node: string) {
  return `${prefix}/${node}`.replace(/^\/|\/$/g, "");
}

export function ApiTab({ prefix, node }: { prefix: string; node: Node }) {
  const offset = (prefix.split("/").length + Number(prefix !== "")) * 8;
  return node.children.length === 0 ? (
    <TabsTrigger
      className={cn("w-full", `pl-${offset}`)}
      value={stitchRoute(prefix, node.value)}
    >
      <div className={`pl-4`}>{node.value}</div>
    </TabsTrigger>
  ) : (
    <AccordionItem value={node.value} className="w-full">
      <AccordionTrigger className={cn("w-full", `pl-${offset}`)}>
        {node.value}
      </AccordionTrigger>
      <AccordionContent className="w-full">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={node.children.map((n) => n.value)}
        >
          {node.children.map((child) => (
            <ApiTab
              key={stitchRoute(prefix, node.value)}
              prefix={stitchRoute(prefix, node.value)}
              node={child}
            />
          ))}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
}

// Given an array of strings representing file paths, e.g. ["file1", "dir1/file2", "dir1/dir2/file3"], construct an array of Nodes of type {value:string, children
