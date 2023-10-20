// Breanna Young

// Oct 20 2023

// print all even numbers between 0 and 100

"use strict";

function main()
{
    let counter = 0;
    let strOutput = "";
    while (counter<101){ 
        strOutput = strOutput + (counter) + ", ";
        counter = counter + 2;
    }
    console.log(strOutput); // this will print the output all in one line 

}


if (require.main === module)
{
    main();
}