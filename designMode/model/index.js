var calculateBonus = function (level, salary) {
  if (level === 's') {
      return 4 * salary;
  }
  if (level === 'a') {
    return 3 * salary;
  }
  if (level === 'b') {
    return 2 * salary;
  }
};

console.log(calculateBonus('s', 4000));
console.log(calculateBonus('a', 1000));
/**
 * 函数庞大，if-else语句覆盖逻辑
 * 复用性差,可用性差 ,改变代码的可扩展性，易于维护
 */
