var Plane = function () {};
Plane.prototype.fire = function () {
    console.log('a');
};

var Second = function (plane) {
    this.plane = plane;
};
Second.prototype.fire = function () {
    this.plane.fire();
    console.log('aa');
};
var Third = function (plane) {
    this.plane = plane;
};
Third.prototype.fire = function () {
    this.plane.fire();
    console.log('aaa');
};
var plane = new Plane();
plane.fire();
var second = new Second(plane);
second.fire();
var third = new Third(plane);
third.fire();

/** 装饰器模式，增强功能职责，把一些功能不是那么强大的函数，重新引入，添加新功能
 *
 */
