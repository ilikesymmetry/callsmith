// rollup-preserve-use-client-plugin.js
export default function preserveDirective() {
  return {
    name: "preserve-directive",
    transform(code, id) {
      if (code.includes('"use client";') || code.includes("'use client';")) {
        // Ensure the directive is at the top
        return {
          code: `"use client";\n${code.replace(/["']use client["'];?\n?/, "")}`,
          map: { mappings: "" },
        };
      }
      return null;
    },
  };
}
