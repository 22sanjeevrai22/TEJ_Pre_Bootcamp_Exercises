// YOUR CODE BELOW
const isTruthy = (params) => {
  if (params) {
    return true;
  } else if (params === false) {
    return "The boolean value false is falsey";
  } else if (params === null) {
    return "The null value is falsey";
  } else if (params === undefined) {
    return "undefined is falsey";
  } else if (params === 0) {
    return "The number 0 is falsey (the only falsey number)";
  } else if (params === "") {
    return "The empty string is falsey (the only falsey string)";
  }
};
