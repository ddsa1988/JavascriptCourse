"use strict";

{
    /*  
        Const variables: 
        The value must be assign to the variable at the initialization;
        The value cannot be changed after declaration;
        The variable cannot be accessed before initialization;
        The variable is block scope.
    */

    try {
        console.log(aConst);
    } catch (error) {
        console.error(error.toString());
    }

    const aConst = "Diego";

    try {
        aConst = "Amanda";
        console.log(`Value changed to ${aConst}`);
    } catch (error) {
        console.error(error.toString());
    }
}

console.log();

{
    /*  
        Let variables: 
        The value can be changed after declaration;
        The variable cannot be accessed before initialization;
        The variable is block scope.
    */

    try {
        console.log(aLet);
    } catch (error) {
        console.error(error.toString());
    }

    let aLet = "Diego";

    try {
        aLet = "Amanda";
        console.log(`Value changed to ${aLet}`);
    } catch (error) {
        console.error(error.toString());
    }
}

console.log();

{
    /*  
        Var variables: 
        The value can be changed after declaration;
        The variable can be accessed before initialization, but it's value undefined;
        The variable is global scope.
    */

    try {
        console.log(aVar);
    } catch (error) {
        console.error(error.toString());
    }

    var aVar = "Diego";

    try {
        aVar = "Amanda";
        console.log(`Value changed to ${aVar}`);
    } catch (error) {
        console.error(error.toString());
    }
}

console.log();

try {
    console.log(`aConst: ${aConst}`);
} catch (error) {
    console.error(error.toString());
}

try {
    console.log(`aLet: ${aLet}`);
} catch (error) {
    console.error(error.toString());
}

try {
    console.log(`aVar: ${aVar}`);
} catch (error) {
    console.error(error.toString());
}
