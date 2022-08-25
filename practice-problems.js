"use strict";

// Problem - 1: Multiplay

const muntiplay = (a, b, c) => a * b * c;
// console.log(muntiplay(2, 3, 6));

// Problem - 2: Find Even number length friends

const findEvenNameFriends = (friendsArr) =>
  friendsArr.filter((friend) => !(friend.length % 2));

// console.log(findEvenNameFriends(["Monty", "Shamrat", "Anik", "Saif", "Maruf"]));

// Problem - 3: Calculate square Sum and average of an array

const squareSumAverage = (numbers) =>
  numbers.map((number) => number ** 2).reduce((accu, curr) => accu + curr) / 2;

// console.log(squareSumAverage([3, 4]));

// Problem - 4: Find The largest number of two array

const largest = (numArrOne, numArrTwo) =>
  Math.max(...[...numArrOne, ...numArrTwo]);

// console.log(largest([555, 85, 69, 72], [120, 58, 666, 999]));

// Problem - 5: Convert odd to even

const convertOddToEven = (oddNumbers) => oddNumbers.map((num) => num + 1);
// console.log(convertOddToEven([1, 3, 5, 7, 9]));

// Problem - 6: Divisible by 10
const divisibleByTen = (numbers) => numbers.filter((num) => !(num % 10));
// console.log(divisibleByTen([33, 50, 79, 78, 90, 101, 30]));

// Problem - 7: Add all the elements
const add = (numbers) => numbers.reduce((accu, curr) => accu + curr, 0);
// console.log(add([1, 9, 17, 22]));

// Probel - 8: Calculate total age

const people = [
  { name: "Asif", age: 15 },
  { name: "Kaberi", age: 20 },
  { name: "Asma", age: 22 },
];

const calcTotalAge = (people) =>
  people.reduce((prev, curr) => prev + curr.age, 0);

// console.log(calcTotalAge(people));
