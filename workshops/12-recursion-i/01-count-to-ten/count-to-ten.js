// YOUR CODE BELOW
function countToTen(num) {
  //base case
  if (num > 10) return;

  console.log(num);
  countToTen(num + 1);
}
