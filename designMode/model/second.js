var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};
var calculateBouns = function (level, salary) {
    return strategies[level](salary);
};
console.log(calculateBouns('S', 4000));
console.log(calculateBouns('A', 4000));