// Breanna Young

// Oct 20 2023

// print all even numbers between 0 and 100

"use strict";

function main()
{
    let counter = 0;
    let strOutput = "";
    // while loops
    while (counter<=100){ 
        strOutput = strOutput + (counter) + ", ";
        counter = counter + 2;
    }
    console.log(strOutput); // this will print the output all in one line
    

    strOutput = ""
    // for loops
    for(let counter = 0; counter <= 100; counter = counter +1){
        if (counter%2 == 0){
            strOutput = strOutput + counter + ", ";
        }
    }
    console.log(strOutput)

}


if (require.main === module)
{
    main();
}