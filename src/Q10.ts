// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

let calcTax = (units: number) => {
  let pricePerUnit: number = 15;
  let totalBill: number = pricePerUnit * units;

  //   Not using Math.floor() for exact Calculation

  if (units > 100 && units <= 200) {
    return `${totalBill * 0.1} tax added according to ${units} units`;
  } else if (units > 200 && units < 500) {
    return `${totalBill * 0.15} tax added according to ${units} units`;
  } else if (units > 500) {
    return `${totalBill * 0.25} tax added according to ${units} units`;
  } else {
    return `No tax applied to less then 100 units and your units are ${units}`;
  }
};

console.log(calcTax(175));
