// YOUR CODE BELOW
const myReverse = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
};

// YOUR CODE BELOW
function myReverse2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}

