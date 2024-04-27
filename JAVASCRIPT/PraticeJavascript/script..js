// var n = 5;
// var n = 5; same variableName  can be declared multiple times

// let n =5;
// let n =5;In let can use the same variableName in same block,in different block 

// const n =10;
// console.log(n);
// {
//     const n = 20;
//     console.log(n); in same block also const is fixed in different block const same variable can changed


// function sum(x,y){
//     return x+y;   normal function
// }
// var number = sum(20,30);
// console.log(number);

// x = (z,y)=>{
//     return z+y;    arrow function
// }
// var number = x(10,20);
// console.log(number)


// display = (numb)=>{
//     console.log(numb)   callback function
// }

// num = (x,y,callback)=>{
//     n = x+y;
//     callback(n);
// }

// var z = num(10,20,display);
// console.log(z);

// var n = 0          event onclick function
// function count(){
//     n += 1
//     document.getElementById('increment').innerHTML = n;
// }

// var str = "hi im there";
// var n = str.length;
// n = str.charAt(1);
// n = str.charAt(0).toUpperCase();
// n = str.slice(1,str.length);
// n = str.at(1);
// console.log(n)


// let arr = new Array();
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);
// arr.push(60);
// arr.pop(60);

// // arr.at(1);
// // n = arr.length;
// // console.log(n);

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.delete(10);

// let value = 10;
// let value1 = 20;
// console.log(value+value1);//arithmetic operators

// let isGreater = value > value1;
// console.log(isGreater);//comparsion operators

// let isEqual = value == value1;
// {
//     let isEqual = value === value1;
// }

// let result  = true && false;//logical operators


// let isUserLoggedIn = true;
// let userRole = "admin";

//conditional statments

// if (isUserLoggedIn) {
//     if (userRole === "admin") {
//         console.log("Welcome, admin!");
//     } else if (userRole === "user") {
//         console.log("Welcome, user!");
//     } else {
//         console.log("Unknown user role");
//     }
// } else {
//     console.log("Please log in to access the site");
// }

// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("It's Monday");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday");
//         break;
//     default:
//         console.log("It's another day");
// }

// let isLogged = true;

// let message = isLogged ? "User is logged in" : "User is not logged in";
// console.log(message);

// Callback Example
// function fetchData(callback) {
//     setTimeout(function() {
//         callback("Data fetched");
//     }, 2000);
// }

// fetchData(function(data) {
//     console.log(data); 
// });

// Promise Example
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 2000);
//     });
// }

// fetchData().then(data => {
//     console.log(data); 
// });

//synchronous
// console.log("Start");
// console.log("Middle");
// console.log("End");


// asynchronous
// console.log("Start");

// setTimeout(() => {
//     console.log("Async operation complete");
// }, 2000);

// console.log("End");

