"use strict";
(() => {
    console.log('Hello World!');
    let Role;
    (function (Role) {
        // SuperAdmin,
        // SuperAdmin = 1,
        Role["SuperAdmin"] = "SuperAdmin";
        // Teacher,
        Role["Teacher"] = "Teacher";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    // let userRole: Role = 0;
    let userRole = Role.SuperAdmin;
    let user = {
        name: 'Elmer',
        age: 31,
        role: userRole
    };
    console.log(userRole);
    console.log(user);
})();
