const getInput = require("./get-input.js");
const fizzy = require("./fizzy-backend.js");

const userInput = getInput();
const answer = fizzy(userInput);
console.log(answer);