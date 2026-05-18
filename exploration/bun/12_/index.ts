// index.ts
// {
//     "name":"kintsugi-programmer"
// }

const file = Bun.file("./user.json");

console.log(file);
// FileRef ("./user.json") {
//   type: "application/json;charset=utf-8"
// }

console.log(file.type);
// application/json;charset=utf-8

console.log(file.size);
// 36

console.log(file.name);
// ./user.json

const file_1 = Bun.file("./message.txt");
const check_if_exists_file_1 = await file_1.exists(); //Prevents crashes
console.log(check_if_exists_file_1);
// false

const data = "Si Vis Pacem Para Bellum !!!";
const bytes_written_from_data = await Bun.write("message_1.txt",data);
console.log(bytes_written_from_data);
// 2

// bali-king@war-machine:~/BaliGit/kintsugi-stack-bun/12_$ cat  message_1.txt
// Si Vis Pacem Para Bellum !!!bali-king@war-machine:~/BaliGit/kintsugi-stack-bun/12_$ 

const old_file = Bun.file("./message_1.txt");
const new_file = Bun.file("./copied_message_1.txt");
await Bun.write(new_file,old_file); // Doesn't load entire file into memory & Preserves content

// bali-king@war-machine:~/BaliGit/kintsugi-stack-bun/12_$ ls
// README.md  copied_message_1.txt  message_1.txt  package.json   user.json
// bun.lock   index.ts              node_modules   tsconfig.json
// bali-king@war-machine:~/BaliGit/kintsugi-stack-bun/12_$ cat  copied_message_1.txt
// Si Vis Pacem Para Bellum !!!bali-king@war-machine:~/BaliGit/kintsugi-stack-bun/12_$ 