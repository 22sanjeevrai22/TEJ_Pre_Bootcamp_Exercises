// Pattern 1: Left-aligned half pyramid with trailing spaces
const num = 5;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= num - i; j++) {
    process.stdout.write(" ");
  }
  console.log("\n");
}

// Pattern 2: Right-aligned half pyramid using process.stdout.write
const n1 = 5;
for (let i = 1; i <= n1; i++) {
  for (let j = 1; j <= n1 - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("\n");
}

// Pattern 3: Right-aligned half pyramid using string building
const n2 = 5;
for (let i = 1; i <= n2; i++) {
  let stars = "";
  for (let j = 1; j <= n2 - i; j++) {
    stars += " ";
  }
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// Pattern 4: Inverted left-aligned half pyramid
const n3 = 5;
for (let i = 0; i < n3; i++) {
  let stars = "";
  for (let j = 1; j <= n3 - i; j++) {
    stars += "*";
  }
  // Trailing space code is commented out
  console.log(stars);
}

// Pattern 5: Centered pyramid of stars
const n4 = 5;
for (let i = 1; i <= n4; i++) {
  let star = "";
  for (let j = 1; j <= n4 - i; j++) {
    star += " ";
  }
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  for (let j = 1; j <= i - 1; j++) {
    star += "*";
  }
  // Unused extra space loop is commented out
  console.log(star);
}

// Pattern 6: Centered pyramid using string repeat
const n5 = 5;
for (let i = 1; i <= n5; i++) {
  const spaces = " ".repeat(n5 - i);
  const stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

// Pattern 7: Inverted centered pyramid
const n6 = 5;
for (let i = 1; i <= n6; i++) {
  const spaces = " ".repeat(i - 1);
  const stars = "*".repeat(2 * (n6 - i) + 1);
  console.log(spaces + stars);
}

// Problem: Reverse a string
function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverse("gundam")); // Output: madnug

// Problem: Reverse a number including negatives
function reverseNumber(num) {
  let isNegative = num < 0;
  let reversedNum = 0;
  num = Math.abs(num);
  while (num > 0) {
    const ones = num % 10; // Extract last digit
    num = Math.floor(num / 10); // Remove last digit
    reversedNum = reversedNum * 10 + ones;
  }
  return isNegative ? -reversedNum : reversedNum;
}
console.log(reverseNumber(-123)); // Output: -321

// Problem: Check if a number is prime
function isPrime(num) {
  if (num <= 1) return "Not a prime Number";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "Not a prime Number";
    }
  }
  return "It is a prime Number";
}
console.log(isPrime(23)); // Output: It is a prime Number

// Problem: Recursive factorial calculation
function factorial(num) {
  if (num < 0) return "No Factorial";
  if (num === 1 || num === 0) return 1;
  console.log("multipliers", num); // Debugging purpose
  return num * factorial(num - 1);
}
console.log(factorial(10)); // Output: 3628800

// Problem: Flatten a nested array recursively
function flattenArray(arr) {
  let resultingArray = [];
  console.log("resultingarray", resultingArray); // Debug
  for (let element of arr) {
    if (Array.isArray(element)) {
      resultingArray = [...resultingArray, ...flattenArray(element)];
    } else {
      resultingArray.push(element);
    }
  }
  return resultingArray;
}
const input = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray(input)); // Output: [1, 2, 3, 4, 5, 6, 7]

// Problem: Bubble sort implementation
function bubbleSort(arr) {
  const lastItem = arr.length - 1;
  for (let i = 0; i <= lastItem; i++) {
    for (let j = 0; j <= lastItem - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 55, 6, 12, 3, 2])); // Output: Sorted array

// Problem: Recursively find smallest number in array
function recSmallestInt(arr) {
  if (arr.length === 1) return arr[0];
  if (arr[0] < recSmallestInt(arr.slice(1))) {
    return arr[0];
  }
  return recSmallestInt(arr.slice(1));
}
console.log(recSmallestInt([2, 5, 4, 3, -1, 0, 56])); // Output: -1

// Problem: Recursive Fibonacci
function fib(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(6)); // Output: 8 (Fibonacci series: 1 1 2 3 5 8)
