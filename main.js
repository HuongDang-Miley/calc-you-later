const calculate = require('./calculate-back-end.js')

function getInput(i) {
    return process.argv[i+2]
}

let num1 = getInput(0)
let num2 = getInput(2)
let operation = getInput(1)

function userInput() {
  if (getInput(3)) {
     operation = getInput(1) + ' ' + getInput(2)
     num2 = getInput(3)
     return calculate(num1, num2, operation)
  } else if (!getInput(3)) {
    return calculate(num1, num2, operation)
  }
}

console.log(userInput(num1, num2, operation))
