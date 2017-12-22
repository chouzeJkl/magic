import { isArray } from './type';

const arrayMax = (array) => {
    if (isArray(array)) return undefined;
    return Math.max(...array);
}

const arrayMin = (array) => {
    if (isArray(array)) return undefined;
    return Math.min(...array);
}