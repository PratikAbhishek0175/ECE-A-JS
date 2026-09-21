import http from 'http';
const server = http.createServer((req, res) => {
    console.log("Hello World")
    const order ={
        id: 1,
        name: "Pizza",
        price: 100,
        dest: "Delhi"
    }
    res.writeHead(200, {
        "Content-Type": "application/json",
        "custom-header": "Hello ECE"
    });
    res.end(JSON.stringify(order))
})
server.listen(3000, "127.0.0.1", () =>{
    console.log("Server is running..."); 
})