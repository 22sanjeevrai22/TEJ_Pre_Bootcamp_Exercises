// YOUR CODE BELOW
const cloneMachine = (parentObj) => {
  let clonedAnimal = { ...parentObj };

  clonedAnimal.name = parentObj.name + "Clone";
  clonedAnimal.offspring = [];

  parentObj.offspring.push(clonedAnimal.name);

  return clonedAnimal;
};
