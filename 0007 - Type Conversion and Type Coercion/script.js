"use strict";

{
    console.log("Type Conversion: ");

    const aNumber = 12.75;
    const strNumber1 = "1988";
    const strNumber2 = "1983Diego";
    const aString = "Diego";

    console.log(String(aNumber));
    console.log(Boolean(aNumber));
    console.log(Number(aString));
    console.log(Boolean(aString));
    console.log(Number(strNumber1));
    console.log(Number(strNumber2));
    console.log(Number.parseInt(strNumber2));
    console.log();
}

{
    console.log("Type Coercion: ");
    // Plus sign always try to converts to string and the others operators always try to converts to number

    console.log("Diego " + 1988);
    console.log("Diego" - 1988);
    console.log("8" + "2");
    console.log("8" - 2);
    console.log("8" * "2");
    console.log("8" / "2");
    console.log("8" ** "2");
    console.log("8" % "2");
    console.log(Math.floor("8.2"));
    console.log(Math.pow("2", "4"));
}
