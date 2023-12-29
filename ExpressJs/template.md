# Template Engines in ExpressJs (pug, EJS, hbs) 
- used to serve dynamic data changes.
- There are many template engines like pug, EJS, moustache etc...
- Handlebars are the extension of the moustache and it is easier one.
- We need 'hbs' engine for habdlebars

> How to install handlebars : npm i hbs

To render template files, set the following application setting properties, set in app. js in the default app created by the generator:
• views, the directory where the template files are located. Eg: app.set ('views', ./views'). This defaults to the views directory in the application root directory.<br>
• view engine, the template engine to use. For example, to use the Pug template engine: app.set ('view engine', 'pug').

- there must be a `view` folder in the directory.
- Inside `view` folder, create `index.hbs` file.
- Now in the index.hbs write all the html code
- next step is pretty same as sharing dynamic site in express.

```express.js

// to set the view engine
app.set("view engine", "hbs");
app.use(express.static("staticPathofThatFile");

// in the app.get() fn, we need to use .render()
app.get("/", (req,res) =>{
  res.render("index"); // view engine automatically finds the index.hbs file in the view directory and returns that 
};

// extra Note - 
// for changing dynamic content,
// use same method like props in react
// and send that props as object in res.end() call
```

## customizing VIEWs directory 
```express.js
// To change the file name from "view" to something else
// use "views" function
// let suppose we have change "view" directory name to "template"
const templatePath = path.join("__dirnam, "../template");

// using "views"
app.set("views" , templatePath);
```
```
// what if user looking for "about" page
app.get("/", (req,res) => {
  res.render("index");
});
app.get("/about", (req,res) => {
  res.render("about");
});
// as simple as that
```














