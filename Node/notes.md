# Node JS 
- starting with definition : 

      Node.js is a javascript runtime built on chrome v8's js engine

      Node.js is a JavaScript running on the server
    
      Basically it is not a library nor any framework, it is just JavaScript running on the web server.

      NOde.js can handle multiple requests at a time.
  

- When to use Node.js : 

      I/O bound 
  
      Data Streaming Applications - facebook scroll, Netflix scroll ect. 
  
      Real Time Chat Applications - whatsapp


- REPL

      Read
      Eval
      Print
      Loop

      - to enter the REPL env you need to just enter "node" in the terminal
      - to exit the REPL env you ".exit" is used
      - basically hit ".help" to get all command info related to REPL

      1. JS expression
      2. Use variable
      3. Multiline code
      4. use (_) to get the last result
      5. we can use editor mode
  

- Creating New File using terminal
  
          type nul > index.js


### examples of REPL 
```
var x = 0;
do
  {
   x++;
   console.log(`my x value is ${x}`);
   }while(x < 5)

```

```
 _ is used for get the last result
```

```
.editor -> editormode
```

### Node.js Core modules 
- consider modules to be same as JavaScript Libraries,
- a set of functions that user want to include in the application
- Node.js has a set of built in modules which you can use without any further installation, basically they are inbuilt

### creating new file and writing in that 
```
// Node is used for the creating new file, reading that, writing in that too 
const fs = require("fs");

// creating new file and writing that 
fs.writeFileSync("read.txt", "Hello World");

// if you again use " writeFileSync " function for the read.txt and try to write new thing 
// instead of appending the new text, it will delete the previous thing and will 
// update the new text or thing basically overwrite !!! 

// to append the new text in "read.txt" you need to use another function called 
fs.appendFileSync("read.txt", " this data i want to append ! ");

// to read the data from the data 
const buff_data = fs.readFileSync("read.txt");
console.log(buff_data);

// this will print buffer data, which is not human readable, like this 
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 21 20 20 74 68 69 73 20
// 61 74 61 20 69 20 77 61 6e 74 20 74 6f 20 61 70 70 65 6e 64 20 21 20>

// node JS has additional data type which is BUFFER (not in javasxript)
// used to store binary data while reading from the file or receiving packet

// to access the given file in human readable form using 

const org_data = buff_data.toString();
console.log(org_data);  // this will print string 

// how to read the file directly without getting buffer data 
// we need to specify the encoding "utf8"
const ord_data = fs.readFileSync("read.txt", "utf8"); // this will directly return string


// rename the given file 
fs.renameSync("read.txt", "new_read.txt");

// how to delete the file

```
### Asynchronous Modules 

```
// Asynchronous Modules 

const fs = require("fs");
// fs.writeFile("read2.txt", "Hello There !! ");

// above will throw an error, because we need to use callback function 
// in the asynchronous modules 

fs.writeFile("read2.txt", "Hello there !! ", (err) => {
    console.log("File read2.txt is created");
});


// asynchronous is all about CALLBACKs 
// CALLBACK function will check the parameter that we have pass 
// here in this case that is ERROR err, if there is no error after
// creating the file then function will print 


// appending the data 
fs.appendFile("read2.txt", " SOmething is appended !" , 
    (err) => {
        console.log("appending completed !!");
    }
);

// how to read the file
// this is how you read the data
// need to pass two variables (parameters)
fs.readFile("read2.txt", "utf8",
 (err,dt) => {
    console.log(dt);
 }
);
```

### difference between Synchronous and Asynchronous Modules 
- in the asyn modules we need to pass CALLBACK function
  ```
        fs.writeFile("Filename", "content",
              (err)=>{
                    console.log("hello");
              }
        );
        console.log("I am outside");
  ```
``` output ->
      I am outside
      hello 
```
- Asynchronous me pehle saare bahar vaale run hote hai and jis kisime der ya time lagta hai vo baad me run hota hai
  
  <img width="435" alt="Screenshot 2023-12-18 at 8 19 44 PM" src="https://github.com/iamtanmay07/TIL/assets/96469706/9471e02f-07c7-48b4-ac2d-509c4e4741ee">

### Path Modules in Node.js 

```
const path = require("path");

```

### Exporting own modules 
```
// exporting this add to the other .js file
const add = (a,b) => {
      return a+b;
}

module.exports = add;
```
```
// importing that export module
const add = require("./fileName");
console.log(add(5,5));
```
- exporting multiple files 
```
const add = (a,b) => {
      return a+b;
}
const sub = (a,b) => {
      return a-b;
}

module.exports.add = add; // important thing to remember 
module.exports.sub = sub;
```
```
const operator = require("./oper");

console.log(oper.add(5,5));
console.log(oper.sub(5,5));
```
another way of importing is 
```
const { add, sub } = require("./oper");
```
another way of exporting multiple modules is 
```
module.exports = { add, sub, mult };
```

## NPM Modules 

- initialise npm with ``` npm init ```
- to intall the modules use npm i 'module name'
- for example to download 'chalk module', use  ```npm i chalk```
- chalk module will be add as dependency in the package.json file
```
const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.blue.underline("true")); // this is how we use chalk module

// email validator module
const res = validator.isEmail("tanmay9248@gmail.com");
// console.log(res);
console.log(res==1 ? chalk.blue.underline("true") : chalk.red("false"));
const res2 = validator.isEmail("tanmaypate.com");
console.log(res2==1 ? chalk.blue.underline("true") : chalk.red("false"));

```

## Nodemon in Node.js

**Global NPM Modules** -  We can access this global npm from any where in the project.

**Nodemon** - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- how to install nodemon or any other global variable
> npm i nodemon -global

or

> npm i nodemon -g

- command + c used for terminating nodemon.


## Module Wrappers
IIFE  - Immediately Invoked Function Expression 

# Node.js Web Server 
To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application
e.g lIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications.

Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

```
// The http.createServer() method includes request
// and response parameters which is supplied by Node.js.

// The request object can be used to get information 
// about the current HTTP request e.g. url, request header, and data.

// The response object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:


const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Helloo from the other side"); 
});


server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port number 8000"); // using the callback function 
});

```

**Dealing with URL**
> console.log(req.url); // this is used for fetching details of url
```
const http = require("http");

const server = http.createServer((req,res) => {
    // console.log(req.url); // this is used for fetching details of url
    if(req.url == "/") res.end("Helloo from the home side"); 
    else if(req.url == "/about") res.end("Hello from aboutUs side");
});


server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port number 8000"); // using the callback function 
});

```
```
res.writeHead(404, { "content-type" : "text-html"}); // used for custom message on the site when certain url hit 
res.end("404 error !!");
```
<img width="1279" alt="Screenshot 2023-12-20 at 4 52 58 PM" src="https://github.com/iamtanmay07/TIL/assets/96469706/e6e791b1-6867-4189-a2f0-14d61310424b">

## JSON 
- stands for JavaScript Object Notation
- JSON is lightweight format for storing and transporting data
- JSOn is often is used when data is sent from server

```
const fs = require("fs");
const { parse } = require("path");
const bioData = {
    name : "tanmay", 
    age : 26,
};

// console.log(bioData.age);

// Object to JSON - using stringify 

const jsonData = JSON.stringify(bioData); // converting object to json 
// console.log(jsonData); 

// output : {"name":"tanmay","age":26}
// you can see in the key we have double qouted value in json 
// while object doesn't have that 


// we cannot directly call json data like we used for object 
// i.e. console.log(jsonData.age);
// above line is wrong !! 

// JSON to Object - using parse

const objData = JSON.parse(jsonData);

// exporting given object as JSON data 

const jsonDt = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonDt, (err) => {
    console.log("JSON file is created");
});

// reading external json file 

fs.readFile("json1.json", "utf8", (err,data)=>{
    const org_data = parse(data);
    // console.log(org_data.name);
    // console.log(org_data.age);
    console.log("1 : ")
    console.log(data); 
    console.log(org_data);
})

```

## API 
```
const server = http.createServer((req,res) => {
      const apiData = fs.readFileSynk(`${__dirname}/UserApi/userapi.json`, "utf8");
      const objData = JSON.parse(apiData); // array of object data 
      
      if(req.url == "/") res.end("hello from homeside");
      else if...
      else if...
      else if...

});
```
## Events Modules 
built in modules, called 'Events',
where you can create- , fire- and listen- for your own events ( like onclick event and so on ) 

```
const EventEmitter = require("events");
const event = new EventEmitter(); // creating object of the class EventEmitter

// same as 
// const event = require("events");

// creating an event emitter instance and firing it only once 

event.on("sayMyName", () => {
    console.log("Cristiano Ronaldo !!!");
});

event.emit("sayMyName"); // this emitting our onw name event 
// that cause previously registered instances to be called, 
// so emitter must be after the registered instance  

// creating an event and registering couple of callbacks 

event.on("sayMyName", () => {
    console.log("Cristiano Ronaldo !!!");
});
event.on("sayMyName", () => {
    console.log("Siiiuuuuuu !!!");
});
event.on("sayMyName", () => {
    console.log("Belligoolllll !!!");
});
event.emit("sayMyName");

// Registering the event with callbacks 

event.on("checkPage" , (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "ok");

```

## Streams and Buffer 

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. 
In Node.js, there are four types of streams : 
( Streaming means listening to music or watching video in 'real time',instead of downloading a file to your computer and watching it later. )
- Readable - Stream which is used for read operation.
- Writable - Stream which is used for write operation.
- Duplex - Stream which can be used for both read and write operation.
- Transform - A type of duplex stream where the output is computed based on input.


Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are -
- data - This event is fired when there is data is available to read.
- end - This event is fired when there is no more data to read.
- error - This event is fired when there is any error receiving or writing data.
- finish - This event is fired when all the data has been flushed to underlying system

```
const fs = require("fs");
const http = require("http");

const server = http.createServer();

// Old method 

 server.on('request', (req, res) => {
     var fs = require("fs");
     fs.readFile("input.txt", "utf8" , (err, data) => {
         if(err) return console.error(err);
         else res.end(data.toString());
     });
 });

// Streaming Method 

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("input.txt"); // chunk by chunk read 

    rstream.on("data", (chunkData) => {
        res.write(chunkData);
    });

    rstream.on("end", () => {
        res.end();    // for ending
    })

    rstream.on("error", (err) => {
        console.log(err);
        res.end("file not found"); // in case of any error 
    });
});

server.listen(9000, "127.0.0.1", () => {
    console.log("listening to server on port 9000");
});
```

## Stream Pipes 

> stream.pipe(destination, {optional});
the method used to take a readable stream and connect it to a writeable stream.


```
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res); // cool 
```





