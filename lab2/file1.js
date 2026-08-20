import { writeFile , appendFile ,readFile } from"fs/promises";

await writeFile("hello.txt","js is not easy");
await appendFile("hello.txt","\nFs is much easy than others");
await appendFile("hello.txt","\nAnanya 🤗");
const content = await readFile("hello.txt","utf-8");
console.log(content);
