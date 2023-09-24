// Tests for equality and inequality with strings:
console.log("Hamna" === "Hamna") // true
console.log("Hamna" !== "Hamna") // false

// Tests using the lowercase function:
console.log("HELLO".toLowerCase() === "hello") // true
console.log("Python".toLocaleLowerCase() === "PYTHON") // false

// Numerical tests:
console.log(5 === 5); // true
console.log(2 < 1); // false

// Tests using "and" and "or" operators:
console.log("Hello" !== "Hello" && "WORLD" === "WORLD") // false
console.log(2 < 1 || 4 >= 3) // true

// Test whether an item is in an array:
const friends:string[] = ["Alina", "Maryam", "Reehan", "Aqsa", "Umer"]
console.log(friends.includes("Alina")); //true
console.log(friends.includes("Robina")); //false

// Test whether an item is in an array:
const theNumbers = [1, 2, 3, 4, 5];
console.log(!theNumbers.includes(6)); // true
console.log(!theNumbers.includes(3)); // false