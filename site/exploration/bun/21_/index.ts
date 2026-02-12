import homePage from "./home.html";
Bun.serve({
    port:8000,
    routes:{ 
        "/home": homePage,
        "/ge": Response.redirect("https://google.com")
        
     } // automatic serialize
}
)