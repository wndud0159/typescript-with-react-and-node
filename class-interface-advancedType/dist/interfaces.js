"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 2));
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        if (name) {
            this.name = name;
        }
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name));
        }
        else {
            console.log("hi");
        }
    };
    return Person;
}());
var user1;
user1 = new Person(30, "Juyoung");
// user1.name = "New Name";  compile error
user1.greet("HI");
