abstract class Department {
  static fiscalYear = 2020;
  // private id: string
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract descibe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  descibe() {
    console.log(`IT Department = ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found");
  }

  set setLastReport(value: string) {
    if (!value) {
      throw new Error("Plese pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  descibe() {
    console.log(`Accounting Department = ID: ${this.id}`);
  }
}

const employee1 = Department.createEmployee("JY");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment(`d1`, ["Juyoung"]);

it.addEmployee("Max");
it.addEmployee("Dan");

// it.employees[2] = "New Name";

it.descibe();
it.name = "New Name";
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

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
