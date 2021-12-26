var userInput;
var userName;
userInput = 5;
userInput = "Juyoung";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, orCode: code };
}
generateError("An error occurred!", 500);
