// Breanna Young

// Oct 20 2023

// Loop practice

"use strict";

// activate readlineSync
var readlineSync = require('readline-sync');

function main()
{
    // while loops:
    // continues looping until condition is no longer met
   let counterA = 0;
   while (counterA<10){ 
    console.log(counter);
   }

   let counterB = 0;
   while (counterB<10){ 
    console.log(counter);
    break; // break will end the loop, shouldnt be used too much. 
   } // well designed loops dont need to be broken, a conditon will be met to end them

   let counterC = 0;
   while (counterC<10){ 
    console.log(counter);
    counterC = counterC + 1;
    // this provides a condition that will eventualy cause the loop to end
   }

   let counterD = 0;
   let strOutput = "";
   while (counterD<10){ 
    strOutput = strOutput + " " + (counterD);
    counterD = counterD + 1;
    
   }
   console.log(strOutput); // this will print the output all in one line 

}


if (require.main === module)
{
    main();
}