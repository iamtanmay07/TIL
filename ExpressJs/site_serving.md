## => Middleware - express.static()
> express.static(root, [options]);
```express.js
const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

// getting static path of site which we have to import
console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

// built in middleware
app.use(express.static(staticPath));

app.get("/" , (req,res) => {
    res.send("This is my Home Page");
});

app.listen(port, ()=> {
    console.log(`listening to ${port}`);
});
```
