"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string
        // private name: string;
        this.employees = [];
        // this.id = id
        // this.name = name;
    }
    Department.prototype.descibe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accouting = new Department("d1", "Accounting");
accouting.addEmployee("Max");
accouting.addEmployee("Juyoung");
// accouting.employees[2] = "New Name";
accouting.descibe();
accouting.name = "New Name";
accouting.printEmployeeInformation();
