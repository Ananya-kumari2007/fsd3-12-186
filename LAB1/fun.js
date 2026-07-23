 //write a program to take any digit (0-9)and 
 //return its in word 
 //0-one 
 //5-five 
 const toWords = (digit )=>{
    const words =["zero","one","two","three","four","five","six","seven","eight","nine"];
    return words[digit];
 }
 console.log(toWords(5));
 console.log(toWords(2));
 console.log(toWords(7));