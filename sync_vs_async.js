console.log("===== Sychronous Start =====");
for(let i=0; i<10; i++){
    console.log(`${i}`);
}
console.log("===== Sychronous End =====");

console.log("===== Asychronous Start =====");
setTimeout(()=>{
    console.log("Hello world");
}, 1000);
console.log("===== Asychronous End =====");