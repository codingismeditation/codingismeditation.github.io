import { $ } from "bun"; // $ library for shell scripting

// Basic Shell Command Execution
await $`echo "Hello, World!"`; // echo command // async/await syntax // template literal syntax `` backticks
// runs the command in a shell and waits for it to complete
// Hello, World!

// Fetching and Piping
const response = await fetch("https://example.com");

const clone = response.clone();

await $`cat < ${clone} | wc -c`; // consumes clone
const html = await response.text(); // original still usable

console.log(html)

// ➜  27_ git:(main) ✗ bun index.ts
// Hello, World!
//      513
// <!doctype html><html lang="en"><head><title>Example Domain</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#eee;width:60vw;margin:15vh auto;font-family:system-ui,sans-serif}h1{font-size:1.5em}div{opacity:0.8}a:link,a:visited{color:#348}</style><body><div><h1>Example Domain</h1><p>This domain is for use in documentation examples without needing permission. Avoid use in operations.<p><a href="https://iana.org/domains/example">Learn more</a></div></body></html>
//
// ➜  27_ git:(main) ✗ 