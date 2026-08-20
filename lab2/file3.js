import{stat} from "fs/promises";
const fstat = await stat("file1.js");
console.log("file size" , fstat.size , "bytes");
console.log(`is file:${fstat.isfile()}`);
console.log(`is folder : ${fstat.isDictionary()}`);
console.log(`is syslink:${fstat.isSymbolicLink()}`);
console.log(`created on:${fstat.birthtime}`);
console.log(`last used :${fstat.atime()}`);