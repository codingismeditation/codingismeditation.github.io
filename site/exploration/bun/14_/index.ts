console.log(import.meta.dir);
// /workspaces/kintsugi-stack-bun/14_

console.log(import.meta.dirname); // for Node.js Compatibility // no need to use it
// /workspaces/kintsugi-stack-bun/14_

console.log(import.meta.env);
// {
//   SHELL: "/bin/bash",
// USER: "kintsugi",
// etc ENV VARS
// }

console.log(import.meta.file);
// index.ts

console.log(import.meta.path);
// /workspaces/kintsugi-stack-bun/14_/index.ts

console.log(import.meta.filename);// for Node.js Compatibility // no need to use it
// /workspaces/kintsugi-stack-bun/14_/index.ts

console.log(import.meta.url);
// file:///workspaces/kintsugi-stack-bun/14_/index.ts

console.log(import.meta.resolve("typescript")); // it gets module's path without importing it 
// file:///workspaces/kintsugi-stack-bun/14_/node_modules/typescript/lib/typescript.js

// Bun also supports Node.js Conventions
console.log(__dirname);
// /workspaces/kintsugi-stack-bun/14_
console.log(__filename);
// /workspaces/kintsugi-stack-bun/14_/index.ts