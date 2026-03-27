// Special Type - null
let a: null;

a = null
// a = "Hi"
console.log(a)
let b: null | string | number

b = null
b = "Hi"
b = 10

console.log(b)

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hi"

let d: undefined | string

d = undefined
d = "Hi"
// d = null
// d = 10
console.log(d)