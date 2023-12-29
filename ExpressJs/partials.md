# partials in express 
Partials, the best way to reuse code in your Handlebars project, sometimes we want to use one piece of code in all our pages, but we tend to copy and paste the same code again and again but with partials we actually called the partial and that is all.
>directory structure - templates folder contain (views and partials)

step 1 : 
>make partials directory

step 2 :
>const hbs = require("hbs");

step 3 : 
>hbs.partialsRegister(partialFolderPath);

- implementing partials of handlebars in .hbs file 
> {{>header}}

Above one shows header.hbs partial file to be added in the given file 

