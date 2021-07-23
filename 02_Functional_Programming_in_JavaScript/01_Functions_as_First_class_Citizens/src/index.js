function sayHello() {
    return "Hello World";
}
//function assigned to variable
let fn = sayHello;
fn();
sayHello();

//Passing function as arguments
function greet(fnMessage) {
    console.log(fnMessage());
}
greet(sayHello);

//returning function from function
function sayHi() {
    return function () {
        return "Hello World";
    };
}
let fm = sayHi();
let message = fm();//return string "Hello World"