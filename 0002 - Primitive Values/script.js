"use strict";

/* 
Primitive values are data that are stored directly in a variable. 
These include numbers, booleans, strings, null and undefined.
When we assign a primitive value to a variable, a copy of tha value is
created and stored in memory. Any changes made to the variable do not
affect the original value.
*/

let aNumber = 10;
let bNumber = aNumber;

console.log(`aNumber: ${aNumber}`);
console.log(`bNumber: ${bNumber}`);
console.log();

bNumber = 250;

console.log(`aNumber: ${aNumber}`);
console.log(`bNumber: ${bNumber}`);
