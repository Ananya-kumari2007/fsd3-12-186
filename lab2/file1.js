import { appendFile } from"fs/promises";

//await writeFile("hello.txt","js is not easy");
await appendFile("hello.txt","\nFs is much easy than others");

