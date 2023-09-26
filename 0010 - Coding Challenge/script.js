"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync();
const data = {};

const NUMBER_OF_TEAMS = 2;
const NUMBER_OF_SCORES = 3;

let counterTeams = 0;
let counterScores = 0;

while (counterTeams < NUMBER_OF_TEAMS) {
    const name = prompt(
        console.log(`Type the ${counterTeams + 1}º team's name: `)
    ).trim();

    if (!(typeof name === "string" && name.length > 0)) {
        console.log("Invalid name.");
        continue;
    }

    data[name] = {
        scores: [],
        avg: 0,
    };

    counterScores = 0;

    while (counterScores < NUMBER_OF_SCORES) {
        try {
            const score = Number(
                prompt(
                    console.log(
                        `Type the ${name} ${counterScores + 1}º score: `
                    )
                )
            );

            if (!(Number.isInteger(score) && score > 0)) {
                throw new Error("Invalid score.");
            }

            data[name].scores.push(score);
            data[name].avg += score;

            counterScores++;
        } catch (error) {
            console.error(error.toString());
        }
    }

    data[name].avg /= data[name].scores.length;
    counterTeams++;
}

console.log(data);
