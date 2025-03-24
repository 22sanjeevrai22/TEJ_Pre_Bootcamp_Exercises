// YOUR CODE BELOW
const howEqual = (par1, par2) => {
  if (par1 === par2) return "strictly";
  if (par1 == par2) return "loosely";
  if (par1 !== par2) return "not equal";
};
