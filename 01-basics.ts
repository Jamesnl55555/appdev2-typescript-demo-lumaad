// console.log("Hello World!")

let userName: string = "Elmer";
let userAge = 31;

// I reassign the values wiht mine
userName = "Jimmy"
userAge = 1

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
// The commented out line above is the function with a string parameter, but it will return error since what's in the parameter is a string

add(10, 6)
// add(10, '6')
// The commented out line above is the function with a string parameter, but it will return error too since what's in the second parameter is a string

console.log(add(10))
//this has a return value of 15 since we have 2 parameters
//we only have 1 value in this one but it will add the second parameter in the function to this one

console.log(add(10, 6))
//this will return 16 since these 2 parameters override the dataset in the function