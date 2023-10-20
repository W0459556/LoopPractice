// Breanna Young

// Oct 20 2023

// print pattern of #'s horizontaly and vertically based on variable

"use strict";

// activate readlineSync
var readlineSync = require('readline-sync');

function main()
{
    let keepPlaying = true;
    while(keepPlaying == true){
        let counter = 0; // for printing the right amount of vertical lines
        let length = parseInt(readlineSync.question("What is the length of your square? ")); // to ask user for how large they want the square ot be 
        let width = 0; // to determine the amount of # horizontally
        let side = ""; // to print that amount of #'s
        // printing a pattern 4 times
        while (width<length){ 
            side = side + "#";
            width = width + 1;
        }

        // to print the amount of lines
        while(counter<length){
            console.log(side);
            counter = counter + 1;
        }
        
        // asking the user if they want to keep playing
        let keepPlayingQuestion = readlineSync.question("Would you like to keep playing? [yes]/[no] ");

        if((keepPlayingQuestion.toLowerCase() == "yes") || (keepPlayingQuestion.toLowerCase() == "y")){
            keepPlaying = true;
        }
        else{
            keepPlaying = false;
        }
    }



}


if (require.main === module)
{
    main();
}