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

```
for changing dynamic content,
use same method like props in react
and send that props as object in res.end() call
```
