## MiddleWare 
Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of requests and responses within your applications

It does this at a global level significantly enhancing features like redirection, URL rewrites, authentication, headers and cookies management, and more.

Middleware allows us to specify paths where it will be active
- Custom matcher config
- Conditional statements.

### Method 1 : Custom Matcher Config 
```next.js
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: "/profile",
};

// here URL/profile will be redirect to the home page !!!
```

### Method 2 : Conditional Statement 
```next.js
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if(request.NextUrl.pathName  === "/profile" ){
      return NextResponse.redirect(new URL("/hello", request.url));
    }
}

// In this example URL/profile will be redirects to the URL/hello

// Important Note :
// If we use
NextResponse.rewrite(new URL("/hello", request.url))
// then URL shown will be URL/profile
// but content shown will be from hello Route !
```
