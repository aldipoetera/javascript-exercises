const sumAll = function(a, b) {
  if ([a, b]
    .map((x) => typeof x)
    .some((y) => y!=="number" )) {
    return "ERROR"
  }

  if ([a,b].some((y) => (y<=0) || (Math.floor(y)!==y))) {
    return "ERROR"
  }

  let sum = 0;
  let i = a;
  const sgn = Math.sign(b-a);
  const bnd = b+sgn;
  do {
    sum += i;
    i += sgn;
  } while (i !== bnd)
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
