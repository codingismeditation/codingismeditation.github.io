// Setup
type TPost = {id:string;title:string;};
let posts: TPost[] = [];

// Server
const port = Bun.env.PORT || 8000 ;
const server = Bun.serve({
    port: port,
    routes: {
        "/api/health": new Response ("Status OK"),
        "/api/posts": {
            // GET All Posts
            // GET: () => Response.json(posts), // Old
            GET: (req) => {
                  const parsedUrl = new URL(req.url);  
    // Method 1: Get individual parameters
    const page = parsedUrl.searchParams.get("page");
    const limit = parsedUrl.searchParams.get("limit");
    console.log(page, limit); // "1" "10"
    
    // Method 2: Get all parameters as object
    const params = Object.fromEntries(parsedUrl.searchParams.entries());
    console.log(params) // { page: "1", limit: "10" }

                return Response.json(posts);
            },


            // POST Create Post
            POST: async (req) => {
                const body = await req.json() as Omit<TPost,"id">;
                posts.push({
                    id: crypto.randomUUID(),
                    title: body.title
                });
                return new Response("Created");
            }
        },
        "/api/posts/:id": {
            // PUT Update Post
            PUT: async(req) => {
                const id = req.params.id as string;
                const body = await req.json() as Omit<TPost,"id">;

                const postIndex = posts.findIndex(post => post.id === id);

                if (postIndex === -1){
                    return new Response("Post Not found",{status: 404});
                }
                posts[postIndex]!.title = body.title;
                return new Response("Updated");
            },

            // DELETE Post
            DELETE: (req) => {
                const id = req.params.id as string;

                const postIndex = posts.findIndex(post => post.id === id);

                if (postIndex === -1){
                    return new Response("Post Not found",{status: 404});
                }

                posts.splice(postIndex,1);

                return new Response("Deleted");
            },
        }
    }
})
