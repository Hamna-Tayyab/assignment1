"use strict";
const car_function = (manufacturer, model, options) => {
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    return car;
};
console.log(car_function("Toyota", 2015, ["Blue", true, "Camry, XLE"]));
