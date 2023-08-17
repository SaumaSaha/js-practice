const firstNumber=5;
const secondNumber=4;

const isSecondSquare = firstNumber * firstNumber == secondNumber; 
const isFirstSquare = secondNumber * secondNumber == firstNumber;

let message = firstNumber + " and " + secondNumber + " are not related";

if (isSecondSquare) {
  message = secondNumber + " is square of " + firstNumber;
};
if (isFirstSquare) {
  message = firstNumber + " is square of " + secondNumber;
};

console.log(message);
