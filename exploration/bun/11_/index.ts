// index.ts

// .env.local
// PORT=2000
// DATABASE_URL=mongodb://localhost:27017

// .env.development
// PORT=1000
// DATABASE_URL=mongodb://localhost:27017

// .env.production
// PORT=3000
// DATABASE_URL=mongodb://localhost:27017

// .env.staging
// PORT=
// DATABASE_URL=

// no need to import some lib for .env use

// Priority of import 
// 1. .env.local
// 2. .env.development
// 3. .env.production

// way 2 
const port_way_2 = Bun.env.PORT;

// way 3
const port_way_3 = import.meta.env.PORT;

// way 1
const port_way_1 = process.env.PORT;

console.log(port_way_1);
console.log(port_way_2);
console.log(port_way_3);
// 2000
// 2000
// 2000

// // env.d.ts
// declare module "bun" {
//     interface Env {
//         PORT: string;
//         DATABASE_URL: string;
//     }
// }

// .env.staging
// PORT=
// DATABASE_URL=

// when its get import , it will used as empty

// .env.empty 
// EMPTY

// when its get import , it will used as undefined