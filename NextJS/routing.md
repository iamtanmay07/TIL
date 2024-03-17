- NextJS uses file structure based Routing !! 

### Server Components
- In Next.js, all components are Server components by default
- They have the ability to run tasks like reading files or fetching data from a
database
- However, they don't have the ability to use hooks or handle user interactions.
### Clients Components 
- To create a Client component, it's necessary to add "use client" at the top of the component file
- Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions
- These are traditional react components which we are familiar with.

## Routing in NEXTjs
    Some Rules to follow : 
    - All the Routes must be placed inside app folder 
    - Every file that is corresponds to route must be named page.tsx
    - Every folder corresponds to a path segment in the browser URL
- NextJS automatically creates the layout.tsx file in the app folder

**More about layout.tsx**

1. First Scenario - default home page ( site will be serve from page.tsx of the app folder)

2. Second Scenario - in the app file we have folder name as about and the profile and in that directory their respective page.tsx is present
<img width="360" alt="Screenshot 2024-03-17 at 2 38 32 AM" src="https://github.com/iamtanmay07/TIL/assets/96469706/77846515-acc3-4dad-8f34-3a98be432011">
<br> `Routes are associates with a file containing a folders name within the app folder.`
here page.tsx of the about folder maps about it and same as profile folder.

3. Nested Routes Case
<img width="377" alt="Screenshot 2024-03-17 at 2 55 28 AM" src="https://github.com/iamtanmay07/TIL/assets/96469706/40987bf0-51af-4c79-a53e-dc6d24b6f4cb">
<br>

**Dynamic Routes** 
Creating folders is not feasible so we use dynamic routes. 
> [productId]
- this is folder inside product folder !


### catch all segments 
(skipping this time)

### 404 not found page 
for creating custom not found page follow this steps 
```
1. create `not-found.tsx` file
2. write content for not found page, TADOWW !

** you can also use not found page for some conditions also, like product list greater then 100 then display 404 page and you can achieve this by just calling NotFound function that you have build in the not-found.tsx file.
```


## How to group Routes ?? 
- For a case of authentication, you need to create register, forgot-password and login route. 
- Now what happens is new developer dont know about this multiple routes works for a single authentication so we group these routes in auth folder.
- To ommit the auth folder from the URL, we use parenthesis around name of auth folder "(auth)" 
> (auth)

## navigating using link component : 
```next.js
import Link from "next/link"

<Link href = "/blog"> Go To Blog Page </Link>

// IMP - replace prop in the Link tag
<Link href="/product/1" replace> Product i </Link>

// on clicking back it leads us to the history state of its parent !
```

## Navigate to home page 
- this is achieve by using useRouter hookState in the nextJS
- also add "use client" on the top because useRouter is client side component !!
```next.js
"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/") // on clicking button, page will redirect to the home page !! 
    }

    return(
    <>
        <h1>0rder product</h1>
        <button onClick={handleClick}>Place order</button>
    </>
    )
}
```
