import fs from "fs";
fs.mkdir("documentation",(err)=>
{
    if (err) {
        console.error(err);
    }
    else {
        console.log("Folder Created");
    }
}
);
// Folder Created

fs.readdir("documentation",(err,files)=>{
    if (err) {console.error(err);}
    else {console.log(files);}
});
// []

console.log(import.meta.dir);
// /workspaces/kintsugi-stack-bun/13_

fs.readdir(import.meta.dir,(err,files)=>{
    if(err) {console.error(err);}
    else {console.log(files);}
});
// [ "documentation", "tsconfig.json", "node_modules", "package.json", ".gitignore", "index.ts",
//   "bun.lock", "README.md"
// ]