// YOUR CODE BELOW
function getDogBreeder(dogName, dogAge) {
  return function dogBreeder(newDogName = dogName, newDogAge = dogAge) {
    if (typeof newDogName === "number") {
      newDogAge = newDogName;
      newDogName = dogName;
    }
    return {
      name: newDogName,
      age: newDogAge,
    };
  };
}
