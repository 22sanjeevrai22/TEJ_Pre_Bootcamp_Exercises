// YOUR CODE BELOW
const allSystemsGo = function (nestedObj) {
  for (let keys in nestedObj) {
    const value = nestedObj[keys];
    if (typeof value === "object") {
      if (!allSystemsGo(value)) {
        //If there's a problem anywhere, return false immediately. Otherwise, keep checking until I'm 100% sure all systems are GO.
        return false; //
      }
    } else {
      if (value === false) {
        return false;
      }
    }
  }
  return true;
};
