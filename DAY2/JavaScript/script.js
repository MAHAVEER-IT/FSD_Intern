/*console.log("Hello World");

// Variable declaration
var name = "John"; // var is function-scoped

let age = 30; // let is block-scoped

const pi = 3.14; // const is block-scoped and cannot be reassigned

console.log("Name: ",name,"Age: ", age,"Pi value: ",  pi);


// ---------- Variable Declaration Types ----------

// -------- var --------
// in var declaration, if we declare a variable with the same name again, it will not throw an error
var n1 = 10;
var n1 = 20; // This will not throw an error
console.log("n1: ", n1); // Output: 20


// -------- let --------
// in let declaration, if we declare a variable with the same name again, it will throw an error
let n2 = 10;
// let n2 = 20; // This will throw an error: Identifier 'n2' has already been declared
console.log("n2: ", n2); // Output: 10

// -------- const --------
// in const declaration, if we declare a variable with the same name again, it will throw an error
const n3 = 10;
n3 = 20; // This will throw an error: Assignment to constant variable.
//const n4;  // This will throw an error: Missing initializer in const declaration
console.log("n3: ", n3);
*/


/*

// ---- Looping ----

// for loop
for (let i = 0; i < 5; i++) {
    console.log("for Index: ", i);
} 

// infinite for loop

// for (;;) {
//     console.log(a);
// }

 
// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop Index: ", j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log("Do-While Loop Index: ", k);
    k++;
}while (k < 5);

// forEach loop

let arr = [1, 2, 3, 4, 5];
arr.forEach(  element => {
    console.log("ForEach Loop Element: ", element);
})

// for...of loop
for (let element of arr) {
    console.log("For...of Loop Element: ", element);
}

*/


/*
// ---- objects ----
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log("Person Name: ", person.name, "Age: ", person.age, "Greet: ", person.greet());
person.age = 20; // Updating the age property
console.log("Person Object: ", person);
*/

/*
// ---- conditional statements ----
let num = 18;

if (num > 18 || num === 18) {
    console.log("You are an adult");
}else if(num === 0){
    console.log("You are not born yet");
}else{
    console.log("You are not an adult");
}
*/

// ---- DOM - document object model ----

document.getElementById("heading1").innerHTML = "<i>Hello JavaScript<i>"; // This will change the text of the element with id "heading1" to "Hello JavaScript"
document.getElementById("heading1").style.color = "blue"; // This will change the color of the text to blue

let data = document.getElementById("data").innerHTML = "<strong> DOM practice </strong>"; // This will get the text of the element with id "pa"
console.log("Data from paragraph: ", data);

document.getElementsByClassName("Classdata")[0].innerHTML = "<strong> Class data </strong>"; // This will change the text of the first element with class "Classdata" to "Class data"

let  classData = document.getElementsByClassName("Classdata");

console.log("Class data: ", classData[1].innerHTML);

document.getElementsByTagName('p')[2].innerHTML = `<h3> The content from getElementsByTagName </h3>`;

let para = document.createElement('p');
para.innerHTML = "Create a new Element tag from the Dom and Apppend it";

document.getElementById('container').appendChild(para); // it will append it

document.getElementById('container').removeChild(para); // it will remove the added element

let container = document.getElementById('container1');

container.style.color = 'White';
container.style.backgroundColor = 'black';
container.style.fontSize = '30px';


container.classList.add('divtag');

document.querySelector('.query').innerHTML = `<i> Hello from QuerySelector </i>`

let items = document.querySelectorAll('.items');

items.forEach(element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'red';
});