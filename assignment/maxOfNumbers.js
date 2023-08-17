function maxOfTwo (firstNumber, secondNumber) {
  return firstNumber < secondNumber ? secondNumber : firstNumber;
}

function maxOfThree(firstNumber, secondNumber, thirdNumber) {
  return maxOfTwo(maxOfTwo(firstNumber, secondNumber), thirdNumber);
}

console.log(maxOfTwo(5, 6));
console.log(maxOfThree(5, 20, 6));
