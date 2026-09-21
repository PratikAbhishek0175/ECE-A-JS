// import http from "http";
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log("server created");
    res.end("Hello from server");
});
res.writeHead(200, { 
    "Content-Type": "text/plain",
    "custom-header": "ECE"
});
fs.readFile("config.json", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
if(req.url === "/"){
    res.end("Hello From Home Page");
} else if(req.url === "/about"){
    res.end("Hello From About Page");
} else if(req.url === "/contact"){
    res.end("Hello From Contact Page");
}
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
