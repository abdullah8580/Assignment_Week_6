// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

let fahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

let celsiusToFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

console.log(fahrenheitToCelsius(58));
console.log(celsiusToFahrenheit(14.44));
