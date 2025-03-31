// YOUR CODE BELOW
const whosASpecial1 = (petArray) => {
  let message = "";
  petArray.forEach((pet, index) => {
    message += `${pet.name} the ${pet.species} is very special!`;
    if (index < petArray.length - 1) {
      message += " ";
    }
  });
  return message;
};

//Another method
const whosASpecial = (petArray) => {
  let message = [];
  petArray.forEach((pet, index) => {
    // const works here because in forEach a new sentence is created and destroyed during each iteration
    const sentence = `${pet.name} the ${pet.species} is very special!`;
    message.push(sentence);
  });

  return message.join(" ");
};
