const repeatString = function(argStr, argNum) {
  let resultStr = ""
  for(let i=0; i<argNum; i++) resultStr += argStr;
  return argNum >= 0 ? resultStr : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
