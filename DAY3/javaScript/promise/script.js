
// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

/*let check = new Promise((reslove,reject)=>{
    let num = 10;
    if(num % 2 == 0){
        reslove("Number is even");
    }else{
        reject("Number is odd");
    }
});

check.then((message)=>{
    console.log("then method: ",message);
}).catch((message)=>{
    console.log("catch method: ",message);
}).finally(()=>{
    console.log("Promise is completed");
});

console.log("Promise Object: ",check)*/


// 1. Pending: Initial state, neither fulfilled nor rejected.

/*let over = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Time Out")
    },10);
});

over.then((message)=>{
    console.log("then method: ",message);
}).catch((message)=>{
    console.log("catch method: ",message);
});

console.log("Promise Object: ",over);
*/

// Promise Chaining


/*function waterBoiling() {
    console.log("Boiling water...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water boiled.");
            resolve();
        }, 1000);
    });
}

function addTeaLeaves() {
    console.log("Adding tea leaves...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tea leaves added.");
            resolve();
        }, 1000);
    });
}

function addMilk() {
    console.log("Adding milk...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Milk added.");
            resolve();
        }, 1000);
    });
}

function addSugar() {
    console.log("Adding sugar...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sugar added.");
            resolve();
        }, 1000);
    });
}

// Run:
waterBoiling()
  .then(addTeaLeaves)
  .then(addMilk)
  .then(addSugar)
  .then(() => {
      console.log("Tea is ready!");
  });

*/

// Async/Await Example
// async - A function declared with the async keyword always returns a promise.
// await - The await keyword can only be used inside an async function. It pauses the execution

/*
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function process(){
    console.log("Process 1 started");
    await delay(1000);
    console.log("Process 1 completed");
    console.log("--------------------");

    console.log("Process 2 started");
    await delay(2000);
    console.log("Process 2 completed");
    console.log("--------------------");

    console.log("Process 3 started");
    await delay(3000);
    console.log("Process 3 completed");
    console.log("--------------------");
}

process().then(() => {
    console.log("All processes completed");
}).catch((error) => {
    console.error("An error occurred:", error);
});
*/

// fetch API Example

async function getData(id){
   

    for(let i = 1; i <= id; i++){

    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    let data = await res.json();
    console.log("Response: ",data);

        document.getElementById("data").innerHTML += `
            <strong>ID:</strong> ${data.id} <br>
            <strong>Title:</strong> ${data.title} <br>
            <strong>Completed:</strong> ${data.completed} <br>
            <hr>
        `;
    }
}

function getUser() {
    let id = document.getElementById("id").value;
    getData(id);
}

// closures in js

function OuterFunction() {
    let count = 0;
    function InnnerFunction() {
        count++;
        console.log(count);
    }
    return InnnerFunction;
}

let f = OuterFunction();

f();
f();
f();
f();
