const round = (num) => Math.round(num*10)/10;

const convertToCelsius = function(x) {
  return round((x - 32)*5/9);
};

const convertToFahrenheit = function(x) {
  return round(x*9/5 + 32)
};

// Do not edit below this line
module.exports = {
  round,
  convertToCelsius,
  convertToFahrenheit
};
