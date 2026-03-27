let hobbies = ["Eating", "Watching"]

// hobbies.push(10)
console.log(hobbies)
console.log('===============================================')
hobbies.push("Sleeping")
console.log('added sleeping in hobbies array')
console.log(hobbies)
console.log('===============================================')

// let userList: (string | number)[];
// The comment above is an alternative to the line below
let userList: Array<string | number>;

userList = ["Elmer", "Elmer123", 123456]

console.log('This is the user list array: ')
console.log(userList)
console.log('===============================================')


let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Elmer",
    age: 31,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}
console.log('This is the user object: ')
console.log(user)
console.log('===============================================')
console.log('I replace the data inside the object: ')
user.name = "Jimmy"
user.age = 20
user.role.description = 'Student'
console.log(user)
console.log('===============================================')

// Must not null or undefined
// This would return an error if the value is null, example comment below:
// let val: string = null

let val: {} = "Jimmy Lumaad"
console.log(val)

console.log('===============================================')
// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    id: 1,
    name: 'Jimmy Lumaad',
    age: 21
    // The comment below would return an error because the value is not the same type as the types that are set
    // isPartTimeInstructor: true
}

console.log('This is the data object: ', data)