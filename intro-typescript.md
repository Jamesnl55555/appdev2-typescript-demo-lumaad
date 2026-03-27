# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

Based on my experience:
 - The purpose of this file shows that we can override the set data on the previous lines by making a new value inside the variable, however it would not override the data type because the data type would be set the first time the variable is made with a value or data type.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

Based on my experience:
 - The purpose of this file is to show what is the data type of a variable is by using typeof operator.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

Based on my experience:
 - The purpose of this file is to show that the variable can have its value be reassigned using the `any` type.

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

Based on my experience:
 - The purpose of this file is to show how to make objects

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

Based on my experience:
 - The purpose of this file is to show how to use enum

 ## 06-alternative-to-enum.ts

 Based on my experience:
 - The purpose of this file is to show the alternative of `enum`

 ## 07-custom-type-role.ts

  Based on my experience:
 - The purpose of this file is to show how to create a custom type, usually we have data type such as boolean, number, or string. Now, we can create our own type and we can use it on objects.

## 08-functions.ts

Based on my experience:
 to create - The purpose of this file is to show how to create functions, they functions can call functions, and objects can call functions too. We can also put it on void so as to return nothing, and type `error` so that it would return with error.

## 09-special-types.ts

Based on my experience:
 - The purpose of this file is to show how to use the special types such as null and undefined, we could even make a variable have two types using '|'

## 10-form.html and 10-type-narrowing.ts

Based on my experience:
 - The purpose of this file is to show how to get the access the input of the user without having errors such as using '!, ?' and 'as HTMLInputElement | null' to ensure that there is value in the input
