// YOUR CODE BELOW
//It's like a circular loop
const rotateArray = (array, step) => { 
  let newArray = [];
  if (step !== undefined) {
    for (let i = 0; i < array.length; i++) {
      let j = (i + step) % array.length;
      if (j < 0) j = j + array.length;
      newArray[j] = array[i];
    }
    return newArray;
  }
  return array;
};

const rotateArray = (originalArray, rotateNum) => {
  const length = originalArray.length;

  // Normalize the rotation number
  if (rotateNum === 0) return [...originalArray];

  if (rotateNum > 0) {
    // Right rotation
    return originalArray.slice(-rotateNum).concat(originalArray.slice(0, length - rotateNum));
  } else {
    // Left rotation
    return originalArray.slice(-rotateNum).concat(originalArray.slice(0, -rotateNum));
  }
};

//Next Method
  function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}

rotateNum Solution
