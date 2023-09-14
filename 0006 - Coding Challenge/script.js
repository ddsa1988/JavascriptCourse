"use strict";

const form = document.querySelector("form");
const divForm = document.querySelector("div-form");

const calculateBmi = (weight, height) => {
    const isDataValid =
        Number.isFinite(weight) &&
        Number.isFinite(height) &&
        weight > 0 &&
        height > 0;

    if (isDataValid) {
        return weight / (height * height);
    }

    return -1;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        const weight = Number(form.weight.value);
        const height = Number(form.height.value);

        const bmi = calculateBmi(weight, height);
        console.log(bmi);
    } catch (error) {
        console.error(error.toString());
    }
});
