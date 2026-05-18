const port = Bun.env.PORT || 8000 ;
const server = Bun.serve(
    {
        port:port,
        fetch(req){
            return new Response("Status: OK");
        }
    }
);

console.info(`Server is running on port ${server.port}`);
// Server is running on port 8000