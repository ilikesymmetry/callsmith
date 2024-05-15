"use client";
import { __rest } from "tslib";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props}/>);
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-row py-1 items-center space-x-2 transition-all hover:bg-neutral-100 [&[data-state=open]>svg]:rotate-90 dark:hover:bg-neutral-900", className)} {...props}>
      <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200"/>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>);
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<AccordionPrimitive.Content ref={ref} className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>);
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=accordion.jsx.map