import homePage from "./home.html";
Bun.serve({
    port:8000,
    routes:{ 
        "/home": homePage,
        "/ge": Response.redirect("https://google.com"),
        "/error": () => {
            throw new Error("This is hypothetical Test Error");
        }
        
     }, // automatic serialize

     error(error){
        console.error(error);
        return new Response("Internal Server Error", {status:500});
     }
}
)