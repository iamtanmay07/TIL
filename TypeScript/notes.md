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


**Optional Parameter**
```typescript
const sum(a:int, b:int, c?:int) : string => {
    if(c) return `sum is ${a+b+c}`
    else return  `sum is ${a+b}`
}

// optional parameters denoted by using ? after the parameter name!
```

## Arrays 
```typescript
In TypeScript, you can create and initialize arrays using various approaches
//      a) Using square brackets:
const numbers:number[] = [1,2,3,4,5];

//      b) Using the Array constructor:
const numbers2: number[] = new Array(1,2,3,4,5);

//      c) Using the Array.of method:
const names:string[] = Array.of("hello", "there", "!");


************* ITERATION *************

***** MAP method ********
The map method creates a new array by applying a provided function to each element of the original array.
It transforms each element and returns a new array with the transformed values.

// doubling the original array 
const updatedNumbers : number[] = numbers.map((curVal : number) => {
    curVal*2;
});

// converting numbers to the string
const numberToString : string[] = numbers.map((curval : number) => {
    curVal.toString();
});


******** FILTERING ********
// Filtering even numbers from the array

const evenArray : number[] = numbers.filter((curVal : number) => {
    curVal % 2 === 0;
});

// finding max element
const numbers : number[] = [1,2,3,4,5];
let sum : number = 0;
for(let curVal of numbers){ // yaha pe let karke declare karna hai 
    sum += curVal;
} 
const average : number = sum / numbers.length; // number in the typescript can be decimal

```

## Objects 
In TypeScript, objects are used to represent data with key-value pairs.
Each key in the object is a string (or a symbol in ES6) that maps to a value.

```typescript
const person = {
    name: 'Tamay Patel',
    age: 20,
    isStudent: true,
    address: {
        city: "Pune",
        country: 'India'
    ｝
}

// Todo Accessing the object data
console.log(person.address.country);

// updating the data
person.address.country = "USA";
// person.address.country = 1234; // this is wrong as address.country define as string and you are assgining number to the string


// how to declare an object along with its type
const person: {
    name: string;  // you need to use semi-colon here ( not comma ) 
    age: number; 
    isStudent: boolean;
    address: {city: string; country:string}
} = {
    name: "Tanmay Patel", // use comma here
    age: 20,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
}
```

## 

