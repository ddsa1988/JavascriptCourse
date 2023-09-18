"use strict";

//Loose equality: performs type conversion when comparing two things
console.log(`'1' == 1: ${"1" == 1}`);
console.log(`'0' == 0: ${"0" == 0}`);
console.log(`'1' == true: ${"1" == true}`);
console.log(`'0' == false: ${"0" == false}`);
console.log();

//Strict equality: doesn't perform type conversion when comparing two things
console.log(`'1' === 1: ${"1" === 1}`);
console.log(`'0' === 0: ${"0" === 0}`);
console.log(`'1' === true: ${"1" === true}`);
console.log(`'0' === false: ${"0" === false}`);
