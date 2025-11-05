const reverseString = function(argStr) {
  let tempStr = "";
  for(let i=1; i<=argStr.length; i++) {
    tempStr += argStr.at(-i)
  }
  return tempStr
};

// Do not edit below this line
module.exports = reverseString;
