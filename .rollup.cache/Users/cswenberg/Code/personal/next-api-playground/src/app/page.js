import { jsx as _jsx } from "react/jsx-runtime";
import { Callsmith } from "@/components/Callsmith";
import { getAppRoutes } from "@/lib/app-router";
// export function getApiRoutes() {
//   const readDirectory = (dirPath: string): string[] => {
//     let results: string[] = [];
//     const files = fs.readdirSync(dirPath);
//     files.forEach((file) => {
//       const fullPath = path.join(dirPath, file);
//       if (fs.statSync(fullPath).isDirectory()) {
//         results = results.concat(readDirectory(fullPath)); // Recursively read directories
//       } else {
//         results.push(fullPath);
//       }
//     });
//     return results;
//   };
//   const prefixPath = path.join(process.cwd(), "src", "pages", "api");
//   const files = readDirectory(prefixPath);
//   const cleanedRoutes = files
//     .map((file) => file.replace(prefixPath + "/", ""))
//     .filter((file) => file.endsWith(".ts"))
//     .map((file) => file.replace(".ts", ""));
//   return cleanedRoutes;
// }
// export function getApiPathNodes() {
//   const traverse = (path: string, parent: ApiPathNode) => {
//     const value = path.split("/").pop()!.replace(".ts", "");
//     const node = {
//       value,
//       children: [],
//     };
//     parent.children.push(node);
//     if (fs.statSync(path).isDirectory()) {
//       const files = fs.readdirSync(path);
//       files.forEach((value) => {
//         traverse(`${path}/${value}`, node);
//       });
//     }
//   };
//   const prefixPath = path.join(process.cwd(), "src", "pages", "api");
//   const parent: ApiPathNode = { value: "", children: [] };
//   traverse(prefixPath, parent);
//   return parent.children[0]!.children;
// }
export default function Home() {
    // console.log(getAppRoutes());
    return _jsx(Callsmith, { nodes: getAppRoutes() });
}
//# sourceMappingURL=page.js.map