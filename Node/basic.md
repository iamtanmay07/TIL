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


  
