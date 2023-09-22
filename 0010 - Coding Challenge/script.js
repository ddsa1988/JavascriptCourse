"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync();

const print = (delay, msg) => {
    const isDataValid =
        Number.isInteger(delay) && delay >= 0 && typeof msg === "string";
    if (isDataValid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log(msg));
            }, delay);
        });
    } else {
        throw new Error("Invalid function parameters");
    }
};

print(1000, "Test");
