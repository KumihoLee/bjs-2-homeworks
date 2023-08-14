"use strict"
function solveEquation(a, b, c) {
  const D = b**2-4*a*c;
  if (D < 0) { 
    return []; 
  }
  if (D === 0) {
    const x = -b/(2*a);
    return [x];
  }
  const x1 = (-b + Math.sqrt(D) )/(2*a);
  const x2 = (-b - Math.sqrt(D) )/(2*a);
  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentBet = percent/100;
  const percentBetMonth = percentBet/12;
  const monthPrice = (amount - contribution)  * (percentBetMonth + (percentBetMonth / (((1 + percentBetMonth)**countMonths) - 1)));
  const resultSum = Number((monthPrice * countMonths).toFixed(2));
  return resultSum;
}