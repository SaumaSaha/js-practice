const noOfTerms = 15;
let pattern="";

for(let term = 1; term <= noOfTerms; term = term +1) {
  let currentTerm  = term;
  let isDivisibleByThree = term % 3 == 0;
  let isDivisibleByFive = term % 5 == 0;

  if(isDivisibleByThree && isDivisibleByFive) {
    currentTerm = "fizzbizz";
  }
  else if(isDivisibleByFive) {
    currentTerm = "buzz";
  }
  else if (isDivisibleByThree) {
    currentTerm = "fizz";
  }
  pattern = pattern + " " + currentTerm;
}
console.log(pattern);
