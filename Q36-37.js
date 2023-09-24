"use strict";
// Question 36
function make_shirt(size, message) {
    console.log(`Shirt Size:${size},  message: ${message}`);
}
make_shirt(32, "I love to wear T-shirts!");
// Question 37
function make_shirtupdated(size = "Large", message = "I Love Typescript!") {
    console.log(`Shirt Size: ${size}, message: ${message}`);
}
make_shirtupdated();
make_shirtupdated("Medium");
make_shirtupdated("Small", "You are Awesome!");
