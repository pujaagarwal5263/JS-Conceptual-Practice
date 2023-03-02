const myUtil=require("./utils");
const yargs=require("yargs");

myUtil.myName();

console.log(process.argv[3]);
console.log(yargs.argv);