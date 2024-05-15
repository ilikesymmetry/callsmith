import { extractPath } from "@/lib/utils";
import { ContentBox } from "./ContentBox";

export function ApiRoutePathNode({ name }: { name: string }) {
  const { isDynamic, value } = extractPath(name);
  return (
    <div className="flex items-center">
      /
      {!isDynamic ? (
        value
      ) : (
        <ContentBox>
          <div className="text-neutral-600 dark:text-neutral-400 px-1">
            {name}
          </div>
        </ContentBox>
      )}
    </div>
  );
}
