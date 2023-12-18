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



