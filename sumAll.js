const sumAll = function(a, b) {
    if(isNaN(a) || isNaN(b)) return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR'
    let min = Math.min(a, b), max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
  };
module.exports = sumAll;