console.warn("Work-Rihanna");
let num = 1;

/**
 * @type {string}
 */
let abc = "abcdefg";
console.log(abc);


/**
 * @type {string[]}
 */
const block = ["Józsi", "Béla", "Feri"]
console.log(block);
console.log("-----");
for(let i = 0; i < block.length; i++){
    console.log(block[i])
}
console.log("-----");
for (const a of block) {
    console.log(a)
}
console.log("-----");
for (const key in block){
    console.log(`${key}:${block[key]}`);
}
console.log("-----");
/**
 * @type {{nev:string,age:int}}
 */
const a = {
    nev : `Benji`,
    age : 17  
};
console.log(a);


