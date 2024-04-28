//  Variables
// let firstName; // Declaration
// firstName = "John"; // Initialization
// console.log(firstName); // Output: John

//  Scope
// function greet() {
//     let message = "Hello"; // Local scope
//     console.log(message);
// }
// greet(); // Output: Hello
// console.log(message); // Error: message is not defined

//  Hoisting
// console.log(age); // Output: undefined
// var age = 30;

// Data Types
// let name = "Alice"; // String
// let age = 25; // Number
// let isStudent = true; // Boolean
// let score = null; // Null
// let address; // Undefined
// let person = { name: "Bob", age: 30 }; // Object
// let fruits = ["Apple", "Banana", "Orange"]; // Array
// function greet() { console.log("Hello!"); } // Function


//  Function Declaration
// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 5)); // Output: 8

//  Function Expression
// let subtract = function(a, b) {
//     return a - b;
// };
// console.log(subtract(8, 3)); // Output: 5

//  Arrow Function
// let multiply = (a, b) => a * b;
// console.log(multiply(2, 4)); // Output: 8

//  Function Parameters and Arguments
// function greet(name) {
//     console.log("Hello, " + name);
// }
// greet("Alice"); // Output: Hello, Alice

//  Return Statement
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(4)); // Output: true

// Scope and Closures
// let x = 10;
// function outer() {
//     let y = 20;
//     function inner() {
//         console.log(x + y);
//     }
//     return inner;
// }
// let innerFunction = outer();
// innerFunction(); // Output: 30


// Real-Time Example: Task Management Application
// let tasks = [
//     { id: 1, title: "Finish report", priority: "High", status: "Incomplete" },
//     { id: 2, title: "Send email", priority: "Medium", status: "Complete" },
//     { id: 3, title: "Schedule meeting", priority: "Low", status: "Incomplete" }
// ];

// Filtering tasks based on priority
// let highPriorityTasks = tasks.filter(task => task.priority === "High");
// console.log(highPriorityTasks);

// Mapping tasks to titles
// let taskTitles = tasks.map(task => task.title);
// console.log(taskTitles);

// Summing up task IDs
// let totalTaskIds = tasks.reduce((total, task) => total + task.id, 0);
// console.log(totalTaskIds);


// Creating Objects
// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// Accessing Object Properties
// console.log(person.name); // Output: John
// console.log(person["age"]); // Output: 30

// Adding and Modifying Object Properties
// person.city = "New York";
// person.age = 35;

// Object Methods
// person.greet(); // Output: Hello!

// Object Destructuring
// let { name, age } = person;
// console.log(name, age); // Output: John 35

// Object Prototypes and Inheritance (Example omitted due to space limitations)

// Promise Creation
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         if (operationSucceeds) {
//             resolve(data);
//         } else {
//             reject(error);
//         }
//     });
// }

// Promise Chaining
// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// let day = "Monday";

// if-else Statement
// if (day === "Saturday" || day === "Sunday") {
//     console.log("It's a weekend!");
// } else {
//     console.log("It's a weekday.");
// }

// switch Statement
// switch (day) {
//     case "Monday":
//         console.log("It's Monday.");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday.");
//         break;
//     // Other cases...
//     default:
//         console.log("It's some other day.");
// }

// for Loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// while Loop
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }

//  do-while Loop
// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

// function syncTask() {
//     console.log("Task 1");
//     console.log("Task 2");
//     console.log("Task 3");
// }
// syncTask();

// function asyncTask() {
//     console.log("Task 1");
//     setTimeout(() => console.log("Task 2"), 2000); // Simulating a delay of 2 seconds
//     console.log("Task 3");
// }
// asyncTask();



// function fetchData(callback) {
//     setTimeout(() => {
//         let data = "Async data";
//         callback(data);
//     }, 2000);
// }

// function processData(data) {
//     console.log("Processing data:", data);
// }

// fetchData(processData);
