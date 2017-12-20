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
const isDate = (value) => {
    return toString.call(value) === dateClass;
};
const isFunc = (value) => {
    return toString.call(value) === funcClass;
};
const isNum = (value) => {
    return toString.call(value) === numberClass;
};
const isRegexp = (value) => {
    return toString.call(value) === regexpClass;
};
const isString = (value) => {
    return toString.call(value) === stringClass;
};
const isWindow = (object) => {
    return object !== null && object === object.window;
};
const isEmpty = (object) => {
    for (let name in object) {
        return false;
    }
    return true;
}
const isArrayLike = (object) => {
    const isArray = isFinite(object.length) && object.length > 0 && object.length === Math.floor(o.length) && object.length < 4294967296;
    if (object && typeof object === 'object' && isArray) return true;
    return false;
}
export default {
    isArray,
    isBool,
    isDate,
    isFunc,
    isNum,
    isRegexp,
    isString,
    isWindow,
    isEmpty,
    isArrayLike,
};
