// index.ts
import info from "./info.txt";
// name: kintsugi-programmer
// target: coding_is_meditation

import user from "./user.json"
// {
//     "name":"Kintsugi-Programmer",
//     "age":25
// }

import { makeName } from "./module";// File extensions (.ts) are optional when importing
// // module.ts
// export const makeName = (firstName: string, lastName: string) : string=> {
//     return `${firstName} ${lastName}`;
//     // ` , not '
// };

console.log("Hello via Bun!");
// Hello via Bun!

console.log(info);
// name: kintsugi-programmer
// target: coding_is_meditation

console.log(user);
// {
//   name: "Kintsugi-Programmer",
//   age: 25,
// }

console.log(makeName("Kintsugi","Programmer"));
