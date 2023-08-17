function isEqualOne (term) {
  return term == 1;
}

function isEqualTwo (term) {
  return term == 2;
}

function fibonacci (term) {
  if (isEqualOne(term)) {
    return 0;
  }
  if (isEqualTwo(term)) {
    return 1;
  }
  return fibonacci(term - 1) + fibonacci(term - 2);
}

console.log(fibonacci(8));
