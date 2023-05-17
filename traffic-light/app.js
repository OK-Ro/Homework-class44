"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */


const trafficLight = {
  state: 'green',
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log('The traffic light is on', currentState);
  
  // TODO
  // if the color is green, turn it orange
  if(currentState === 'green'){
    trafficLight.state = 'orange'
  }

  // if the color is orange, turn it red
  else if(currentState === 'orange'){
    trafficLight.state = 'red'
  }

  // if the color is red, add 1 to rotations and turn it green
  else{
    rotations++;
    trafficLight.state = 'green'
  }
}
  

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
const trafficLight = {
  state: "green",
};

  



"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  
  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);
  
    if (currentState === "green") {
      trafficLight.stateIndex = 1; // turn it orange
    } else if (currentState === "orange") {
      trafficLight.stateIndex = 2; // turn it red
    } else {
      cycle++; // add 1 to cycles
      trafficLight.stateIndex = 0; // turn it green
    }
  }




//   removing comas
let myString = 'hello,this,is,a,difficult,to,read,sentence';
myString = myString.replace(/,/g, ' ');
console.log(myString);

  
  /**
   * The output should be:
  
  The traffic light is on green
  The traffic light is on orange
  The traffic light is on red
  The traffic light is on green
  The traffic light is on orange
  The traffic light is on red


  /**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`The number ${i} is even!`);
    } else {
      console.log(`The number ${i} is odd!`);
    }
  }


  User
/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
  

// Declare an array of books
let books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: false },
    { title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', alreadyRead: true }
  ];
  
  // Loop through the array of books
  for (let i = 0; i < books.length; i++) {
    // Log the book title and author
    console.log(`${books[i].title} by ${books[i].author}`);
  
    // Check if the book is already read or not
    if (books[i].alreadyRead) {
      console.log(`You already read "${books[i].title}"`);
    } else {
      console.log(`You still need to read "${books[i].title}"`);
    }
  }
  

  User
/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];


// Declare an empty array to hold the drinks
let drinkTray = [];

// Loop 5 times to get 5 drinks
for (let i = 0; i < 5; i++) {
  // Get a random drink type from the drinkTypes array
  let drinkType = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];

  // Check if the drink type already exists in the drinkTray array
  let count = 0;
  for (let j = 0; j < drinkTray.length; j++) {
    if (drinkTray[j] === drinkType) {
      count++;
    }
  }

  // If the drink type already exists twice, get another drink type
  if (count >= 2) {
    i--;
  } else {
    // Otherwise, push the drink type into the drinkTray array
    drinkTray.push(drinkType);
  }
}

// Log the drinks to the console
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);


