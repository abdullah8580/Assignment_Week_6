"use strict";
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let checkWeekDay = (dayNum) => {
    if (dayNum > 0 && dayNum <= 7) {
        if (dayNum == 1) {
            return "Monday";
        }
        else if (dayNum == 2) {
            return "Tuesday";
        }
        else if (dayNum == 3) {
            return "Wednesday";
        }
        else if (dayNum == 4) {
            return "Thursday";
        }
        else if (dayNum == 5) {
            return "Friday";
        }
        else if (dayNum == 6) {
            return "Saturday";
        }
        else if (dayNum == 7) {
            return "Sunday";
        }
    }
    else {
        console.log("Select a day number between 1 and 7");
    }
};
console.log(checkWeekDay(6));
