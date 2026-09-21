console.log("start");
setTimeout(() => {
    console.log(`Hello, world!`);
}, 1000);
Promise.resolve().then(() => {
    console.log("Promise resolved");
});
console.log("end");