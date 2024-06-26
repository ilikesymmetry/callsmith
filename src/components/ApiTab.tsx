"use client";

import { joinPaths } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TabsTrigger } from "./ui/tabs-vertical";
import { Method, ApiPathNode as Node } from "@/lib/types";
import { HttpMethodBadge } from "./HttpMethodBadge";

export function stitchRoute(prefix: string, node: string) {
  return `${prefix}/${node}`.replace(/^\/|\/$/g, "");
}

export function ApiTab({ prefix, node }: { prefix: string; node: Node }) {
  const offset = prefix.split("/").length + Number(prefix !== "");
  // const value = `${node.data?.method}:${joinPaths([prefix, node.value])}`;
  // console.log("tab value", value);
  // console.log("node", node.value, node.children);

  return node.children.length === 0 ? (
    <TabsTrigger
      style={{ paddingLeft: offset * 24 + 8 }}
      className="w-full relative"
      value={`${node.data?.method}:${joinPaths([prefix, node.value])}`}
    >
      {/* <div className="flex items-center absolute left-0 bg-black">
        {Array.from({ length: offset }, (_, i) => (
          <div
            className="border-l w-4 bg-black"
            style={{ paddingLeft: i * 24 }}
            key={i}
          />
        ))}
      </div> */}
      <div className="flex items-center space-x-1">
        <div className="flex w-12 items-center justify-end">
          <HttpMethodBadge method={node.data?.method as Method} size="sm">
            {node.data?.method}
          </HttpMethodBadge>
        </div>
        <p>{node.value}</p>
      </div>
    </TabsTrigger>
  ) : (
    <AccordionItem value={node.value} className="w-full">
      <AccordionTrigger
        style={{ paddingLeft: offset * 24 + 8 }}
        className="w-full"
      >
        <div className="flex w-[28px] items-center justify-end" />
        {node.value}
      </AccordionTrigger>
      <AccordionContent className="w-full">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={node.children.map((n) => n.value)}
        >
          {node.children.map((child, i) => (
            <ApiTab
              key={`${node.data?.method}:${joinPaths([
                prefix,
                node.value,
              ])}-${i}`}
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
