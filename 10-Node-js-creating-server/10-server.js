const http = require('http');
const router = require("./router/application");

const hostname = '127.0.0.1';
const port = 5000;

// to create Server
const server = http.createServer((request, response) => {
   response.writeHead(200, {
       'Content-Type' : 'text/html'
   });

   // application routing
   router.mapRoutes(request, response);
});

// to start Server
server.listen(port, hostname, () => {
    console.log(`Node JS Server is Started at http://${hostname}:${port}`);
});

/*
    NOTE :-  Once you have run your Server & if you are wanted to Change something , not only the code but a Single
             Space too then, You have to restart the server to run with its new change...

             ------   Command to Restart Server is :==>  {ctrl + c}   --------
*/
