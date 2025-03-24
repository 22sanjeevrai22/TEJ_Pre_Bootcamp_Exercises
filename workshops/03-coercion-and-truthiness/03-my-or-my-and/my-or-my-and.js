// YOUR CODE BELOW
const myOr = (par1, par2, par3) => {
  if (!!par1) return par1;

  if (!!par2) return par2;
  //   if (!par1 && !par2 && !!par3) return par3;
  //   if (!par1 && !par2 && !par3) return par3;
  return par3;
};

const myAnd = (par1, par2, par3) => {
  if (!par1) return par1;
  if (!par2) return par2;
  if (!par3) return par3;
  if (par1 && par2 && par3) return par3;
};
