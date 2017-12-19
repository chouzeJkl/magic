/** @param t 动画消耗的时间
 * @param b 原始位置
 * @param c 目标位置
 * @param d 持续时间
 */

var tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d ) * t + b;
    },
    easeOut: function (t, b, c, d) {
        return c * (1 - (t = 1 - t / d ) * t) + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
        return c * (( t = t / d - 1) * t * t * t * t + 1) + b;
    },
    sineaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t -1) + b;
    }
};
