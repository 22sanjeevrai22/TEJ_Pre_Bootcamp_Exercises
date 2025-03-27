// YOUR CODE BELOW
//Messy code using trial and error.. need to do better
const dogBreeder = (nameOrAge, age = 0) => {
  if (typeof nameOrAge === "number") {
    age = nameOrAge;
    nameOrAge = "Steve";
  }
  let obj = {};
  obj["name"] = nameOrAge ?? "Steve";
  obj["age"] = age;
  return obj;
};
