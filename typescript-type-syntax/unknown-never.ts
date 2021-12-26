let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Juyoung";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, orCode: code };
}

generateError("An error occurred!", 500);
