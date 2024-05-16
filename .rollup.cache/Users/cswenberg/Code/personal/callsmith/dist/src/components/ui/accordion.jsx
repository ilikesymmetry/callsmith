"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props}/>));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-row py-1 items-center space-x-2 transition-all hover:bg-neutral-100 [&[data-state=open]>svg]:rotate-90 dark:hover:bg-neutral-900", className)} {...props}>
      <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200"/>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=accordion.jsx.map