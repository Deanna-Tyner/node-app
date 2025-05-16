const http = require('http');

const server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});

    response.write("Hello, this is our first node.js application");

    response.end();
});

const port = 3000;

server.listen(port);


console.log("Server running at port = " + port);