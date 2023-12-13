// Write a program that calculates the percentage.

let findPercentage = (num: number, totalNum: number) => {
  let result = (num / totalNum) * 100;
  return result;
};

console.log(findPercentage(98, 1000));
