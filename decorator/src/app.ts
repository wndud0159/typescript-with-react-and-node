// meta programming

function Logger(logString: string) {
  console.log(`LOGGER FACTORY`);
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

// 데코레이터는 클래스 정의시 나오지만 이렇게 함으로써 인스턴스 생성시에 나오게 가능
function WithTemplate(template: string, hookId: string) {
  console.log(`TEMPLATE FACTORY`);
  return function <T extends { new (...arg: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log(`Rendering Template`);
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger(`LOGGING - PERSON`)
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "JY";

  constructor() {
    console.log(`Creating person object...`);
  }
}
const pers = new Person();
console.log(pers);

//-----------

function Log(target: any, propertyName: string | symbol) {
  console.log(`Property decorator!`);
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(`Accessor decorator!`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(`Method decorator!`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log(`Parameter decorator!`);
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(`Invaild price - should be positive!`);
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 30);

//--------------

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const objDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return objDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage); // underfind / later decriptor add 'This works!'
// button?.addEventListener("click", p.showMessage.bind(p));

//-------------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ["required", "positive"]
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: string;
  constructor(title: string, price: string) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = priceEl.value;

  const createCourse = new Course(title, price);
  if (!validate(createCourse)) {
    alert("Invalid input, please try again");
  }
  console.log(createCourse);
});
