/*
Codecademy Portfolio Project - JavaScript aka Mixed Messages

This program creates Haiku in three lines

See README.md for specification and details
// test line ** DELETE before going live
//
*/
// console.log('Hello World');

// Create arrays [of arrays]

const lineOneText = [['red', 'fantastic'], ['bandana', 'banana'], ['flows', 'consumes'], ['slowly', 'rapturously']];

const lineTwoText = [['aardvaark, zebra'], ['crouching', 'dreaming']];

const lineThreeText = [['warming','hearing'], ['mountain', 'well-spring'], ['distinctly', 'well']];

// initialise the output variables
let haikuLineOne, haikuLineTwo, haikuLineThree;
const randomiser = lineOneText[0].length; // set to the length of the inner arrays 
const random = Math.floor(Math.random() * randomiser);


// test the randomisation thing
console.log('randomiser = ' + randomiser);
console.log('random     = ' + random);

haikuLineOne = `a ${lineOneText[0][random]} ${lineOneText[1][random]} ${lineOneText[2][random]} ${lineOneText[3][random]} \n`;

haikuLineTwo = `	${lineTwoText[0][random]} ${lineTwoText[1][random]} \n`

haikuLineThree =`${lineThreeText[0][random]} ${lineThreeText[1][random]} ${lineThreeText[2][random]}`;

console.log(haikuLineOne, haikuLineTwo, haikuLineThree);
