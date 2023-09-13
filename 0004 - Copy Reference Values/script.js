"use strict";

const aArray = [1, 2, 3, [4, 5], 6, 7, [8, 9]];

//Shallow copy
{
    const bArray = [...aArray]; //const bArray = aArray.slice() or const bArray = Array.from(aArray) or const bArray = aArray.copyWithin();
    console.log(aArray);
    console.log(bArray);
    console.log();

    bArray.push(100);
    bArray[3].push(200);
    console.log(aArray);
    console.log(bArray);
    console.log();

    const aObj = {
        data: "Data",
        array: [1, [4, 5]],
    };

    const bObj = { ...aObj }; //const bObj = Object.assign({}, aObj);
    console.log(aObj);
    console.log(bObj);
    console.log();

    bObj["anotherData"] = "Another Data";
    bObj.array.push(100);
    console.log(aObj);
    console.log(bObj);
    console.log();
}

//Deep Copy
{
    const bArray = JSON.parse(JSON.stringify(aArray));
    console.log(aArray);
    console.log(bArray);
    console.log();

    bArray.push(100);
    bArray[3].push(200);
    console.log(aArray);
    console.log(bArray);
    console.log();

    const aObj = {
        data: "Data",
        array: [1, [4, 5]],
    };

    const bObj = Object.create(aObj);
    console.log(aObj);
    console.log(bObj);
    console.log(bObj.__proto__);
    console.log();

    bObj.anotherData = "Another Data";
    bObj.array.push(100);
    console.log(aObj);
    console.log(bObj);
    console.log(bObj.__proto__);
    console.log();
}
