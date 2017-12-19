var getLevelS = function (salary) {
  return 4 * salary;
};
var getLevelA = function (salary) {
    return 3 * salary;
};
var getLevelB = function (salary) {
    return 2 * salary;
};
var calculateBonus = function (level, salary) {
    if (level === 's') {
        return getLevelS(salary);
    }
    if (level === 'a') {
        return getLevelA(salary);
    }
    if (level === 'b') {
        return getLevelB(salary);
    }
};

console.log(calculateBonus('s', 4000));
console.log(calculateBonus('a', 1000));
/**
 *  calculateBonus函数可能越来越大
 */
