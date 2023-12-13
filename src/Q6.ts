// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
let suggestAccordingToWeather = (weather: number) => {
  // Taking weather in celsius
  if (weather <= 25) {
    return "Wear warm clothes";
  } else if (weather > 25 && weather <= 30) {
    return "Wear medium clothes, not too warm and not too light";
  } else if (weather > 30) {
    return "Wear light clothes";
  }
};

console.log(suggestAccordingToWeather(41));
