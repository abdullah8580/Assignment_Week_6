// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

let checkNumber = (num: number) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return `The number ${num} is divisible by both 3 and 5`;
  } else if (num % 3 == 0 && num % 5 != 0) {
    return `The number ${num} is divisible by 3 but not by 5`;
  } else if (num % 5 == 0 && num % 3 != 0) {
    return `The number ${num} is divisible by 5 but not by 3`;
  } else {
    return `The number ${num} is not divisible by either 3 or 5`;
  }
};

console.log(checkNumber(5));
