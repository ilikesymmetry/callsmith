import { extractPath } from "@/lib/utils";
import { ContentBox } from "./ContentBox";
export function ApiRoutePathNode(_a) {
    var name = _a.name;
    var _b = extractPath(name), isDynamic = _b.isDynamic, value = _b.value;
    return (<div className="flex items-center">
      /
      {!isDynamic ? (value) : (<ContentBox>
          <div className="text-neutral-600 dark:text-neutral-400 px-1">
            {name}
          </div>
        </ContentBox>)}
    </div>);
}
//# sourceMappingURL=ApiRoutePathNode.jsx.map