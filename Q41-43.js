"use strict";
// Question 41
let magicians = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
const show_magician = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
show_magician(magicians);
// Question 42
const make_great = (magicians) => {
    let modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
};
make_great(magicians);
show_magician(magicians);
// Question 43
let modifiedArray = make_great([...magicians]);
console.log("Original Magicians:");
show_magician(magicians);
console.log("Modified Magicians:");
show_magician(modifiedArray);
