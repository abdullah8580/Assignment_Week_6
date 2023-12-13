// Write a program that checks if the given year is leap year or not.

let checkYear = (year: number) => {
  if (year % 4 == 0 && year % 100 != 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};

console.log(checkYear(2020));
