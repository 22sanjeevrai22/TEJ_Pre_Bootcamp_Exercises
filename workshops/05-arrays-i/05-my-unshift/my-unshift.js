// YOUR CODE BELOW
const myUnshift = (arr, value) => {
  const haha = arr.unshift(value);
  return arr;
};

//Next Method
function myUnshift2(array,value){
    let result=[]
    result.push(value)
    for (let i=0;i<array.length;i++){
        result[i+1]=array[i]
    }
    return result
}
console.log(myUnshift([1, 2, 3], 0))

function myUnshift3(arr, val) {
  return [val].concat(arr);
}
