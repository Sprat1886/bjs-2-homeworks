"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
      arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
      console.log(`x1 = ${arr[0]},\nx2 = ${arr[1]}.`);
  } else if (d === 0) {
      arr.push(-b / (2 * a));
      console.log(`x = ${arr[0]}.`);
  } else {
      arr = [];
      console.log("Корней нет!");
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p, monthlyPayment;

  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;

  p = percent / 100 / 12;
  monthlyPayment = (amount - contribution) * (p + p / ((1 + p) ** countMonths - 1));

  if (Number.isNaN(monthlyPayment * countMonths)) {
      return false;
  } else {
      return +(monthlyPayment * countMonths).toFixed(2);
  }
}

console.log(solveEquation(1, 3, 1));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
