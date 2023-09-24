"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinalEnding = "";
    if (number === 1) {
        ordinalEnding = "st";
    }
    if (number === 2) {
        ordinalEnding = "nd";
    }
    if (number === 3) {
        ordinalEnding = "rd";
    }
    if (number === 4) {
        ordinalEnding = "th";
    }
    if (number === 5) {
        ordinalEnding = "th";
    }
    if (number === 6) {
        ordinalEnding = "th";
    }
    if (number === 7) {
        ordinalEnding = "th";
    }
    if (number === 8) {
        ordinalEnding = "th";
    }
    if (number === 9) {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}
