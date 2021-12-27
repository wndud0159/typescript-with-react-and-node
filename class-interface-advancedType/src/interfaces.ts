interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(1, 2));

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greettable extends Named {
  greet: (phrase: string) => void;
}

class Person implements Greettable {
  name?: string;

  constructor(private age: number, name?: string) {
    if (name) {
      this.name = name;
    }
    this.age = age;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("hi");
    }
  }
}

let user1: Greettable;

user1 = new Person(30, "Juyoung");

// user1.name = "New Name";  compile error

user1.greet("HI");
