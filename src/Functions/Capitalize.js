const capitalize = (str) => {
  let newStr = String(str).trim();
  if (newStr.length <= 1) return newStr.toUpperCase();
  newStr = newStr[0].toUpperCase() + newStr.substring(1);
  return newStr;
};

export default capitalize;
