const port = Bun.env.PORT || 8000 ;
const server = Bun.serve ({
    port:port,
    fetch(req){
        const url = new URL(req.url);

        // Static Routes
        if (url.pathname === "/api/health") {
            return new Response("Status: OK");
        }

        return new Response("Route not found",{status:404});
    }
});

console.info(`Server is running on port ${server.port}`);