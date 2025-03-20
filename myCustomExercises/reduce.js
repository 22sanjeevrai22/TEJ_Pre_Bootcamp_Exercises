//Sum of number of an array
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((sum, number) => sum + number, 0);

console.log(result);

//Product of numbers of an array
const numbers = [2, 3, 4];

const result = numbers.reduce((product, number) => product * number, 1);

console.log(result);

//Find max value in an array
const numbers = [10, 5, 20, 8, 25];
const result = numbers.reduce((max, number) => {
  if (number > max) max = number;
  return max;
}, 0);

console.log(result);

//Count the repeated number of fruits
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = words.reduce((acc, word) => {
  if (acc[word] === word) {
    acc[word] += 1; // Increment the count
  } else {
    acc[word] = 1; // Initialize count for the word
  }
  return acc;
}, {});
console.log(result);

//change into single array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const result = nestedArray.reduce((acc, array) => {
  return [...acc, ...array];
}, []);

console.log(result);

//for sum of even number

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.reduce((sum, number) => {
  return number % 2 === 0 ? sum + number : sum;
}, 0);

console.log(result);

// Change into single object
const keyValuePairs = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];

const result = keyValuePairs.reduce((acc, array) => {
  acc[array[0]] = array[1];
  return acc;
}, {});

console.log(result);

// length of string
const strings = ["apple", "banana", "cherry"];
const result = strings.reduce((acc, fruit) => {
  return acc + fruit.length;
}, 0);
console.log(result);

// Remove duplicate from an array
const numbers = [1, 2, 2, 3, 4, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (acc.includes(num)) {
    return acc;
  } else {
    return [...acc, num];
  }
}, []);

console.log(result);

// Group Objects by property
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Tom", age: 30 },
  { name: "Anna", age: 25 },
];

const result = people.reduce((acc, person) => {
  if (acc.hasOwnProperty(person.age)) {
    acc[person.age].push(person);
  } else {
    acc[person.age] = [person];
  }
  return acc;
}, {});

console.log(result);

// Alternative
// Group Objects by property
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Tom", age: 30 },
  { name: "Anna", age: 25 },
];

const result = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [person];
  } else {
    acc[person.age].push(person);
  }
  return acc;
}, {});

console.log(result);
