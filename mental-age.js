const getInput = require("./get-input.js");

const UserAge = getInput();
if (UserAge === "--help") {
    console.log("This function returns your mental age.");
    console.log('Please enter your age after "node mental-age.js" and a space.');
}

const MentalAge = UserAge / 2 + 3;
const ageNextYear = Number(UserAge) + 1;
console.log("Next year you'll be " + ageNextYear + " years old")

console.log("You are" + UserAge + "years old.");

console.log("your mental age is " + MentalAge + "years old.");

console.log(MentalAge);