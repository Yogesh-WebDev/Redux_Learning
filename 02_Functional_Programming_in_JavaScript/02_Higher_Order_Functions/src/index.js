
function greet(fnMessage) {
    console.log(fnMessage());
}
greet(sayHello);

function sayHello() {
    return function () {
        return "Hello World";
    };
}
//High order functions are the function which are take functuon as argument or return functon from function

let numbers = [1, 2, 3];
numbers.map(num => num * 2);

setTimeout(() => console.log("sayHello"), 1000);