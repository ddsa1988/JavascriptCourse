"use strict";

function tipCalculator(value) {
    const minValue = 50;
    const maxValue = 300;
    const tip1 = 15 / 100;
    const tip2 = 20 / 100;

    return value >= minValue && value <= maxValue ? value * tip1 : value * tip2;
}
const bill = 430;
const tip = tipCalculator(bill);
const total = bill + tip;

console.log(
    `The bill was ${bill}, the tip was ${tip} and the total value was ${total}`
);
