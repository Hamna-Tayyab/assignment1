"use strict";
// Question 14
let guestList = ["Hina", "Mustfa", "Zahid", "Ali"];
function printInvitation(name) {
    console.log("Dear", name + ", you are invited to dinner at my home. Come and join us!");
}
;
for (let i = 0; i < guestList.length; i++)
    printInvitation(guestList[i]);
// Question 15
let cantMakeIt = guestList.shift();
console.log(cantMakeIt + " can't make it.");
let newGuestList = guestList.unshift("Hassan");
for (let i = 0; i < guestList.length; i++) {
    printInvitation(guestList[i]);
}
;
// Question 16
console.log("\nGood news! I've found a bigger dinner table!");
newGuestList = guestList.unshift("Zaib");
guestList.splice(2, 0, "Zoha");
for (let i = 0; i < guestList.length; i++) {
    printInvitation(guestList[i]);
}
;
// Question 17
console.log("\nSorry, the dinner table won't arrive in time, and we can in only two people for dinner.");
while (guestList.length > 2) {
    const removeGuest = guestList.pop();
    console.log(removeGuest + ",", "I'm sorry. I can't invite you to dinner.");
}
;
console.log("\nInvitation for remaining");
for (let i = 0; i < guestList.length; i++) {
    printInvitation(guestList[i]);
}
;
guestList.length = 0;
console.log("Empty guest list" + guestList);
// Question 19
console.log("Number of guests in the dinner");
let numOfGuest = guestList.length;
console.log(numOfGuest);
