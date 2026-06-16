// alert("hello world");
// Arrays in js
// var arr = [1, 2, 3, 4, 5];
// forEach 
// arr.forEach(function(val){
//     console.log(val +" Hello");
// })

// map
// var ans=arr.map(function(val){
//     return val+12;
// })
//  console.log(ans);

// filter
//  var fans=arr.filter(function(val){
//     if(val>3){return true;}
//     else{return false;}
//  })
//     console.log(fans);

// find
// var findans=arr.find(function(val){
//     if(val===3)return val;
// })
// console.log(findans);

//indexOf
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(10)); // -1 if not found

//Objects in js
// an object is a collection of key-value pairs
// var obj={
//     name:"Anin",
//     age:21
// }
// console.log(obj.name);
// console.log(obj.age+12);
// console.log(obj["name"]);
// Object.freeze(obj); // to make the object immutable
// obj.age=35;
// console.log(obj.age);

// Numbers of parameters in a function = function length
 
// Async functions
// async function abcd(){
//     var blob=await fetch("https://api.github.com/users");
//     return ans=await blob.json();
// }
// var functionans=abcd();
// console.log(functionans);

// defintion of a async function : an async function is a function that returns a promise. It allows you to write asynchronous code in a synchronous manner using the await keyword. When you call an async function, it immediately returns a promise, and you can use the await keyword to pause the execution of the function until the promise is resolved or rejected. This makes it easier to work with asynchronous operations, such as fetching data from an API or reading files, without having to use callbacks or chaining promises.    


// file system module in nodejs
// node js  is js runtime environment that allows you to run js code outside the browser. It is built on chrome's v8 js engine. It allows you to build server side applications using js. It has a built in module called fs which allows you to work with the file system. You can read, write, delete files and directories using this module.

//npm stands for node package manager. It is a package manager for nodejs that allows you to install and manage packages (libraries) that you can use in your nodejs applications. You can install packages using the command line and use them in your code by requiring them.

// working with file system module
// const fs = require('node:fs');
// // // writeFileSync - synchronous version that blocks until file is written
// // fs.writeFileSync("test.txt","Hello World: My name is Anin Hassain ");
// // console.log("File written successfully");

// fs.appendFileSync("test.txt","I am a student of CSE department",function(err){
//     if(err) console.error(err);
//     else console.log("File appended successfully");
// }   );

// console.log("This is the end of the script");
const fs = require('node:fs');
// fs.writeFile("test.txt","Hello World: My name is Anin Hassain ",function(err){
//     if(err) console.error(err);
//     else console.log("File written successfully");
// }   );

// fs.appendFile("test.txt","I am a student of CSE department",function(err){
//     if(err) console.error(err);
//     else console.log("File appended successfully"); 
// } );

// fs.rename("test.txt","newtest.txt",function(err){
//     if(err) console.error(err);
//     else console.log("File renamed successfully");
// } );

// fs.copyFile("newtest.txt","./copy/copy.txt",function(err){
//     if(err) console.error(err);
//     else console.log("File copied successfully");
// } );

// fs.unlink("./copy/copy.txt",function(err){
//     if(err) console.error(err);
//     else console.log("File deleted successfully");
// } );