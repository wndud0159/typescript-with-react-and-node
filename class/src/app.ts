class Department {
  // private id: string
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = name;
  }

  descibe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accouting = new Department(`d1`, `Accounting`);

accouting.addEmployee("Max");
accouting.addEmployee("Juyoung");

// accouting.employees[2] = "New Name";

accouting.descibe();
accouting.name = "New Name";
accouting.printEmployeeInformation();
