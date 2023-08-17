function sumOfTwo (addend, augend) {
  return addend + augend;
}

function sumOfThree (firstNumber, secondNumber, thirdNumber) {
  return sumOfTwo(sumOfTwo(firstNumber, secondNumber), thirdNumber);
}

function averageOfFive(num1, num2, num3, num4, num5) {
  return sumOfThree(sumOfThree(num1, num2, num3), num4, num5) / 5;
}

console.log(averageOfFive(1, 2, 3, 4, 4.5));
