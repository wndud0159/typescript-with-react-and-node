"use strict";
// type Admin = {
//   name: string;
//   privileges: string[];
// };
var _a;
var e1 = {
    name: "Juyoung",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
function addHandler(a, b) {
    // type guard
    if (typeof a === "string" && typeof b === "string") {
        console.log("value: string");
        return a.toString() + b.toString();
    }
    else {
        console.log("value: number");
        return +a + +b;
    }
}
console.log(addHandler(1, "2"));
var result = addHandler("choi ", "juyoung");
result.split(" ");
console.log("Result: ".concat(result[0]));
var fetchedUserDate = {
    id: "u1",
    name: "juyoung",
    job: { title: "developer", description: "hi" },
};
//Optional chaining
console.log((_a = fetchedUserDate === null || fetchedUserDate === void 0 ? void 0 : fetchedUserDate.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = "";
// null, '', undefind, 0 === default
var storedData = userInput || "DEFAULT";
//nullicy coalescing
// null, underfind === default
var storedDataV2 = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log("storedData: ".concat(storedDataV2));
function printEmployeeInformationV2(employee) {
    console.log("Name: ".concat(employee.name));
    // Intersection union type guard
    if ("privileges" in employee) {
        console.log("Privileges: ".concat(employee.privileges));
    }
    // Intersection union type guard
    if ("startDate" in employee) {
        console.log("Start Date: ".concat(employee.startDate));
    }
}
printEmployeeInformationV2(e1);
printEmployeeInformationV2({ name: "JY", startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck....");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo... ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: ".concat(speed));
}
moveAnimal({ type: "bird", flyingSpeed: 1000 });
// Type casting
// (!) not null 강조
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
var userInputElement = document.getElementById("user-input");
// userInputElement.value = `Hi there!`;
//checking type
if (userInputElement) {
    userInputElement.value = "Hi there!";
}
var errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};
console.log(errorBag.email);
