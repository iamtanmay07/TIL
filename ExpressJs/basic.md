# EXPRESS.JS 
It is framework of node.js <br>
Express.js is web application framework which provides simple api to build websites

```express.js
const express = require("express");
const app = express();

// get - read
// post - create 
// put - update
// delete - to delete

// app.get(route, callback);
// in callback function we pass (request, result) 

// this is routing too 
app.get("/" , (req, res) => {
    res.send("hello from server side !");
});
app.get("/about", (req, res) => {
    res.end("cannot get ABOUT");
});
app.listen(8000, () => {
    console.log("listening at port 8000");
});
```
The callback function has 2 parameters, request(req) and response(res).
The request object(req) represents the HTTP request and has properties 
for the request query string, parameters, body,HTTP headers, etc.

Similarly, the response object represents the HTTP response that 
the Express app sends when it receives an HTTP request.

## sending HTML or JSON file 
```express.js
app.get("./" , (req,res) => {
  // to send a single data - use send
  app.send("<h1> This is home page </h1>");

  // to send multiple lines - we use write 
  app.write("<h1> This is home page </h1>");
  app.write("<h1> This is again home page </h1>");
  app.send(); // need to use when ur using .write
});
```
to sending json files, you can pass js objects with .send function 
or just use .json function for same. 


