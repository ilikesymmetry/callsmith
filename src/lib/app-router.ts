import fs from "fs";
import path from "path";
import { ApiPathNode } from "./types";

interface ApiRoute {
  route: string;
  methods: string[];
}

export function getAppRoutes() {
  //   const apiDirectory = path.join(__dirname, "/api");
  const apiDirectory = path.join(process.cwd(), "src", "app");
  const apiRoutes = getApiRoutes(apiDirectory);
  // console.log("apiRoutes", apiRoutes);
  const fileTree = buildFileTree(apiRoutes);
  // console.log("fileTree", fileTree);
  return fileTree;
}

function getApiRoutes(directory: string, baseRoute: string = ""): ApiRoute[] {
  const routes: ApiRoute[] = [];

  const items = fs.readdirSync(directory);
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // If it's a directory, recurse into it
      const nestedRoutes = getApiRoutes(fullPath, path.join(baseRoute, item));
      routes.push(...nestedRoutes);
    } else if (stat.isFile() && (item === "route.js" || item === "route.ts")) {
      // If it's a 'route.js' or 'route.ts' file, it's a valid API route
      const routePath = baseRoute.replace(/\\/g, "/"); // Normalize path to use forward slashes
      const methods = getMethods(fullPath);
      routes.push({ route: routePath, methods });
    }
  }

  return routes;
}

function getMethods(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const methods: string[] = [];

  if (fileContent.match(/\bexport\b.*\bfunction\b.*\bGET\b/))
    methods.push("GET");
  if (fileContent.match(/\bexport\b.*\bfunction\b.*\bPOST\b/))
    methods.push("POST");
  if (fileContent.match(/\bexport\b.*\bfunction\b.*\bPUT\b/))
    methods.push("PUT");
  if (fileContent.match(/\bexport\b.*\bfunction\b.*\bDELETE\b/))
    methods.push("DELETE");
  if (fileContent.match(/\bexport\b.*\bfunction\b.*\bPATCH\b/))
    methods.push("PATCH");

  return methods;
}

function buildFileTree(routes: ApiRoute[]): ApiPathNode[] {
  const root: ApiPathNode = {
    value: "",
    type: "dir",
    children: [],
  };

  routes.forEach((route) => {
    const parts = route.route.split("/").filter((part) => part.length > 0);

    route.methods.forEach((method) => {
      let currentLevel = root;

      parts.forEach((part, index) => {
        let node = currentLevel.children.find(
          (child) => child.value === part && child.type === "dir"
        );

        if (!node) {
          node = {
            value: part,
            type: index === parts.length - 1 ? "file" : "dir",
            data: index === parts.length - 1 ? { method } : undefined,
            children: [],
          };
          currentLevel.children.push(node);
        } else if (node.type === "dir" && index === parts.length - 1) {
          // Handle the case where we need to add a file node to an existing directory node
          currentLevel.children.push({
            value: part,
            type: "file",
            data: { method },
            children: [],
          });
        } else if (node.type === "file" && index === parts.length - 1) {
          // If the node is a file node and we're at the end of the parts, ensure multiple methods are handled
          if (!node.data) {
            node.data = { method };
          } else if (node.data.method !== method) {
            currentLevel.children.push({
              value: part,
              type: "file",
              data: { method },
              children: [],
            });
          }
        }

        currentLevel = node;
      });
    });
  });

  return root.children;
}
