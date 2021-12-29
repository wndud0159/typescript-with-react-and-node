"use strict";
// const names: Array<string | undefined> = ["test"];
// let promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });
// promise.then((successMessage) => {
//   console.log(`WOW ${successMessage}`);
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "juyoung", hobbies: ["Sports"] }, { age: 28 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = `Got no value.`;
    if (element.length === 1) {
        descriptionText = `Got 1 vlaue.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} value.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Juyoung" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        // 원시값만 유효
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Menu");
textStorage.addItem("Juyoung");
textStorage.removeItem("Menu");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
// readOnly type
const names = ["Juyoung", "Anna"];
// names.push('Manu')
// names.pop()
