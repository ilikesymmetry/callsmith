// rollup-plugin-replace-use-strict.js
module.exports = function addUseClient() {
  return {
    name: "add-use-client",
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach((fileName) => {
        const chunk = bundle[fileName];
        if (
          ["client.js", "client.es.js"].includes(fileName) &&
          chunk.type === "chunk"
        ) {
          let code;
          if (chunk.code.startsWith("'use strict';")) {
            code = chunk.code.replace(/'use strict';/g, "'use client';");
          } else {
            code = "'use client';\n\n" + chunk.code;
          }
          chunk.code = code;
        }
      });
    },
  };
};
