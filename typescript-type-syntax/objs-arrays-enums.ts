enum Role { // enum type
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: { name: string; age: number; hobbies: string[]; role: {} } = {
  name: "Juyoung",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  // role: [2, "author"], // tuple
  role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

// person.role = [0, "read-only"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
