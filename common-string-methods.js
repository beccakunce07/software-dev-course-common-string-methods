/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.
*/

let stringActivityOne = `Learning JavaScript is fun!`
console.log(stringActivityOne.includes("JavaScript"));
console.log(stringActivityOne.indexOf("fun"));

/*

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

*/

let stringActivityTwo = " CODE BOOTCAMP ";
let lowerCaseTextTwo = stringActivityTwo.toLowerCase();
let lowerCaseTextTwoClean = lowerCaseTextTwo.trim();

console.log(lowerCaseTextTwoClean);
/*

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

*/
let sentence = "Coding is fun and educational";
let splitSentence = sentence.split(" ");
console.log(splitSentence);
/*
Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

*/
let bootCamp = "Bootcamp";
console.log(bootCamp.charAt(0));

console.log(bootCamp.slice(4,8));

/*

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").

*/
let customerName = "John Doe";
let order = "Apple, Banana, Grape";
let total = "Total: $20.50";

let string = `Customer: ${customerName}
Order: ${order}
${total}`

let splitString = string.split(" ");
console.log(splitString);

let upperTotal = total.toUpperCase();

console.log(upperTotal);


/*
Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

  */
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let hasJavaScript = inputString.includes("JavaScript");


let codingPosition = inputString.indexOf("Coding");


let startsWithWelcome = inputString.startsWith("Welcome");


let endsWithToday = inputString.endsWith("today.");


  /*
2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

*/
let lowerCaseString = inputString.toLowerCase();

let upperCaseString = inputString.toUpperCase();

let replacedString = inputString.replace("JavaScript", "coding");


/*
3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.
*/
let wordsArray = inputString.split(" ");


/*
4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/
let trimmedString = inputString.trim();
let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = trimmedString.slice(22,30);


// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowerCaseString,
  upperCaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
