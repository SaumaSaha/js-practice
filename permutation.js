function factorial(number) {
  return (number==0) ? 1 : number * factorial(number-1);
}

function permutation(n,r) {
  return factorial(n)/factorial(n-r);
}

console.log(permutation(8,5));
