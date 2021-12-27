// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Juyoung",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

// union type
type Combinable = string | number;
type Numeric = number | boolean;

// intersection type
type Univesal = Combinable & Numeric;

//Function oberload
function addHandler(a: number, b: number): number;
function addHandler(a: string, b: string): string;
function addHandler(a: string, b: number): string;
function addHandler(a: number, b: string): string;
function addHandler(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" && typeof b === "string") {
    console.log("value: string");
    return a.toString() + b.toString();
  } else {
    console.log(`value: number`);
    return +a + +b;
  }
}

console.log(addHandler(1, "2"));

const result = addHandler("choi ", "juyoung");
result.split(" ");
console.log(`Result: ${result[0]}`);

const fetchedUserDate = {
  id: "u1",
  name: "juyoung",
  job: { title: "developer", description: "hi" },
};
//Optional chaining
console.log(fetchedUserDate?.job?.title);

const userInput = "";
// null, '', undefind, 0 === default
const storedData = userInput || "DEFAULT";
//nullicy coalescing
// null, underfind === default
const storedDataV2 = userInput ?? `DEFAULT`;
console.log(`storedData: ${storedDataV2}`);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformationV2(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  // Intersection union type guard
  if (`privileges` in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  // Intersection union type guard
  if (`startDate` in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

printEmployeeInformationV2(e1);

printEmployeeInformationV2({ name: "JY", startDate: new Date() });

class Car {
  drive() {
    console.log(`Driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck....`);
  }

  loadCargo(amount: number) {
    console.log(`loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if (`loadCargo` in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 1000 });

// Type casting
// (!) not null 강조
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
const userInputElement = document.getElementById("user-input");

// userInputElement.value = `Hi there!`;

//checking type
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = `Hi there!`;
}

//index type
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

console.log(errorBag.email);
