const server = Bun.serve({
    port: 3000,
    async fetch(request,server) {
        const ip = server.requestIP(request);// get client IP address
        server.timeout(request,10000);// 10 second timeout // Max time for req processing, after that Bun will return 408 Request Timeout
        await Bun.sleep(2000); // simulate long processing 2sec // need async to use await
        console.log(ip);
        return new Response(`OK`);
    }
})
// ➜  24_ git:(main) ✗ bun index.ts
// {
//   address: "::1",
//   family: "IPv6",
//   port: 50124,
// }
// {
//   address: "::1",
//   family: "IPv6",
//   port: 50124,
// }

process.on("SIGINT", () => { // Handle Ctrl+C
  console.log("Shutting down...");
  server.stop();
  process.exit(0);
});


// server.stop(); // Gracefully stop the server // wait for all requests to finish
// server.stop(true); // Forcefully stop the server // immediately terminate all connections

// To test timeout, run the server and use curl:
// curl http://localhost:3000
// After 10 seconds, you should see a "408 Request Timeout" response.

// To test, run the server and use curl:
// curl http://localhost:3000
// You should see "OK" after 2 seconds and the client IP logged in the console.

// To run the server, use the command:
// bun index.ts