import homePage from "./home.html";
Bun.serve({
    port:8000,
    routes:{ "/home": homePage } // automatic serialize
}
)