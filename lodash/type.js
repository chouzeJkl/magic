/**
 *  因为tostring的call指向传递值会返回对应的对象类型，所以可以拿来做对象类型的的判断
 */
const arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      regexpClass = '[object Regexp]',
      stringClass = '[object String]';
const isArray = (value) => {
    return toString.call(value) === arrayClass;
};
const isBool = (value) => {
    return toString.call(value) === boolClass;
};
const isDate = function(value) {
    return toString.call(value) === dateClass;
};
const isFunc = function(value) {
    return toString.call(value) === funcClass;
};
const isNum = function(value) {
    return toString.call(value) === numberClass;
};
const isRegexp = function(value) {
    return toString.call(value) === regexpClass;
};
const isString = function(value) {
    return toString.call(value) === stringClass;
};
export default {
    isArray,
    isBool,
    isDate,
    isFunc,
    isNum,
    isRegexp,
    isString,
};
