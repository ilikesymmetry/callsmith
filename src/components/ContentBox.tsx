import { cn } from "@/lib/utils";

export function ContentBox({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full bg-neutral-50 dark:bg-neutral-950 rounded-md border border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
}
