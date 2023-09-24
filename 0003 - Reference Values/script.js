"use strict";

/* 
Reference values are objects that are stored in memory and accessed
through a reference. The include arrays, objects and functions.
When we assign a reference value to a variable, a reference to the original
value is created and stored in memory. Any changes made to the variable affect
the original value.
*/

const aArray = [10, 20, 30];
const bArray = aArray;

console.log(`aArray: ${aArray}`);
console.log(`bArray: ${bArray}`);
console.log();

bArray.push(100, 200, 300);

console.log(`aArray: ${aArray}`);
console.log(`bArray: ${bArray}`);
console.log();

const aObj = {
    data: "Data",
};

const bObj = aObj;

console.log("aObj: ");
console.log(aObj);
console.log();

console.log("bObj: ");
console.log(bObj);
console.log();

bObj.newData = "New data";

console.log("aObj: ");
console.log(aObj);
console.log();

console.log("bObj: ");
console.log(bObj);
console.log();
