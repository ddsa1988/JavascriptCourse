"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync();
const pointsTeamA = [];
const pointsTeamB = [];
const MAX_POINTS = 3;

let counter = 0;

while (counter < MAX_POINTS) {
    try {
        const score = Number(
            prompt(console.log(`Type the team A ${counter + 1}º score: `))
        );

        if (!(Number.isInteger(score) && score > 0)) {
            throw new Error("Invalid score.");
        }

        pointsTeamA.push(score);
        counter++;
    } catch (error) {
        console.error(error.toString());
    }
}

counter = 0;

while (counter < MAX_POINTS) {
    try {
        const score = Number(
            prompt(console.log(`Type the team B ${counter + 1}º score: `))
        );

        if (!(Number.isInteger(score) && score > 0)) {
            throw new Error("Invalid score.");
        }

        pointsTeamB.push(score);
        counter++;
    } catch (error) {
        console.error(error.toString());
    }
}

console.log(pointsTeamA);
console.log(pointsTeamB);
