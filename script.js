// alert("hello world");
// Arrays in js
var arr = [1, 2, 3, 4, 5];
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
