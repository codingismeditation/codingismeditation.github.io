const port = Bun.env.PORT || 8000 ;
const server = Bun.serve({
    port:port,
    routes: {
        "/api/health": () => new Response("Status: OK"),
        "/api/:id": (req) => {return new Response(`ID is: ${req.params.id}`);},
        "/*": new Response("Route not found",{status:404})
    },
    // fetch(){ // Catch all for unmatched routes
    //     return new Response("Route not found",{status:404});
    // }
});

console.info(`Server is running on port ${server.port}`);