type Combineable = number | string; //union type
type ConversionDescriptor = "as-number" | "as-text"; // literal type

function combine(input1: Combineable, input2: Combineable, resultConversion: ConversionDescriptor) {
  let result;
  if (resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("ju", "young", "as-text");
console.log(combinedNames);
