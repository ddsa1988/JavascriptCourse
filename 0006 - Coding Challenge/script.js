"use strict";

const form = document.querySelector("form");
const divResult = document.querySelector("#div-result");

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
    let textResult = "";

    try {
        const weight = Number(form.weight.value);
        const height = Number(form.height.value);

        const bmi = calculateBmi(weight, height);

        if (bmi === -1) {
            throw new Error("Invalid data. Try again!");
        }

        textResult = `Your BMI is ${bmi.toFixed(2)}`;
    } catch (error) {
        textResult = error.toString();
    } finally {
        const result = document.querySelector("#result");
        const isResultExist = result !== undefined && result !== null;

        if (isResultExist) {
            result.textContent = textResult;
        } else {
            const h2 = document.createElement("h2");
            const h2Text = document.createTextNode(textResult);

            h2.setAttribute("id", "result");
            h2.appendChild(h2Text);

            divResult.appendChild(h2);
        }
    }
});
