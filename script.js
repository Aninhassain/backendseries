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
// const fs = require('node:fs');
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


// HTTP 
// const http = require('node:http');
// const server = http.createServer(function(req,res){
//     res.end("Hello World");
// });
// server.listen(3000);
// console.log("Server listening on port 3000");
// defintion of http : http stands for hypertext transfer protocol. It is a protocol used for communication between a client and a server. It is the foundation of data communication on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. When you enter a URL in your browser, it sends an HTTP request to the server, which then responds with the requested resource (such as a web page) or an error message if the resource cannot be found.


// npm 
//  node package manager is a package manager for nodejs that allows you to install and manage packages (libraries) that you can use in your nodejs applications. You can install packages using the command line and use them in your code by requiring them. It also allows you to manage dependencies, scripts, and versioning of your project. It is an essential tool for any nodejs developer.

//  package vs module : a package is a collection of modules that are bundled together and can be installed using npm. A module is a single file or a collection of files that can be imported and used in your code. A package can contain multiple modules, and it can also have its own dependencies, scripts, and versioning. In summary, a package is a higher-level concept that encompasses one or more modules, while a module is a lower-level concept that represents a single unit of functionality.

// scripts and custom scripts : scripts are commands that you can run using npm. They are defined in the package.json file under the "scripts" section. You can define custom scripts to automate tasks such as building your project, running tests, or starting a development server. For example, you can define a script called "start" that runs your server, and then you can run it using the command "npm start". Custom scripts can be used to simplify your workflow and make it easier to run common tasks with a single command.

// Express.js: is a framework that handles all request and response of the server. It is built on top of the http module and provides a more convenient and powerful way to build web applications. It allows you to define routes, handle middleware, and manage the flow of your application in a more organized way. It also has a large ecosystem of plugins and extensions that can be used to add additional functionality to your application. Express.js is widely used for building web applications and APIs in Node.js.

//Routes : are used to define the endpoints of your application. They specify how the server should respond to different HTTP requests (GET, POST, PUT, DELETE, etc.) at specific URLs. For example, you can define a route for the URL "/users" that responds to GET requests by returning a list of users, and responds to POST requests by creating a new user. Routes are an essential part of building web applications and APIs, as they allow you to define the structure and behavior of your application.

// creating an route in express.js
const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send("This is slash route");
});
app.get('/profile',function(req,res){
    res.send("My name is Anin Hassain");
});
app.listen(3000);