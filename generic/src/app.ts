// const names: Array<string | undefined> = ["test"];

// let promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((successMessage) => {
//   console.log(`WOW ${successMessage}`);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "juyoung", hobbies: ["Sports"] }, { age: 28 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = `Got no value.`;
  if (element.length === 1) {
    descriptionText = `Got 1 vlaue.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} value.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Juyoung" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // 원시값만 유효
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Menu");
textStorage.addItem("Juyoung");
textStorage.removeItem("Menu");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// objStorage.addItem({ name: "Juyoung" });
// objStorage.addItem({ name: "Menu" });
// objStorage.removeItem({ name: "Juyoung" }); // -1
// console.log(objStorage.getItems());

// Partial type
interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}
function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal;
}

// readOnly type
const names: Readonly<string[]> = ["Juyoung", "Anna"];
// names.push('Manu')
// names.pop()
