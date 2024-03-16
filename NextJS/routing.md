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

