import http from 'http';
const server = http.createServer((req, res) => {
     console.log(req.url)
     console.log("Hello World")
    // res.end("Hello from server")
     if(req.url === "/"){
        res.end("Hello From Home Page");
    } else if(req.url === "/about"){
        res.end(" About Page"); 
    } else if(req.url === "/contact"){
        res.end("Contact Page");
    }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running...");
});
