function mainFunc(params) {
    document.getElementById('container').innerHTML = params;
}

function f1() {
    mainFunc('<h3><i>Hello</i></h3>');
}

function f2(){
    mainFunc('<h3><i>world</i></h3>');
}

//f1();
//f2();

console.log("hello");
console.log("World");

setTimeout(()=> {
    console.log("setTimeOut asychronus function always run last");
},1000);

console.log("its work before setTimeOut");