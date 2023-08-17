function simpleInterest (principle, rate, time) {
  return (principle * rate * time) / 100;
}

function compoundInterest (principle, rate, period, time) {
  const compoundingPeriod = (12 / period) * time ;
  const actualRate = (rate * period) / 12;
  return (principle * Math.pow((1 + (actualRate / 100)), compoundingPeriod)) - principle;
}

console.log(simpleInterest(1000, 5, 2));
console.log(compoundInterest(1000, 5, 6, 2));
