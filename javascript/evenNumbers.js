// Breanna Young

// Oct 20 2023

// print all even numbers between 0 and 100

"use strict";

function main()
{
    let counterD = 0;
    let strOutput = "";
    while (counterD<100){ 
        strOutput = strOutput + ", " + (counterD);
        counterD = counterD + 2;
    }
    console.log(strOutput); // this will print the output all in one line 

}


if (require.main === module)
{
    main();
}