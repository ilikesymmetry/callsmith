import fs from "fs";
import path from "path";
export function getAppRoutes() {
    //   const apiDirectory = path.join(__dirname, "/api");
    var apiDirectory = path.join(process.cwd(), "src", "app");
    var apiRoutes = getApiRoutes(apiDirectory);
    // console.log("apiRoutes", apiRoutes);
    var fileTree = buildFileTree(apiRoutes);
    // console.log("fileTree", fileTree);
    return fileTree;
}
function getApiRoutes(directory, baseRoute) {
    if (baseRoute === void 0) { baseRoute = ""; }
    var routes = [];
    var items = fs.readdirSync(directory);
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var fullPath = path.join(directory, item);
        var stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            // If it's a directory, recurse into it
            var nestedRoutes = getApiRoutes(fullPath, path.join(baseRoute, item));
            routes.push.apply(routes, nestedRoutes);
        }
        else if (stat.isFile() && (item === "route.js" || item === "route.ts")) {
            // If it's a 'route.js' or 'route.ts' file, it's a valid API route
            var routePath = baseRoute.replace(/\\/g, "/"); // Normalize path to use forward slashes
            var methods = getMethods(fullPath);
            routes.push({ route: routePath, methods: methods });
        }
    }
    return routes;
}
function getMethods(filePath) {
    var fileContent = fs.readFileSync(filePath, "utf-8");
    var methods = [];
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
function buildFileTree(routes) {
    var root = {
        value: "",
        type: "dir",
        children: [],
    };
    routes.forEach(function (route) {
        var parts = route.route.split("/").filter(function (part) { return part.length > 0; });
        route.methods.forEach(function (method) {
            var currentLevel = root;
            parts.forEach(function (part, index) {
                var node = currentLevel.children.find(function (child) { return child.value === part && child.type === "dir"; });
                if (!node) {
                    node = {
                        value: part,
                        type: index === parts.length - 1 ? "file" : "dir",
                        data: index === parts.length - 1 ? { method: method } : undefined,
                        children: [],
                    };
                    currentLevel.children.push(node);
                }
                else if (node.type === "dir" && index === parts.length - 1) {
                    // Handle the case where we need to add a file node to an existing directory node
                    currentLevel.children.push({
                        value: part,
                        type: "file",
                        data: { method: method },
                        children: [],
                    });
                }
                else if (node.type === "file" && index === parts.length - 1) {
                    // If the node is a file node and we're at the end of the parts, ensure multiple methods are handled
                    if (!node.data) {
                        node.data = { method: method };
                    }
                    else if (node.data.method !== method) {
                        currentLevel.children.push({
                            value: part,
                            type: "file",
                            data: { method: method },
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
//# sourceMappingURL=app-router.js.map