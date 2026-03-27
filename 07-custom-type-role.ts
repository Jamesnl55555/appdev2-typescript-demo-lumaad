(()=> {
    
// Type Aliases or Custom Types
// use `type` keyword to create custom type
type Role = 'admin' | 'guess' | 'teacher' | 'student' | 'superadmin'

// Complex Object Type Definition

type Permission = 'read' | 'write' | 'delete'

type User = {
    name: string;
    age: number;
    role: Role; // you can use as well the Role type in Object type
    permission: Permission;
}

let permission: Permission = 'read'
let userRole: Role = 'admin'

let user2: User = {
    name: 'Jimmy Lumaad',
    age: 21,
    role: userRole,
    permission: permission
}

function access(role: Role) {
    function greet() {
        console.log(`Hello, ${role}`)
    }
    greet()
}
access(userRole)

console.log(user2)

})