/* eslint-disable no-restricted-syntax */
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // list of the cart

  beers: 3.75,
  chips: 2.99,
  eggs: 3.25,
  bananas: 2.5,
  milk: 1.0,
  apples: 2.0,
};
function calculateTotalPrice(myCart) {
  let total = 0;
  for (let item in myCart) {
    total += myCart[item];
  }
  return `Total: ${total}`;
}

const totalPrice = calculateTotalPrice(cartForParty);
console.log(totalPrice);

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: calculateTotalPrice should take one parameter');

  const expected = 'Total: 0';
  const result1 = calculateTotalPrice({});
  if (result1 === expected) {
    console.log('Test passed!');
  } else {
    console.log('Test failed! Expected:', expected, 'but got:', result2);
  }
}


function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const expected = "Total: 13.48";
  const result2 = calculateTotalPrice(cartForParty);
  if (result2 === expected) {
    console.log("Test passed!");
  } else {
    console.log("Test failed! Expected:", expected, "but got:", result2);
  }
}

// PLEASE I STILL DONT KNOW THE CONCEPTS OF TESTING CODE HAVE TRIED BUT CANT FIGURE OUT

function test() {
  test1();
  test2();
}

test();
