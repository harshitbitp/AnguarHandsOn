"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(id, name, salary, permanent, dept, skill) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
        this.dept = dept;
        this.skill = skill;
    }
    EmployeeTest.prototype.display = function () {
        console.log("id:" + res.id);
        console.log("name:" + res.name);
        console.log("salary:" + res.salary);
        console.log("permanent:" + res.permanent);
        console.log("department id:" + res.dept.department_id);
        console.log("department name:" + res.dept.department_name);
        console.log("skill[0]: " + res.skill[0].id + "," + res.skill[0].name);
        console.log("skill[1]: " + res.skill[1].id + "," + res.skill[1].name);
        console.log("skill[2]: " + res.skill[2].id + "," + res.skill[2].name);
    };
    return EmployeeTest;
}());
var res;
res = {
    id: 3,
    name: "John",
    salary: 5000,
    permanent: true,
    dept: {
        department_id: 1,
        department_name: 'payroll'
    },
    skill: [{
            id: 1,
            name: "HTML"
        }, {
            id: 2,
            name: "CSS"
        }, {
            id: 3,
            name: "JAVASCRIPT"
        }]
};
var details = new EmployeeTest(res.id, res.name, res.salary, res.permanent, res.dept, res.skill);
details.display();
/*console.log("id:"+res.id);
console.log("name:"+res.name);
console.log("salary:"+res.salary);
console.log("permanent:"+res.permanent);
console.log("department id:"+res.dept.department_id);
console.log("department name:"+res.dept.department_name);
console.log("skill[0]: "+res.skill[0].id+","+res.skill[0].name);
console.log("skill[1]: "+res.skill[1].id+","+res.skill[1].name);
console.log("skill[2]: "+res.skill[2].id+","+res.skill[2].name);*/ 
