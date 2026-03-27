(() => {
    console.log('Hello World!')
    
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.SuperAdmin;

    let user = {
        name: 'Elmer',
        age: 31,
        role: userRole
    };

    console.log(userRole)

    console.log(user)
})