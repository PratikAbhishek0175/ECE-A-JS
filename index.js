console.log("Hello, World!");




let a = 5;
let b = 10;
console.log("Before swapping:",a,b);
[a,b] = [b,a];
console.log("After swapping:",a,b);


void function greet(world) {
    console.log(`Hello, ${world}!`);
}("World");


function greet(world) {
    setTimeout(() => {
        console.log(`Hello, ${world}!`);
    }, 1000);
}
greet("World");