# NextJS 
The React Framework for Production !!! 
## why ? 
- better SEO (on inspecting it provides whole HTML code unlike React which provides only tags)
- better UX
- file based routing (no need to use raect-router-dom)
- support for each page css
- image optimization
- API Route
- Typescript Support, Fast Refresh !
  
## Installation
> npx create-next-app@latest
- you have to choose typescript, tailwind
> npm run dev

## Folder Structure ( very IMP ) 
- package.json : contains dependecies
- .next folder : created when we run dev, and it serves the nextJS application (it is gitignore folder)
- node modules : all dependencies presents


- public folder : contains static assets to be served such as images and SVGs

- Most Important Folder - SRC folder initally contains app folder
 also contains pages.tsx and layout.tsx

- When we hit the npm run dev, command transfer to the layout.tsx and then and goes to RootLayout component rendered, which runs the `children` component and which again referred to the pages.tsx file which is `Home` component.

## React Server Components 
- React Server Components is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js
The architecture introduces a new way of creating React components, splitting them into two types:
1. Server components
2. Client components.



