import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function joinPaths(paths) {
    // console.log("paths", paths);
    let joined = paths
        .reverse()
        .reduce((acc, v) => (v === "" ? acc : [v, acc].join("/")), "");
    joined = joined.substring(0, joined.length - 1);
    // console.log("joined", joined);
    return joined;
}
export function extractPath(name) {
    const isDynamic = name.startsWith("[") && name.endsWith("]");
    if (isDynamic)
        return {
            isDynamic: true,
            value: name.substring(1, name.length - 1),
        };
    else {
        return {
            isDynamic: false,
            value: name,
        };
    }
}
//# sourceMappingURL=utils.js.map