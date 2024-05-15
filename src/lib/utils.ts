import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function joinPaths(paths: string[]) {
  // console.log("paths", paths);
  let joined = paths
    .reverse()
    .reduce((acc, v) => (v === "" ? acc : [v, acc].join("/")), "");
  joined = joined.substring(0, joined.length - 1);
  // console.log("joined", joined);
  return joined;
}

export function extractPath(name: string) {
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
