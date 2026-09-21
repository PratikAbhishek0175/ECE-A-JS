const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/" || req.url === "/index.html") {
        filePath = "index.html";
    }
    else if (req.url === "/about.html") {
        filePath = "about.html";
    }
    else if (req.url === "/contact.html") {
        filePath = "contact.html";
    }
    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end("<h1>404 - Page Not Found</h1>");
        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/html"
            });
            res.end("<h1>500 - Server Error</h1>");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html",
            "custom-header": "HELLO ECE"
        });

        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});