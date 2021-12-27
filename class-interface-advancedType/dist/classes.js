"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.descibe = function () {
        console.log("IT Department = ID: ".concat(this.id));
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    Object.defineProperty(AccountingDepartment.prototype, "getLastReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report found");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "setLastReport", {
        set: function (value) {
            if (!value) {
                throw new Error("Plese pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.descibe = function () {
        console.log("Accounting Department = ID: ".concat(this.id));
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("JY");
console.log(employee1);
console.log(Department.fiscalYear);
var it = new ITDepartment("d1", ["Juyoung"]);
it.addEmployee("Max");
it.addEmployee("Dan");
// it.employees[2] = "New Name";
it.descibe();
it.name = "New Name";
it.printEmployeeInformation();
console.log(it);
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
accounting.setLastReport = "Year End Report";
accounting.addReport("Something went wrong...");
accounting.addReport("Something went wrong...2");
console.log(accounting.getLastReport);
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Juyoung");
accounting.printEmployeeInformation();
accounting.descibe();
console.log(accounting, accounting2);
