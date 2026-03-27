// Literal Types (Alternative to Enum)
let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

userRole = 'guess'
console.log(userRole)

function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
    function greet() {
        console.log(`Hello, ${role}`)
    } 
    greet()
}

access(userRole)