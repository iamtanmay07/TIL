## adding 404 custom error page 
```express.js

app.get("./about/*", (req,res) => {
  res.render("404" , {
    errorcomment : "Opps page inside about page couldn't be found",    // this JS object 
  });
});

app.get("*", (req,res) => {
  res.render("404" , {
    errorcomment : "page couldn't be found",    // this JS object 
  });
});

// add {{errorcomment}} in the index.hbs or whatever you are running on server !! 
```

