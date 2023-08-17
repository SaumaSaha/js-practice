const printFactorial = function (number, factorial) {
  console.log("Factorial of ", number, "is : ", factorial);
}

const factorial = function (number) {
  if (number === 0) return 1;
  return number * factorial(number - 1); 
}

const main = function () {
  const args = process.argv;
  const number = +args[2];
  const fact = factorial(number);
  printFactorial(number, fact);
}

main();
