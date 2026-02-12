const port = Bun.env.PORT || 8000 ;
const server = Bun.serve({
    port:port,
    fetch(req){
        const url = new URL(req.url);
        
        // Dynamic Routes
        const pathPaths = url.pathname.split('/');
        if (
            // pathPaths[0] is empty always
            pathPaths[1] === "api"
            &&
            pathPaths[2]
        ){
            const id = pathPaths[2];
            return new Response(`ID is: ${id}`); // Use backticks for dynamic string construction
        }

        // Static Routes
        if (url.pathname==="/api/health"){return new Response("Status: OK");}
        return new Response("Route not found",{status:404});
    }
});