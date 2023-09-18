"use strict";

//Falsy values when Javascript expects a boolean value: 0, '', undefined, null and NaN

console.log(`Boolean => 0: ${Boolean(0)}`);
console.log(`Boolean => '': ${Boolean("")}`);
console.log(`Boolean => undefined: ${Boolean(undefined)}`);
console.log(`Boolean => NaN: ${Boolean(NaN)}`);
console.log();

//Truthy values when Javascript expects a boolean value: all numbers except 0, array, object, non empty strings and symbol
console.log(`Boolean => 123: ${Boolean(123)}`);
console.log(`Boolean => array: ${Boolean([])}`);
console.log(`Boolean => object: ${Boolean({})}`);
console.log(`Boolean => 'a': ${Boolean("a")}`);
console.log(`Boolean => Symbol('symbol'): ${Boolean(Symbol("symbol"))}`);
