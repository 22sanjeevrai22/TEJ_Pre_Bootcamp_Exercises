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

//Anu's method
// YOUR CODE BELOW
function rotateArray(originalArray,rotateNum){
  if(rotateNum===0){
    return originalArray
  }else if(rotateNum<0){///123 231
      for(let i=0;i<-rotateNum;i++){
        temp=originalArray[0]
        for(let j=0;j<originalArray.length;j++
        ){
            if(j==originalArray.length-1){
                originalArray[j]=temp
            }else{
                originalArray[j]=originalArray[j+1]
            }
        }
      }
    return originalArray
  }else{
     for(let i=0;i<rotateNum;i++){ //123=312
        
        temp=originalArray[originalArray.length-1]
        for(let j=originalArray.length-1;j>=0;j--
        ){
            if(j==0){
                originalArray[j]=temp
            }else{
                originalArray[j]=originalArray[j-1]
            }
        }
      }
    return originalArray
  }
}
console.log(rotateArray([1,2,3],1))
