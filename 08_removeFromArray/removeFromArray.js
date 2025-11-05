const removeFromArray = function(arr, ...elemArgs) {
  return arr.filter((item) => (elemArgs.includes(item)) ? false : true)
};

// Do not edit below this line
module.exports = removeFromArray;
