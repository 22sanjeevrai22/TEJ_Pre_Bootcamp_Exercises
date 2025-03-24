// YOUR CODE BELOW
const onlyOne = (par1, par2, par3) => {
  if (par1 && !par2 && !par3) return true;
  if (!par1 && par2 && !par3) return true;
  if (!par1 && !par2 && par3) return true;
  if (!par1 && !par2 && !par3) return false;
  return false;
};
