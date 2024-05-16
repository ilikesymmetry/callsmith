"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => (<TabsPrimitive.List ref={ref} className={cn("flex flex-row w-full space-x-8 text-neutral-500 dark:text-neutral-400", className)} {...props}/>));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, children, alert, ...props }, ref) => (<TabsPrimitive.Trigger ref={ref} className={cn("relative inline-flex whitespace-nowrap hover:text-black border-b-2 border-transparent py-2 font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-black data-[state=active]:text-neutral-950 data-[state=active]:shadow-sm dark:data-[state=active]:border-white dark:hover:text-white dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:text-neutral-50", className)} {...props}>
    {alert && (<div className="absolute bg-red-500 rounded-full h-1.5 w-1.5 top-3 -right-1.5"/>)}
    {children}
  </TabsPrimitive.Trigger>));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (<TabsPrimitive.Content ref={ref} className={cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300", className)} {...props}/>));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs-horizontal.jsx.map