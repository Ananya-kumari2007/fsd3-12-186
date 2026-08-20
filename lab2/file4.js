import{ mkdir } from "fs/promises";
//create recursive directory 
await mkdir("uploads/resume",{ recursive : true});
//create siingle directory 
await mkdir ("uploads / images ");
//remove directory
await rm ("uploads" ,{ recursive : true});