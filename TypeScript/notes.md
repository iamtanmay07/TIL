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

## Type Alias 
In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. 
Type aliases provide better readability, organization, and abstraction of complex types.

To define a type alias, you use the type keyword followed by the alias name and the type definition:
```typescript
type PersonData = {
    name : string;
    age : number;
    address : {
        city : string;
        country : string;
    }
}

const person1 : PersonData = {
    name : "Tanmay",
    age : 20,
    address : {
        city : "Raipur",
        country : "India"
    }
}
const person2 : PersonData = {
    name : "Nav",
    age : 20,
    address : {
        city : "Raipur",
        country : "India"
    }
}

// attribute of class can be optional too ( just need to add ? at end :/ )

```

## Method Call Signature ( *IMP ) 
The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.

Lets add one function inside the object. It's more like creating a method in object

Very Important call signatures are typically used inside object type notations to describe the shape of functions within object types.

```typescript
type Student = {
    name : string;
    age : number;
    gender?:"string"; // optional 
    greet : (country : string) => string;  // this is method call signature !! 
    // (country : string) : string // this is pure call signature ! 
    // and you can acces above one with just object_name.(country : "India");
}

const std1 : Student = {
    name : "Tanmay",
    age : 20,
    greet : (country : string) : string => {
        return `My name is ${std1.name} and my age is ${std1.age} and I am from ${country}`;
    }
}

console.log(std1.greet("India"));
```

## Enums 
Enums in TypeScript are commonly used when you want to represent a set of related values
and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

In TypeScript, when enum constants are not explicitly assigned numeric values, they are
automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

```typescript
// declaring enum 
enum Roles {
    user = "user",
    admin = "admin"
}

type Student = {
    name?:string;
    email:string;
    password:string;
    role : Roles
}

const user1 : Student = {
    email : "hello@gmail.com",
    password:"user1",
    role : Roles.user
}

const user2 : Student = {
    name : "tanmay",
    email : "tanmy@gmail.com",
    password : "1234",
    role : Roles.admin
}

const check = (user : Student) : void => {
    const {email,password, role} = user;
    (role == "user") ? console.log(`you are just user to site`) : console.log("you'r allowed to edit site");
}
check(user1);
check(user2);
```

## Tuples 


