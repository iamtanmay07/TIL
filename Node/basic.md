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

```



