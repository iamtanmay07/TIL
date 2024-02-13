## TypeScript
- browser can't run typescript, so eventually typescript code is converted to the JS only...
- Typescript is all about your static typing ! (we need to define type of everything)

<img width="794" alt="Screenshot 2024-02-10 at 1 14 59 PM" src="https://github.com/iamtanmay07/TIL/assets/96469706/3acc294c-76ef-4bc5-81fe-70b81c67a355">

### installing typescript
> npm i -g typescript

## RUN typescript 
> tcs index.ts

- this index.ts file is converted to the index.js file

- if there's error like "cannot redeclare scopped based variable" then just add `export {}` at the end of the code

## TS Configuration File : 
- when there is error in the typescript file, we dont want to create javascript file (in default way it is created and we can run that file obv)
```typescript
// run command
tsc --init
// then tsconfig.json file will be created and
// in that you need to un-comment the
// "noEmitOnError" part
// this is it !!
```

## functions 
```typescript
// defining function in the tsc 
function sum(a:number, b:number):number{
    return a+b;
}
console.log(sum(5,10));


// fat-arrow function 
const summ = (a:number, b:number):number => {
    return a+b;
}
```

## Type Annotations 
In TypeScript, type annotation is a way of explicitly
specifying the type of a variable, function parameter, or function return value.

Type annotations are expressed by using a colon (:) followed by the desired type after the variable or function parameter declaration. 
There can be a space after the colon.

<img width="967" alt="Screenshot 2024-02-14 at 12 17 16 AM" src="https://github.com/iamtanmay07/TIL/assets/96469706/d80113bb-c69d-4401-9276-3af721a121d7">

**what are advantages of type annotation**
- It helps the typescript compiler to enforce type checking and type safety during the development.


## Type Inference 

Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types to variables, expressions, and function return values based on their usage and context in the code.

*compiler apane aap bata dega type of any variable if it is not declare with tyep




